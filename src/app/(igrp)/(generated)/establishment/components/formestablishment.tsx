'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "zod"
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPForm,
	IGRPCard,
	IGRPCardHeader,
	IGRPCardContent,
	IGRPInputText,
	IGRPCombobox,
	IGRPSwitch,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateEstablishment} from '@/app/(myapp)/functions/establishment'
import { useRouter } from "next/navigation"
import {useEstablishmentConfiguration} from '@/app/(myapp)/hooks/establishment'

export default function Formestablishment({ isSubmitting, initialData, onAfterSubmit } : { isSubmitting: boolean, initialData?: any, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    codigo: z.string().optional(),
    nome: z.string().optional(),
    tipoAtividadeId: z.string().optional(),
    classeId: z.string().optional(),
    endereco: z.string().optional(),
    telefone: z.string().optional(),
    email: z.string().optional(),
    nif: z.string().optional(),
    gerente: z.string().optional(),
    estadoDesc: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    codigo: ``,
    nome: ``,
    tipoAtividadeId: ``,
    classeId: ``,
    endereco: ``,
    telefone: ``,
    email: ``,
    nif: ``,
    gerente: ``,
    estadoDesc: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selecttipoAtividadeIdOptions, setSelecttipoAtividadeIdOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectclasseIdOptions, setSelectclasseIdOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectgerenteOptions, setSelectgerenteOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectestadoDescOptions, setSelectestadoDescOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

async function handleCreateOrUpdateEstablishment (values: z.infer<any>): Promise<void  | undefined> {

  try{
  await createOrUpdateEstablishment({...initialData, ...values});
  igrpToast({
  type: "success",
  title: "Sucsess",
  description: "Establishment created successfully",
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
const {isLoading, isError, establishmentStatusOptions, activityTypesOptions, classesTypesOptions} = useEstablishmentConfiguration();

useEffect(() => {
  if(isLoading)return
  setSelectestadoDescOptions(
    (establishmentStatusOptions || []).map(opt => ({
      ...opt,
      label: opt.label ?? opt.value // fallback if label is missing
    }))
  )
  setSelecttipoAtividadeIdOptions(
    (activityTypesOptions || []).map(opt => ({
      ...opt,
      label: opt.name ?? opt.value // fallback if label is missing
    }))
  )
  setSelectclasseIdOptions(
    (classesTypesOptions || []).map(opt => ({
      ...opt,
      label: opt.name ?? opt.value // fallback if label is missing
    }))
  )

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
  onSubmit={ handleCreateOrUpdateEstablishment }
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
  name={ `codigo` }
  label={ `Código` }
showIcon={ false }
required={ false }


placeholder={ `EST001` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `nome` }
  label={ `Nome` }
showIcon={ false }
required={ false }


placeholder={ `Nome do estabelecimento` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPCombobox
  name={ `tipoAtividadeId` }
  label={ `Atividade` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selecttipoAtividadeIdOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `classeId` }
  label={ `Classes` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectclasseIdOptions }
>
</IGRPCombobox>
<IGRPInputText
  name={ `endereco` }
  label={ `Endereço` }
showIcon={ false }
required={ false }


placeholder={ `rua, cidade, numero` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `telefone` }
  label={ `Telefone` }
showIcon={ false }
required={ false }


placeholder={ undefined }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `email` }
  label={ `Email` }
showIcon={ false }
required={ false }


placeholder={ `exemplo@gmail.com` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputText
  name={ `nif` }
  label={ `NIF` }
showIcon={ false }
required={ false }


placeholder={ undefined }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPCombobox
  name={ `gerente` }
  label={ `Gerente` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectgerenteOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `estadoDesc` }
  label={ `Estado` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectestadoDescOptions }
>
</IGRPCombobox>
<IGRPSwitch
  name={ `switch2` }
  label={ `Vistoria Obrigatória` }
gridSize={ `full` }

helperText={ `Requer vistoria técnoca` }
  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch>
<IGRPSwitch
  name={ `switch1` }
  label={ `Licença de Retalho` }
gridSize={ `full` }

helperText={ `Venda de bebidas alcoólicas` }
  className={ cn('col-span-1',) }
  

  
>
</IGRPSwitch></div>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>
</IGRPForm></div>
  );
}