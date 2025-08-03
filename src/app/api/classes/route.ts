import { callGateway } from "@/app/[locale]/(myapp)/lib/use-server";
import { Classes } from "@/app/[locale]/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const USE_MOCK_DATA = true;

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/classe`;

export async function GET(request: NextRequest) {
    try {

        if (USE_MOCK_DATA) {
            const classesId = request.nextUrl.searchParams.get('uuid');
            if (classesId) {
                const found = dummyClasses.find(l => l.uuid === classesId);
                if (found) return NextResponse.json(found);
                return NextResponse.json({ error: 'Classes not found' }, { status: 404 });
            }
            return NextResponse.json({
                pageNumber: 0,
                pageSize: dummyClasses.length,
                totalElements: dummyClasses.length,
                totalPages: 1,
                first: true,
                last: true,
                content: dummyClasses,
            });
        } else {
            const classesId = request.nextUrl.searchParams.get('uuid');

            if (classesId) {
                // Get specific class details by ID
                const classDetails = await callGateway<Classes>(`${ROUTE_BASE_URL}/${classesId}`, {
                    method: 'GET',
                });
                return NextResponse.json(classDetails);
            }
            const classes = await callGateway<Classes[]>(`${ROUTE_BASE_URL}`, {
                method: 'GET',
            });
            return NextResponse.json(classes);
        }

    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const classe = await callGateway<Classes>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(classe);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create class' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const classe = await callGateway<Classes>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(classe);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update class' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');

        if (!uuid) {
            return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
        }
        await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
        return NextResponse.json({ message: 'Classes deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete classes' }, { status: 500 });
    }
}


const dummyClasses: Classes[] = [
    {
        uuid: '1',
        titulo: 'Classe A',
        descricao: 'Estabelecimentos de categoria A - Atividade de alto risco que requer vistoria obrigatória e acompanhamento rigoroso',
    },
    {
        uuid: '2',
        titulo: 'Classe B',
        descricao: 'Estabelecimentos de categoria B - Atividade de médio risco com controles regulares',
    },
    {
        uuid: '3',
        titulo: 'Classe C',
        descricao: 'Restaurante especializado em pratos de bacalhau - Atividade de baixo risco com supervisão mínima',
    },
    {
        uuid: '4',
        titulo: 'Classe D',
        descricao: 'Estabelecimentos de categoria D - Atividade sem risco específico, controles mínimos',
    }
];
