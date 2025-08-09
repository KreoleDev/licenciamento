import { useQuery } from "@tanstack/react-query";
import { License, PaginatedResponse } from "../types/commons";
import { getLicense, getLicenses } from "../functions/license";
import { convertToNameValue } from "../functions/utils";
import { useEstablishment } from "./establishment";
import { getLicenseStatus, getOpeningHours } from "../functions/configurations";


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

export function useLicenseConfiguration() {
  const establishmentTypes = useEstablishment();
  const shiftHoursOptions = getOpeningHours();
  const licenseStatusOptions = getLicenseStatus();

  let establishmentTypesOptions: Array<{ name: string; value: string }> = [];

  const isLoading = establishmentTypes.isLoading;
  let isError = establishmentTypes.isError;

  try {
    establishmentTypesOptions = convertToNameValue(
      establishmentTypes.data?.content ?? [],
      'nome',
      'estabelecimentoId'
    ).map(({ label, value }) => ({ name: label, value }));
  } catch (error) {
    console.error('Failed to convert establishment types:', error);
    isError = true;
  }

  return {
    isLoading,
    isError,
    shiftHoursOptions,
    licenseStatusOptions,
    establishmentTypesOptions,
  };
}
