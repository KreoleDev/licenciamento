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
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPInputText,
	IGRPCombobox,
	IGRPDataTable,
	IGRPDataTableCellBadge,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuAlert,
	IGRPDataTableDropdownMenuCustom 
} from "@igrp/igrp-framework-react-design-system";
import { useRouter } from "next/navigation"
import {useEstablishment} from '@/app/[locale]/(myapp)/hooks/establishment'


export default function PageStablishmentComponent() {


  
  type Table1 = {
    codigo: string;
    descricao: string;
    taxaFixa: string;
    taxaQuarto: string;
    categoria: string;
    vistoria: string;
    horario: string;
    uuid: string;
}

  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
 const router = useRouter()
 
 const { data, isLoading, error } = useEstablishment();
 
 useEffect(() => {
   if (!data || isLoading) return;
   console.log("load data", data)
   setContentTabletable1(data?.content || []);
 }, [isLoading, data]);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Tipos de Estabelecimento` }
  description={ `Configure os tipos de estabelecimentos e suas taxas` }
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
  onClick={ () => {} }
  
>
  Novo Tipo
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn('flex flex-row flex-nowrap items-stretch justify-between gap-2',' px-3 pt-3',)}    >
	<div className={ cn(' w-full',)}    >
	<IGRPInputText
  name={ `inputText1` }
  label={ undefined }
showIcon={ false }
required={ false }


placeholder={ `busca por...` }
  className={ cn() }
  onChange={ () => {} }
  
>
</IGRPInputText></div>
<div className={ cn()}    >
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
          header: 'Taxa Fixa'
,accessorKey: 'taxaFixa',
          cell: ({ row }) => {
          return row.getValue("taxaFixa")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Taxa/Quarto'
,accessorKey: 'taxaQuarto',
          cell: ({ row }) => {
          return row.getValue("taxaQuarto")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Categoria'
,accessorKey: 'categoria',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.categoria }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Vistoria'
,accessorKey: 'vistoria',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.vistoria }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Horário'
,accessorKey: 'horario',
          cell: ({ row }) => {
          return row.getValue("horario")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Actions Column'
,accessorKey: 'tableActionListCell1',
          enableHiding: false,cell: ({ row }) => {
          const rowData = row.original;

return (
<IGRPDataTableRowAction>
  <IGRPDataTableDropdownMenu
  items={
    [
      {
        component: IGRPDataTableDropdownMenuAlert,
        props: {
          modalTitle: `Eliminar Estabelecimento`,labelTrigger: `Eliminar`,icon: `Trash2`,          showIcon: true,showCancel: true,labelCancel: `Cancel`,variantCancel: `secondary`,showConfirm: true,labelConfirm: `Confirm`,variantConfirm: `destructive`,          onClickConfirm: (e) => {},
          children: <>Deseja Eliminar Estabelecimento?</>
}
      },
      {
        component: IGRPDataTableDropdownMenuCustom,
        props: {
          labelTrigger: `Editar`,icon: `SquarePen`,          showIcon: true,          action: (e) => {},
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
/></div></div></div>
  );
}
