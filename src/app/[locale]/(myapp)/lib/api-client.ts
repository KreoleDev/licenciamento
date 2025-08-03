export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
}

interface ApiConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

interface RequestInterceptor {
  (config: RequestInit): RequestInit | Promise<RequestInit>;
}

interface ResponseInterceptor {
  (response: Response): Response | Promise<Response>;
}

class ApiClient {
  private config: ApiConfig;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];

  constructor(config: ApiConfig = {}) {
    this.config = {
      baseURL: '',
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      ...config,
    };
  }

  // Add request interceptor
  addRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  // Build full URL
  private buildUrl(path: string): string {
    if (path.startsWith('http')) {
      return path;
    }
    return `${this.config.baseURL}${path}`;
  }

  // Apply request interceptors
  private async applyRequestInterceptors(config: RequestInit): Promise<RequestInit> {
    let finalConfig = config;
    for (const interceptor of this.requestInterceptors) {
      finalConfig = await interceptor(finalConfig);
    }
    return finalConfig;
  }

  // Apply response interceptors
  private async applyResponseInterceptors(response: Response): Promise<Response> {
    let finalResponse = response;
    for (const interceptor of this.responseInterceptors) {
      finalResponse = await interceptor(finalResponse);
    }
    return finalResponse;
  }

  // Retry logic
  private async retryRequest<T>(
    requestFn: () => Promise<ApiResponse<T>>,
    retries: number,
  ): Promise<ApiResponse<T>> {
    try {
      return await requestFn();
    } catch (error) {
      if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.config.retryDelay));
        return this.retryRequest(requestFn, retries - 1);
      }
      throw error;
    }
  }

  // Enhanced fetch with interceptors and retry logic
  async request<T = any>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);

    // Apply request interceptors
    const finalOptions = await this.applyRequestInterceptors(options);

    // Add default headers
    const headers = {
      'Content-Type': 'application/json',
      ...finalOptions.headers,
    };

    const requestFn = async (): Promise<ApiResponse<T>> => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      try {
        const response = await fetch(fullUrl, {
          ...finalOptions,
          headers
        });

        clearTimeout(timeoutId);

        // Apply response interceptors
        const finalResponse = await this.applyResponseInterceptors(response);

        const responseData = await finalResponse.json().catch(() => null);

        if (!finalResponse.ok) {
          return {
            error:
              responseData?.error || `HTTP ${finalResponse.status}: ${finalResponse.statusText}`,
            status: finalResponse.status,
            data: responseData,
          };
        }

        return {
          data: responseData,
          status: finalResponse.status,
        };
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    };

    return this.retryRequest(requestFn, this.config.retries || 0);
  }

  // Convenience methods
  async get<T = any>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  async post<T = any>(url: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'POST', body: JSON.stringify(body) });
  }

  async put<T = any>(url: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'PUT', body: JSON.stringify(body) });
  }

  async delete<T = any>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }

  async patch<T = any>(url: string, body?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...options, method: 'PATCH', body: JSON.stringify(body) });
  }
}

// Create default API client instance
export const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  timeout: 10000,
  retries: 2,
  retryDelay: 1000,
});

// Add default interceptors for logging
if (process.env.NODE_ENV === 'development') {
  apiClient.addRequestInterceptor((config) => {
    console.log('🚀 API Request:', config);
    return config;
  });

  apiClient.addResponseInterceptor((response) => {
    console.log('📥 API Response:', response.status, response.statusText);
    return response;
  });
}
