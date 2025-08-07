
export interface TimeObject {
    hour: number;
    minute: number;
    second: number;
    nano: number;
}

export interface License {
    idLicenca: string;
    alvara: string;
    dataInicioLicenca: string;
    dataFimLicenca: string;
    dataRenovacaoLicenca: string;
    designacao: string;
    horarioInicioFuncionamento: TimeObject;
    horarioFimFuncionamento: TimeObject;
    estadoLicenca: string;
    estadoLicencaDesc: string;
    estabelecimento: Establishment;
    idUtente: string;
    nomeUtente: string;
    numeroUtente: string;
}

export interface Establishment {
    estabelecimentoId: string;
    nome: string;
    gerente: string;
    descricao: string;
    endereco: string;
    telefone: string;
    email: string;
    nif: string;
    flagVistoria: boolean;
    licRetalho: boolean;
    tipoAtividade: string;
    //tipoAtividade: Activity;
    //classes: Classe[];
    classes: string;
    estado: string;
    estadoDesc: string;

    [key: string]: unknown;
}

export interface Classe {
    classeId: string;
    codigo: string;
    descricao: string;
    estado: string;
    estadoDesc: string;

    [key: string]: unknown;
}

export interface Activity {
    tipoAtividadeId: string;
    nome: string;
    codigo: string;
    descricao: string;
    estado: string;
    estadoDesc: string;

    [key: string]: unknown;
}

export interface PaginatedResponse<T> {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
    content: T[];
}