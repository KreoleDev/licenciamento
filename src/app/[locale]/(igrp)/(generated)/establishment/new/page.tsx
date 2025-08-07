'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import FormEstablishment from '@/app/[locale]/(igrp)/(generated)/establishment/components/formestablishment'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";


export default function PageNewestablishmentComponent() {


  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Novo Estabelecimento` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/establishment` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  
variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }

  className={ cn() }
  onClick={ () => {setIsSubmitting(!isSubmitting)} }
  
>
  Salvar
</IGRPButton>
</div>
</IGRPPageHeader>

<FormEstablishment  isSubmitting={ isSubmitting }  onAfterSubmit={ ()=>setIsSubmitting(!isSubmitting) } ></FormEstablishment></div></div>
  );
}
