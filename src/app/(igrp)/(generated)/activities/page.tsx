'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import FormModalActivity from '@/app/(igrp)/(generated)/activities/components/formmodalactivity'
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPInputSearch,
	IGRPCombobox,
	IGRPDataTable,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuCustom 
} from "@igrp/igrp-framework-react-design-system";
import { useRouter } from "next/navigation"
import {useActivity} from '@/app/(myapp)/hooks/activity'


export default function PageActivitiesComponent() {


  
  type Table1 = {
    codigo: string;
    descricao: string;
    tipoAtividadeId: string;
}

  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
const [openActivityModal, setOpenActivityModal] = useState<boolean>(false);

const [currentActivity, setCurrentActivity] = useState<any>(undefined);

 const router = useRouter()
 
 const { data, isLoading, error } = useActivity();
 
 useEffect(() => {
   if (!data || isLoading) return;
   setContentTabletable1(data?.content || []);
 }, [isLoading, data]);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Tipos de Atividade` }
  description={ `Gerir os tipos de atividade disponíveis no sistema` }
  iconBackButton={ `Search` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  
variant={ `secondary` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }

  className={ cn() }
  onClick={ () => {setOpenActivityModal(!openActivityModal);setCurrentActivity(undefined)} }
  
>
  Nova Atividade
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn('flex flex-row flex-nowrap items-stretch justify-between gap-2',' px-3 pt-3',)}    >
	<div className={ cn(' w-full',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }


placeholder={ `Busca por ...` }
  className={ cn() }
  setValueChange={ (value) => '' }
  
>
</IGRPInputSearch></div>
<div className={ cn('flex flex-row flex-nowrap items-stretch justify-end gap-2',' mt-2',)}    >
	<IGRPCombobox
  name={ `combobox1` }
  label={ undefined }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn() }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox></div></div>
<IGRPDataTable<Table1, Table1>
  showFilter={ true }
  showPagination={ true }
  tableClassName={ `rounded-none` }
  paginationClassName={ `px-3 pb-3` }
  className={ cn() }
  columns={
    [
        {
          header: 'Código'
,accessorKey: 'codigo',
          cell: ({ row }) => {
          return row.getValue("codigo")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Descrição'
,accessorKey: 'descricao',
          cell: ({ row }) => {
          return row.getValue("descricao")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Ações'
,accessorKey: 'tableActionListCell1',
          enableHiding: false,cell: ({ row }) => {
          const rowData = row.original;

return (
<IGRPDataTableRowAction>
  <IGRPDataTableDropdownMenu
  items={
    [
      {
        component: IGRPDataTableDropdownMenuCustom,
        props: {
          labelTrigger: `Editar`,          showIcon: true,          action: () => {setOpenActivityModal(!openActivityModal);setCurrentActivity(rowData)},
}
      },
]
  }
>
</IGRPDataTableDropdownMenu>
</IGRPDataTableRowAction>
);
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
]
  }
  clientFilters={
    [
    ]
  }
  
  data={ contentTabletable1 }
/></div>
<FormModalActivity  openModal={ openActivityModal } initialData={ currentActivity }  setOpen={ () => setOpenActivityModal(false) } ></FormModalActivity></div></div>
  );
}
