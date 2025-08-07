'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import FormLicense from '@/app/[locale]/(igrp)/(generated)/license/components/formlicense'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useDetailLicense} from '@/app/[locale]/(myapp)/hooks/license'


export default function PageEditlicenseComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

const {data, isLoading} = useDetailLicense(uuid);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Editar Licença` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/license` }
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
  onClick={ ()=>setIsSubmitting(!isSubmitting) }
  
>
  Salvar
</IGRPButton>
</div>
</IGRPPageHeader>

<FormLicense  isSubmitting={ isSubmitting } intialData={ data } initialData={ data }  onAfterSubmit={ () => {setIsSubmitting(!isSubmitting)} } ></FormLicense></div></div>
  );
}
