

import { callGateway } from "@/app/(myapp)/lib/use-server";
import { Activity } from "@/app/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL = `${GATEWAY_BASE_URL}/tipos-atividade`;

export async function GET(request: NextRequest) {
    try {
        const activityId = request.nextUrl.searchParams.get('uuid');

        if (activityId) {
            // Get specific activity details by ID
            const activityDetails = await callGateway<Activity>(`${ROUTE_BASE_URL}/${activityId}`, {
                method: 'GET',
            });
            return NextResponse.json(activityDetails);
        }
        const activities = await callGateway<Activity[]>(`${ROUTE_BASE_URL}`, {
            method: 'GET',
        });
        return NextResponse.json(activities);


    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch activities: ${error}` }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const activity = await callGateway<Activity>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(activity);
    } catch (error) {
        return NextResponse.json({ error: `Failed to create activity: ${error}` }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const activity = await callGateway<Activity>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(activity);
    } catch (error) {
        return NextResponse.json({ error: `Failed to update activity: ${error}` }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');

        if (!uuid) {
            return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
        }
        await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
        return NextResponse.json({ message: 'Activity deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: `Failed to delete activity: ${error}` }, { status: 500 });
    }
}



