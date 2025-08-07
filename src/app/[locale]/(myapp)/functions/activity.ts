import { apiClient } from "../lib/api-client";
import { Activity, PaginatedResponse } from "../types/commons";


export async function getActivities(): Promise<PaginatedResponse<Activity>> {
    const response = await apiClient.get<PaginatedResponse<Activity>>('/api/activity');

    if (!response.data) {
        throw new Error(response.error ?? 'Unknown error fetching activities');
    }

    return response.data;
}

export async function createOrUpdateActivity(activity: Partial<Activity>): Promise<Activity> {
    if (activity.tipoAtividadeId) {
        const response = await apiClient.put<Activity>(`/api/activity?uuid=${activity.tipoAtividadeId}`, activity);
        if (!response.data) throw new Error('Failed to update activity');
        return response.data;
    } else {
        const response = await apiClient.post<Activity>('/api/activity', activity);
        if (!response.data) throw new Error('Failed to create activity');
        return response.data;
    }
}

export async function getActivity(uuid: string): Promise<Activity> {
    console.log("getActivity this uuid", uuid);
    const response = await apiClient.get<Activity>(`/api/activity?uuid=${uuid}`);
    if (!response.data) throw new Error('Activity not found');
    return response.data;
}

export async function deleteActivity(uuid: string): Promise<void> {
    console.log("deleteActivity this uuid", uuid);
    const response = await apiClient.delete(`/api/activity?uuid=${uuid}`);
    if (response.error) {
        throw new Error(response.error);
    }
}
