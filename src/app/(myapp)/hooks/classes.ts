import { useQuery } from "@tanstack/react-query";
import { Classe, PaginatedResponse } from "../types/commons";
import { getClass, getClasses } from "../functions/classes";


export const useClass = () => {
    return useQuery<PaginatedResponse<Classe>>({
        queryKey: ['class'],
        queryFn: () => getClasses()
    });
};

export function useDetailClass(uuid: string) {
    console.log("useDetailClass this uuid", uuid);
    return useQuery({
        queryKey: ['class', uuid],
        queryFn: () => getClass(uuid),
    });
}