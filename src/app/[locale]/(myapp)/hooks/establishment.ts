import { useQuery } from "@tanstack/react-query";
import { Establishment, PaginatedResponse } from "../types/commons";
import { getEstablishment, getEstablishments } from "../functions/establishment";


export const useEstablishment = () => {
  return useQuery<PaginatedResponse<Establishment>>({
    queryKey: ['establishment'],
    queryFn: () => getEstablishments()
  });
};

export function useDetailEstablishment(uuid: string) {
  console.log("useDetailEstablishment this uuid", uuid);
  return useQuery({
    queryKey: ['establishment', uuid],
    queryFn: () => getEstablishment(uuid),
  });
}