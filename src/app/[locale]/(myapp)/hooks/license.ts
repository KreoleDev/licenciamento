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
  try {
    const establishmentTypes = useEstablishment();
    const shiftHoursOptions = getOpeningHours();
    const licenseStatusOptions = getLicenseStatus();
    
    const establishmentTypesOptions = convertToNameValue(establishmentTypes.data?.content || [], 'nome', 'estabelecimentoId');

    const isLoading = establishmentTypes.isLoading;
    const isError = establishmentTypes.isError;

    return {
      isLoading,
      isError,
      shiftHoursOptions,
      licenseStatusOptions,
      establishmentTypesOptions,
    };
  } catch (error) {
    console.error(error);
    return {
      shiftHoursOptions: [],
      licenseStatusOptions: [],
      establishmentTypesOptions: [],
      isLoading: false,
      isError: true,
    };
  }
}