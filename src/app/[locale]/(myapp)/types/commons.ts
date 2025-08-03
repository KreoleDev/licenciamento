
export interface License {
    uuid: string;
    alvara: string;
    nome: string;
    tipo: string;
    localidade: string;
    gerente: string;
    validade: string;
    estadoDesc: string;
}

export interface Establishment {
    uuid: string;
    codigo: string;
    descricao: string;
    taxaFixa: string;
    taxaQuarto: string;
    categoria: string;
    vistoria: string;
    horario: string;
    tipoAtividade: string;
    retalho: string;
}

export interface Classes {
    uuid: string;
    titulo: string;
    descricao: string;
}

export interface Activity {
    uuid: string;
    nome: string;
    descricao: string;
    categoria: string;
    estadoDesc: string;
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