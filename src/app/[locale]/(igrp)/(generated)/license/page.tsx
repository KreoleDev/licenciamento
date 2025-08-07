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
import {useLicense} from '@/app/[locale]/(myapp)/hooks/license'


export default function PageLicenseComponent() {


  
  type Table1 = {
    alvara: string;
    nome: string;
    horario: string;
    dataInicio: string;
    dataFim: string;
    estadoDesc: string;
    idLicenca: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
function goToNewLicense (): void  | undefined {

  router.push("license/new")

}

  const router = useRouter()
 
 const { data, isLoading, error } = useLicense();
 
useEffect(() => {
   if (!data || isLoading) return;
   console.log("load data", data)
   setContentTabletable1(
     (data?.content || []).map((license: any) => ({
       alvara: license.alvara ?? '',
       nome: license.nome ?? '',
       horario: license.horario ?? '',
       dataInicio: license.dataInicio ?? '',
       dataFim: license.dataFim ?? '',
       estadoDesc: license.estadoDesc ?? '',
       idLicenca: license.idLicenca ?? '',
     }))
   );
 }, [isLoading, data]);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Gestão de Licenças` }
  description={ `Criar, editar e gerir fichas de licença` }
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
  onClick={ goToNewLicense }
  
>
  Nova Licença
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn('block',' px-3 pt-3 w',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }


placeholder={ `Pesquisar licenças...` }
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
          header: 'Alvará'
,accessorKey: 'alvara',
          cell: ({ row }) => {
          return row.getValue("alvara")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Nome'
,accessorKey: 'nome',
          cell: ({ row }) => {
          return row.getValue("nome")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Horário Funcionamento'
,accessorKey: 'horario',
          cell: ({ row }) => {
          return row.getValue("horario")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Data Início'
,accessorKey: 'dataInicio',
          cell: ({ row }) => {
          return row.getValue("dataInicio")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Data Fim'
,accessorKey: 'dataFim',
          cell: ({ row }) => {
          return row.getValue("dataFim")
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
  variant={ `outline` }
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
