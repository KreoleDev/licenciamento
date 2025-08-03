import { useQuery } from "@tanstack/react-query";
import { Activity, PaginatedResponse } from "../types/commons";
import { getActivities, getActivity } from "../functions/activity";


export const useActivity = () => {
  return useQuery<PaginatedResponse<Activity>>({
    queryKey: ['activity'],
    queryFn: () => getActivities()
  });
};

export function useDetailActivity(uuid: string) {
  console.log("useDetailActivity this uuid", uuid);
  return useQuery({
    queryKey: ['activity', uuid],
    queryFn: () => getActivity(uuid),
  });
}