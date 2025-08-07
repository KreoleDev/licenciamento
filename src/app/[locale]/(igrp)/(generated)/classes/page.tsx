'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import FormModalClass from '@/app/[locale]/(igrp)/(generated)/classes/components/formmodalclass'
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPInputSearch,
	IGRPDataTable,
	IGRPDataTableRowAction,
	IGRPDataTableDropdownMenu,
	IGRPDataTableDropdownMenuAlert,
	IGRPDataTableDropdownMenuCustom 
} from "@igrp/igrp-framework-react-design-system";
import {useClass} from '@/app/[locale]/(myapp)/hooks/classes'


export default function PageClassesComponent() {


  
  type Table1 = {
    codigo: string;
    descricao: string;
    classeId: string;
}

  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
const [openClassModal, setOpenClassModal] = useState<boolean>(false);

const [currentClass, setCurrentClass] = useState<any>(undefined);


 const { data, isLoading, error } = useClass();
 
 useEffect(() => {
   if (!data || isLoading) return;
    setContentTabletable1(data?.content || []);
 }, [isLoading, data]);


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-x-6 space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Classes de Estabelecimento` }
  description={ `Gerir as classes de classificação dos estabelecimentos` }
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
  onClick={ () => {setOpenClassModal(!openClassModal); setCurrentClass(undefined)
} }
  
>
  Nova Classe
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn(' px-3 pt-3',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }


placeholder={ `Pesquisar classes...` }
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
          header: 'Classe'
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
,accessorKey: 'tableActionListCell2',
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
          modalTitle: `Eliminar Classe`,labelTrigger: `Eliminar`,icon: `Trash2`,          showIcon: true,showCancel: true,labelCancel: `Cancel`,variantCancel: `secondary`,showConfirm: true,labelConfirm: `Confirm`,variantConfirm: `destructive`,          onClickConfirm: (e) => {},
          children: <>Deseja eliminar classe</>
}
      },
      {
        component: IGRPDataTableDropdownMenuCustom,
        props: {
          labelTrigger: `Editar`,icon: `SquarePen`,          showIcon: true,          action: () => {setOpenClassModal(!openClassModal);setCurrentClass(rowData)
},
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
<FormModalClass  openModal={ openClassModal } initialData={ currentClass }  setOpen={ setOpenClassModal
 } ></FormModalClass></div></div>
  );
}
