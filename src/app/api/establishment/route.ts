import { callGateway } from "@/app/[locale]/(myapp)/lib/use-server";
import { Establishment } from "@/app/[locale]/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const USE_MOCK_DATA = true;

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/estabelecimento`;

export async function GET(request: NextRequest) {
    try {

        if (USE_MOCK_DATA) {
            const establishmentId = request.nextUrl.searchParams.get('uuid');
            if (establishmentId) {
                const found = dummyEstablishments.find(l => l.uuid === establishmentId);
                if (found) return NextResponse.json(found);
                return NextResponse.json({ error: 'Establishment not found' }, { status: 404 });
            }
            return NextResponse.json({
                pageNumber: 0,
                pageSize: dummyEstablishments.length,
                totalElements: dummyEstablishments.length,
                totalPages: 1,
                first: true,
                last: true,
                content: dummyEstablishments,
            });
        } else {
            const establishmentId = request.nextUrl.searchParams.get('uuid');

            if (establishmentId) {
                // Get specific establishment details by ID
                const establishmentDetails = await callGateway<Establishment>(`${ROUTE_BASE_URL}/${establishmentId}`, {
                    method: 'GET',
                });
                return NextResponse.json(establishmentDetails);
            }
            const establishments = await callGateway<Establishment[]>(`${ROUTE_BASE_URL}`, {
                method: 'GET',
            });
            return NextResponse.json(establishments);
        }

    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch establishments' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const establishment = await callGateway<Establishment>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(establishment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create establishment' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const establishment = await callGateway<Establishment>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(establishment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update establishment' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');

        if (!uuid) {
            return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
        }
        await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
        return NextResponse.json({ message: 'Establishment deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete establishment' }, { status: 500 });
    }
}


const dummyEstablishments: Establishment[] = [
    {
        uuid: '1',
        codigo: 'REST',
        descricao: 'Restauração',
        taxaFixa: '$100,00',
        taxaQuarto: '$50,00',
        categoria: 'A',
        vistoria: 'Obrigatória',
        horario: '08:00 - 22:00',
        tipoAtividade: 'Alimentação',
        retalho: 'Sim',
    },
    {
        uuid: '2',
        codigo: 'CAFE',
        descricao: 'Cafeteria',
        taxaFixa: '$200,00',
        taxaQuarto: '$100,00',
        categoria: 'B',
        vistoria: 'Opcional',
        horario: '08:00 - 22:00',
        tipoAtividade: 'Alimentação',
        retalho: 'Sim',
    },
    {
        uuid: '3',
        codigo: 'COMER',
        descricao: 'Comercio',
        taxaFixa: '$300,00',
        taxaQuarto: '$150,00',
        categoria: 'C',
        vistoria: 'Opcional',
        horario: '08:00 - 22:00',
        tipoAtividade: 'Alimentação',
        retalho: 'Sim',
    }
];
