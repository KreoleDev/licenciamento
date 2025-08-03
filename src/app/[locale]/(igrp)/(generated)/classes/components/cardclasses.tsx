'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPCard,
	IGRPCardHeader,
	IGRPHeadline,
	IGRPButton,
	IGRPCardContent,
	IGRPText,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";

export default function Cardclasses({ title, description } : { title: string, description: string }) {

  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<     >
	<IGRPCard
  name={ `card1` }
  
  
  
>
  <IGRPCardHeader
  className={ cn('mt-6','flex flex-row flex-nowrap items-stretch justify-between gap-2',) }
  
>
  <div className={ cn()}    >
	<IGRPHeadline
  name={ `headline1` }
  title={ undefined }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Layers` }

  
  
>
</IGRPHeadline></div>
  <div className={ cn('flex flex-row flex-nowrap items-stretch justify-end gap-2',)}    >
	<IGRPButton
  name={ `button2` }
  
variant={ `secondary` }
size={ `sm` }
showIcon={ true }
iconName={ `SquarePen` }

  className={ cn() }
  onClick={ () => {} }
  
>
</IGRPButton>
<IGRPButton
  name={ `button1` }
  
variant={ `secondary` }
size={ `sm` }
showIcon={ true }
iconName={ `Trash2` }

  className={ cn() }
  onClick={ () => {} }
  
>
</IGRPButton></div>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPText
  name={ `text1` }
  
variant={ `secondary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }

  className={ cn('','block','mb--16',) }
  
  
>
</IGRPText>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard></></div>
  );
}