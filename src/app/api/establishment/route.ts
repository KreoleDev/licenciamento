import { callGateway } from "@/app/[locale]/(myapp)/lib/use-server";
import { Establishment } from "@/app/[locale]/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/estabelecimentos`;

export async function GET(request: NextRequest) {
    try {
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

    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch establishments: ${error?.message}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to create establishment: ${error?.message}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to update establishment: ${error?.message}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to delete establishment: ${error?.message}` }, { status: 500 });
    }
}

