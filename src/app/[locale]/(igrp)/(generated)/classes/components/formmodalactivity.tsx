'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPInputText,
	IGRPTextarea,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";

export default function Formmodalactivity({ openModal, setOpen } : { openModal: boolean, setOpen: () => void }) {

  
  
  
  
const { igrpToast } = useIGRPToast()

async function handleCreateUpdateClass (values: z.infer<any>): Promise<void  | undefined> {

  

}


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
  Nova Classe
</IGRPModalDialogTitle>
  <IGRPModalDialogDescription
  name={ `modalDialogDescription2` }
  

  className={ cn() }
  
  
>
  Configure as informações da classe de estabelecimento
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <IGRPInputText
  name={ `inputText1` }
  label={ `Código` }
showIcon={ false }
required={ false }


  onChange={ () => {} }
  
>
</IGRPInputText>
  <IGRPTextarea
  name={ `inputTextarea1` }
  
label={ `Descrição` }
rows={ 3 }
required={ false }


  onChange={ () => {} }
  
>
</IGRPTextarea>
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
  onClick={ () => {} }
  
>
  Gravar
</IGRPButton></div>
</IGRPModalDialogFooter>
</IGRPModalDialogContent>
</IGRPModalDialog></div>
  );
}