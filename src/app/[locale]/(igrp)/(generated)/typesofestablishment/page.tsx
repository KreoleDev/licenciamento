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


export default function PageTypesofestablishmentComponent() {


  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [contentTabletable1, setContentTabletable1] = useState<any[]>([]);
  
  

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
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }



  className={ cn() }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox></div></div>
<IGRPDataTable<any, any>
  showFilter={ true }
  showPagination={ true }
  tableClassName={ `rounded-none` }
  paginationClassName={ `px-3 pb-3` }
  className={ cn() }
  columns={
    [
        {
          header: 'Código'
,accessorKey: 'tableTextCell1',
          cell: ({ row }) => {
          return row.getValue("tableTextCell1")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Descrição'
,accessorKey: 'tableTextCell2',
          cell: ({ row }) => {
          return row.getValue("tableTextCell2")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Taxa Fixa'
,accessorKey: 'tableTextCell3',
          cell: ({ row }) => {
          return row.getValue("tableTextCell3")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Taxa/Quarto'
,accessorKey: 'tableTextCell4',
          cell: ({ row }) => {
          return row.getValue("tableTextCell4")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Categoria'
,accessorKey: 'tableBadgeCell1',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.tableBadgeCell1 }
  variant={ `outline` }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Vistoria'
,accessorKey: 'tableBadgeCell2',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.tableBadgeCell2 }
  variant={ `outline` }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Horário'
,accessorKey: 'tableTextCell5',
          cell: ({ row }) => {
          return row.getValue("tableTextCell5")
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
