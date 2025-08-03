import { apiClient } from "../lib/api-client";
import {Establishment, PaginatedResponse } from "../types/commons";


export async function getEstablishments(): Promise<PaginatedResponse<Establishment>> {
    const response = await apiClient.get<PaginatedResponse<Establishment>>('/api/establishment');

    if (!response.data) {
        throw new Error(response.error ?? 'Unknown error fetching establishments');
    }

    return response.data;
}

export async function createOrUpdateStablishment(establishment: Partial<Establishment>): Promise<Establishment> {
    if (establishment.uuid) {
        const response = await apiClient.put<Establishment>(`/api/establishment?uuid=${establishment.uuid}`, establishment);
        if (!response.data) throw new Error('Failed to update establishment');
        return response.data;
    } else {
        const response = await apiClient.post<Establishment>('/api/establishment', establishment);
        if (!response.data) throw new Error('Failed to create establishment');
        return response.data;
    }
}

export async function getEstablishment(uuid: string): Promise<Establishment> {
    console.log("getEstablishment this uuid", uuid);
    const response = await apiClient.get<Establishment>(`/api/establishment?uuid=${uuid}`);
    if (!response.data) throw new Error('Establishment not found');
    return response.data;
}

export async function deleteEstablishment(uuid: string): Promise<void> {
    console.log("deleteEstablishment this uuid", uuid);
    const response = await apiClient.delete(`/api/establishment?uuid=${uuid}`);
    if (response.error) {
        throw new Error(response.error);
    }
}
