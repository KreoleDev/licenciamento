import { callGateway } from "@/app/(myapp)/lib/use-server";
import { License } from "@/app/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/licencas`;

export async function GET(request: NextRequest) {
    try {

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


    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch licenses: ${error}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to create license: ${error}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to update license: ${error}` }, { status: 500 });
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
        return NextResponse.json({ error: `Failed to delete license: ${error}` }, { status: 500 });
    }
}


