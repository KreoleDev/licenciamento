import { apiClient } from "../lib/api-client";
import { License, PaginatedResponse } from "../types/commons";


export async function getLicenses(): Promise<PaginatedResponse<License>> {
    const response = await apiClient.get<PaginatedResponse<License>>('/api/license');

    if (!response.data) {
        throw new Error(response.error ?? 'Unknown error fetching licenses');
    }

    return response.data;
}

export async function createOrUpdateLicense(license: Partial<License>): Promise<License> {
    if (license.uuid) {
        const response = await apiClient.put<License>(`/api/license?uuid=${license.uuid}`, license);
        if (!response.data) throw new Error('Failed to update license');
        return response.data;
    } else {
        const response = await apiClient.post<License>('/api/license', license);
        if (!response.data) throw new Error('Failed to create license');
        return response.data;
    }
}

export async function getLicense(uuid: string): Promise<License> {
    console.log("getLicense this uuid", uuid);
    const response = await apiClient.get<License>(`/api/license?uuid=${uuid}`);
    if (!response.data) throw new Error('License not found');
    return response.data;
}

export async function deleteLicense(uuid: string): Promise<void> {
    console.log("deleteLicense this uuid", uuid);
    const response = await apiClient.delete(`/api/license?uuid=${uuid}`);
    if (response.error) {
        throw new Error(response.error);
    }
}
