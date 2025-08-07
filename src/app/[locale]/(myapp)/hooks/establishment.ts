import { useQuery } from "@tanstack/react-query";
import { Establishment, PaginatedResponse } from "../types/commons";
import { getEstablishment, getEstablishments } from "../functions/establishment";
import { useActivity } from "./activity";
import { convertToNameValue } from "../functions/utils";
import { useClass } from "./classes";
import { getEstablishmentStatus } from "../functions/configurations";


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

export function useEstablishmentConfiguration() {
  const activityTypes = useActivity();
  const classesTypes = useClass();
  const establishmentStatusOptions = getEstablishmentStatus();

  let activityTypesOptions: Array<{ name: string; value: string }> = [];
  let classesTypesOptions: Array<{ name: string; value: string }> = [];

  const isLoading = activityTypes.isLoading || classesTypes.isLoading;
  let isError = activityTypes.isError || classesTypes.isError;

  try {
    activityTypesOptions = convertToNameValue(
      activityTypes.data?.content ?? [],
      'codigo',
      'tipoAtividadeId'
    ).map(({ label, value }) => ({ name: label, value }));

    classesTypesOptions = convertToNameValue(
      classesTypes.data?.content ?? [],
      'codigo',
      'classeId'
    ).map(({ label, value }) => ({ name: label, value }));
  } catch (error) {
    console.error('Failed to convert options:', error);
    isError = true;
  }

  return {
    isLoading,
    isError,
    establishmentStatusOptions,
    activityTypesOptions,
    classesTypesOptions,
  };
}