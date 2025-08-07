'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "@igrp/igrp-framework-react-design-system"
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPForm,
	IGRPCard,
	IGRPCardHeader,
	IGRPCardContent,
	IGRPInputText,
	IGRPCombobox,
	IGRPDatePicker,
	IGRPInputNumber,
	IGRPTextarea,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateLicense} from '@/app/[locale]/(myapp)/functions/license'
import { useRouter } from "next/navigation"
import {useLicenseConfiguration} from '@/app/[locale]/(myapp)/hooks/license'

export default function Formlicense({ isSubmitting, initialData, onAfterSubmit } : { isSubmitting: boolean, initialData?: any, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    alvara: z.string().optional(),
    nome: z.string().optional(),
    horario: z.string().optional(),
    estadoLicenca: z.string().optional(),
    dataInicioLicenca: z.date().optional(),
    dataFimLicenca: z.date().optional(),
    dataRenovacaoLicenca: z.date().optional(),
    idEstabelecimento: z.string().optional(),
    idUtente: z.number().optional(),
    descricao: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    alvara: ``,
    nome: ``,
    horario: ``,
    estadoLicenca: ``,
    dataInicioLicenca: undefined,
    dataFimLicenca: undefined,
    dataRenovacaoLicenca: undefined,
    idEstabelecimento: ``,
    idUtente: undefined,
    descricao: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selecthorarioOptions, setSelecthorarioOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectestadoLicencaOptions, setSelectestadoLicencaOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectidEstabelecimentoOptions, setSelectidEstabelecimentoOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

async function handleCreateorUpdateLicense (values: z.infer<any>): Promise<void  | undefined> {

  try{
  await createOrUpdateLicense({...initialData, ...values});
  igrpToast({
  type: "success",
  title: "Sucsess",
  description: "License created successfully",
})
}catch(error: any) {
  igrpToast({
  type: "error",
  title: "",
  description: `An error occurred while processing the form. [${error.message}]`,
});
console.error(error)
}

}

const router = useRouter()
const {isLoading, isError, shiftHoursOptions, licenseStatusOptions, establishmentTypesOptions} = useLicenseConfiguration();

useEffect(() => {
  if(isLoading)return
  setSelecthorarioOptions(shiftHoursOptions || [])
  setSelectestadoLicencaOptions(licenseStatusOptions|| [])
  setSelectidEstabelecimentoOptions(
    (establishmentTypesOptions || []).map(opt => ({
      label: opt.name,
      value: opt.value
    }))
  );

},[isLoading])

useEffect(() => {
  if (initialData)
    setForm1Data(initialData)
}, [initialData])

useEffect(() => {
  if (isSubmitting) {
    formform1Ref.current?.submit();
    onAfterSubmit?.();
  }
}, [isSubmitting, onAfterSubmit]);




  return (
<div className={ cn('component',)}    >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  className={ cn() }
  onSubmit={ handleCreateorUpdateLicense }
  defaultValues={ form1Data }
>
  <>
  <IGRPCard
  name={ `card1` }
  
  className={ cn() }
  
  
>
  <IGRPCardHeader
  
>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-3 ',' gap-4',)}    >
	<IGRPInputText
  name={ `alvara` }
  label={ `Alvará` }
showIcon={ false }
required={ false }


placeholder={ `ALV001/2024` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `nome` }
  label={ `Nome da Licença` }
showIcon={ false }
required={ false }


placeholder={ `Nome da Licença` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPCombobox
  name={ `horario` }
  label={ `Horário de Funcionamento` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selecthorarioOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `estadoLicenca` }
  label={ `Estado` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectestadoLicencaOptions }
>
</IGRPCombobox>
<IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `dataInicioLicenca` }
  id={ `dataInicioLicenca` }
  label={ `Data Início` }
  startDate={ new Date(`1900-01-01`) }
  endDate={ new Date(`2099-12-31`) }
  gridSize={ `full` }
  dateFormat={ `dd/MM/yyyy` }
  today={ new Date(`2025-01-01`) }
  defaultMonth={ new Date(`2025-01-01`) }
  startMonth={ new Date(`2025-01-01`) }
  month={ new Date(`2025-01-01`) }
  endMonth={ new Date(`2025-12-31`) }
  numberOfMonths={ 1 }
  captionLayout={ `label` }
  className={ cn('col-span-1',) }
  
/>
<IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `dataFimLicenca` }
  id={ `dataFimLicenca` }
  label={ `Data Fim` }
  startDate={ new Date(`1900-01-01`) }
  endDate={ new Date(`2099-12-31`) }
  gridSize={ `full` }
  dateFormat={ `dd/MM/yyyy` }
  today={ new Date(`2025-01-01`) }
  defaultMonth={ new Date(`2025-01-01`) }
  startMonth={ new Date(`2025-01-01`) }
  month={ new Date(`2025-01-01`) }
  endMonth={ new Date(`2025-12-31`) }
  numberOfMonths={ 1 }
  captionLayout={ `label` }
  className={ cn('col-span-1',) }
  
/>
<IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `dataRenovacaoLicenca` }
  id={ `dataRenovacaoLicenca` }
  label={ `Data de Renovação` }
  startDate={ new Date(`1900-01-01`) }
  endDate={ new Date(`2099-12-31`) }
  gridSize={ `full` }
  dateFormat={ `dd/MM/yyyy` }
  today={ new Date(`2025-01-01`) }
  defaultMonth={ new Date(`2025-01-01`) }
  startMonth={ new Date(`2025-01-01`) }
  month={ new Date(`2025-01-01`) }
  endMonth={ new Date(`2025-12-31`) }
  numberOfMonths={ 1 }
  captionLayout={ `label` }
  className={ cn('col-span-1',) }
  
/>
<IGRPCombobox
  name={ `idEstabelecimento` }
  label={ `Tipo de Estabelecimento` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectidEstabelecimentoOptions }
>
</IGRPCombobox>
<IGRPInputNumber
  name={ `idUtente` }
  label={ `ID Utente` }

max={ 9999999 }
step={ 1 }
required={ false }


  className={ cn('col-span-1',) }
  onChange={ () => {} }
  
>
</IGRPInputNumber>
<IGRPTextarea
  name={ `descricao` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


placeholder={ `Descrição detalhada da licença` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  
>
</IGRPTextarea></div>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>
</IGRPForm></div>
  );
}