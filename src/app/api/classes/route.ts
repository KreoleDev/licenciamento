import { callGateway } from "@/app/[locale]/(myapp)/lib/use-server";
import { Classe } from "@/app/[locale]/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/classes`;

export async function GET(request: NextRequest) {
    try {
        const classesId = request.nextUrl.searchParams.get('uuid');

        if (classesId) {
            // Get specific class details by ID
            const classDetails = await callGateway<Classe>(`${ROUTE_BASE_URL}/${classesId}`, {
                method: 'GET',
            });
            return NextResponse.json(classDetails);
        }
        const classes = await callGateway<Classe[]>(`${ROUTE_BASE_URL}`, {
            method: 'GET',
        });
        return NextResponse.json(classes);

    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch classes: ${error?.message}` }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const classe = await callGateway<Classe>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(classe);
    } catch (error) {
        return NextResponse.json({ error: `Failed to create class: ${error?.message}` }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const classe = await callGateway<Classe>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(classe);
    } catch (error) {
        return NextResponse.json({ error: `Failed to update class: ${error?.message}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to delete classes: ${error?.message}` }, { status: 500 });
    }
}



