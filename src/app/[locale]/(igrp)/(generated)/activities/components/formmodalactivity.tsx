'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "@igrp/igrp-framework-react-design-system"
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPForm,
	IGRPInputText,
	IGRPTextarea,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {createOrUpdateActivity} from '@/app/[locale]/(myapp)/functions/activity'

export default function Formmodalactivity({ openModal, setOpen, initialData } : { openModal: boolean, setOpen: () => void, initialData?: any }) {

  
  const form1 = z.object({
    nome: z.string().optional(),
    codigo: z.string().optional(),
    descricao: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    nome: ``,
    codigo: ``,
    descricao: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  
const { igrpToast } = useIGRPToast()

async function handleCreateUpdateClass (values: z.infer<any>): Promise<void  | undefined> {

  

}

async function handleCreateOrUpdateActivity (values: z.infer<any>): Promise<void  | undefined> {

  try {
  await createOrUpdateActivity({ ...initialData, ...values });
  igrpToast({
    type: "success",
    title: "Sucsess",
    description: "Activity created successfully",
  })
setOpen(!openModal)
} catch (error: any) {
  igrpToast({
    type: "error",
    title: "",
    description: `An error occurred while processing the form. [${error.message}]`,
  });
}

}

useEffect(() => {
  setForm1Data(initialData)

}, [initialData])


  return (
<div className={ cn('component',)}    >
	<IGRPModalDialog
  onOpenChange={ setOpen }
  open={ openModal }
>
  <IGRPModalDialogContent
  size={ `md` }
  className={ cn() }
  
  
>
  <IGRPModalDialogHeader
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle2` }
  

  className={ cn() }
  
  
>
  Nova Atividade
</IGRPModalDialogTitle>   v
  <IGRPModalDialogDescription
  name={ `modalDialogDescription2` }
  

  className={ cn() }
  
  
>
  Configure as informações da atividade
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  onSubmit={ handleCreateOrUpdateActivity }
  defaultValues={ form1Data }
>
  <>
  <IGRPInputText
  name={ `nome` }
  label={ `Nome` }
showIcon={ false }
required={ true }


  className={ cn() }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `codigo` }
  label={ `Código` }
showIcon={ false }
required={ true }


  className={ cn() }
  
  
>
</IGRPInputText>
  <IGRPTextarea
  name={ `descricao` }
  
label={ `Descrição` }
rows={ 3 }
required={ true }


  className={ cn() }
  
  
>
</IGRPTextarea>
</>
</IGRPForm>
  <IGRPModalDialogFooter
  className={ cn('','block',) }
  
  
>
  <div className={ cn('flex flex-row flex-nowrap items-stretch justify-end gap-2',)}    >
	<IGRPButton
  name={ `button2` }
  
variant={ `secondary` }
size={ `default` }
showIcon={ false }

  className={ cn() }
  onClick={ () => {} }
  
>
  Cancelar
</IGRPButton>
<IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ false }

  className={ cn() }
  onClick={ () => formform1Ref.current?.submit() }
  
>
  Gravar
</IGRPButton></div>
</IGRPModalDialogFooter>
</IGRPModalDialogContent>
</IGRPModalDialog></div>
  );
}