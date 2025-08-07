import { apiClient } from "../lib/api-client";
import { Classe, PaginatedResponse } from "../types/commons";


export async function getClasses(): Promise<PaginatedResponse<Classe>> {
    const response = await apiClient.get<PaginatedResponse<Classe>>('/api/classes');

    if (!response.data) {
        throw new Error(response.error ?? 'Unknown error fetching classes');
    }

    return response.data;
}

export async function createOrUpdateClass(classe: Partial<Classe>): Promise<Classe> {
    if (classe.classeId) {
        const response = await apiClient.put<Classe>(`/api/classes?uuid=${classe.classeId}`, classe);
        if (!response.data) throw new Error('Failed to update class');
        return response.data;
    } else {
        const response = await apiClient.post<Classe>('/api/classes', classe);
        if (!response.data) throw new Error('Failed to create class');
        return response.data;
    }
}

export async function getClass(uuid: string): Promise<Classe> {
    console.log("getClass this uuid", uuid);
    const response = await apiClient.get<Classe>(`/api/classes?uuid=${uuid}`);
    if (!response.data) throw new Error('Class not found');
    return response.data;
}

export async function deleteClass(uuid: string): Promise<void> {
    console.log("deleteClass this uuid", uuid);
    const response = await apiClient.delete(`/api/classes?uuid=${uuid}`);
    if (response.error) {
        throw new Error(response.error);
    }
}
