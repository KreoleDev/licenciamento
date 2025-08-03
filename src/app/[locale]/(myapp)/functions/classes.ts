import { apiClient } from "../lib/api-client";
import { Classes, PaginatedResponse } from "../types/commons";


export async function getClasses(): Promise<PaginatedResponse<Classes>> {
    const response = await apiClient.get<PaginatedResponse<Classes>>('/api/classes');

    if (!response.data) {
        throw new Error(response.error ?? 'Unknown error fetching classes');
    }

    return response.data;
}

export async function createOrUpdateClass(classe: Partial<Classes>): Promise<Classes> {
    if (classe.uuid) {
        const response = await apiClient.put<Classes>(`/api/classes?uuid=${classe.uuid}`, classe);
        if (!response.data) throw new Error('Failed to update class');
        return response.data;
    } else {
        const response = await apiClient.post<Classes>('/api/classes', classe);
        if (!response.data) throw new Error('Failed to create class');
        return response.data;
    }
}

export async function getClass(uuid: string): Promise<Classes> {
    console.log("getClass this uuid", uuid);
    const response = await apiClient.get<Classes>(`/api/classes?uuid=${uuid}`);
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
