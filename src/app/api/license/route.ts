import { callGateway } from "@/app/[locale]/(myapp)/lib/use-server";
import { License } from "@/app/[locale]/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const USE_MOCK_DATA = true;

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/licenca`;

export async function GET(request: NextRequest) {
    try {

        if (USE_MOCK_DATA) {
            const licenseId = request.nextUrl.searchParams.get('uuid');
            if (licenseId) {
                const found = dummyLicenses.find(l => l.uuid === licenseId);
                if (found) return NextResponse.json(found);
                return NextResponse.json({ error: 'License not found' }, { status: 404 });
            }
            return NextResponse.json({
                pageNumber: 0,
                pageSize: dummyLicenses.length,
                totalElements: dummyLicenses.length,
                totalPages: 1,
                first: true,
                last: true,
                content: dummyLicenses,
            });
        } else {
            const licenseId = request.nextUrl.searchParams.get('uuid');

            if (licenseId) {
                // Get specific license details by ID
                const licenseDetails = await callGateway<License>(`${ROUTE_BASE_URL}/${licenseId}`, {
                    method: 'GET',
                });
                return NextResponse.json(licenseDetails);
            }
            const licenses = await callGateway<License[]>(`${ROUTE_BASE_URL}`, {
                method: 'GET',
            });
            return NextResponse.json(licenses);
        }

    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch licenses' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const license = await callGateway<License>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(license);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create license' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const license = await callGateway<License>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(license);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update license' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');

        if (!uuid) {
            return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
        }
        await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
        return NextResponse.json({ message: 'License deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete license' }, { status: 500 });
    }
}


const dummyLicenses: License[] = [
    {
        uuid: '1',
        alvara: 'ALV-2025-001',
        nome: 'Empresa Alpha',
        tipo: 'Tipo A',
        localidade: 'Praia Grande',
        gerente: 'João Silva',
        validade: '2026-01-01',
        estadoDesc: 'Ativa',
    },
    {
        uuid: '2',
        alvara: 'ALV-2025-002',
        nome: 'Empresa Beta',
        tipo: 'Tipo B',
        localidade: 'Fazenda Nova',
        gerente: 'Maria Costa',
        validade: '2025-12-31',
        estadoDesc: 'Inativa',
    },
    {
        uuid: '3',
        alvara: 'ALV-2025-003',
        nome: 'Empresa Gamma',
        tipo: 'Tipo C',
        localidade: 'Palmarejo Grande',
        gerente: 'Carlos Pereira',
        validade: '2025-12-31',
        estadoDesc: 'Inativa',
    }
];
