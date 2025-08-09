'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPInputSearch,
	IGRPDataTable,
	IGRPDataTableCellBadge,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu 
} from "@igrp/igrp-framework-react-design-system";
import { useRouter } from "next/navigation"
import {useEstablishment} from '@/app/(myapp)/hooks/establishment'


export default function PageEstablishmentComponent() {


  
  type Table1 = {
    nome: string;
    atividade: string;
    classe: string;
    endereco: string;
    estadoDesc: string;
    flagVistoria: string;
    licRetalho: string;
    estabelecimentoId: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
function goToNewEstablishment (): void  | undefined {

  router.push("establishment/new")

}

 const router = useRouter()
 
 const { data, isLoading, error } = useEstablishment();
 
 useEffect(() => {
   if (!data || isLoading) return;
   console.log("load data", data)
   setContentTabletable1(
     (data?.content || []).map((item: any) => ({
       nome: item.nome ?? '',
       atividade: "tipoAtividaA",
       classe: "A, B",
       endereco: item.endereco ?? '',
       estadoDesc: item.estadoDesc ?? '',
       flagVistoria: 'Nao',
       licRetalho: 'Sim',
       estabelecimentoId: item.estabelecimentoId ?? '',
     }))
   );
 }, [isLoading, data]);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Tipos de Estabelecimento` }
  description={ ` Gerir tipos de estabelecimentos e suas configurações` }
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
  onClick={ goToNewEstablishment }
  
>
  Novo Tipo
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn('block',' px-3 pt-3',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }



placeholder={ `Pesquisar tipos...` }
  className={ cn() }
  setValueChange={ (value) => '' }
  
>
</IGRPInputSearch></div>
<IGRPDataTable<Table1, Table1>
  showFilter={ true }
  showPagination={ true }
  tableClassName={ `rounded-none` }
  paginationClassName={ `px-3 pb-3` }
  className={ cn() }
  columns={
    [
        {
          header: 'Nome'
,accessorKey: 'nome',
          cell: ({ row }) => {
          return row.getValue("nome")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Atividade'
,accessorKey: 'atividade',
          cell: ({ row }) => {
          return row.getValue("atividade")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Classe'
,accessorKey: 'classe',
          cell: ({ row }) => {
          return row.getValue("classe")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Endereço'
,accessorKey: 'endereco',
          cell: ({ row }) => {
          return row.getValue("endereco")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Estado'
,accessorKey: 'estadoDesc',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.estadoDesc }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Vistoria'
,accessorKey: 'flagVistoria',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.flagVistoria }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Retalho'
,accessorKey: 'licRetalho',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.licRetalho }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
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
