import { useQuery } from "@tanstack/react-query";
import { License, PaginatedResponse } from "../types/commons";
import { getLicense, getLicenses } from "../functions/license";


export const useLicense = () => {
  return useQuery<PaginatedResponse<License>>({
    queryKey: ['license'],
    queryFn: () => getLicenses()
  });
};

export function useDetailLicense(uuid: string) {
  console.log("useDetailLicense this uuid", uuid);
  return useQuery({
    queryKey: ['license', uuid],
    queryFn: () => getLicense(uuid),
  });
}