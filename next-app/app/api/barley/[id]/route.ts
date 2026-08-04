// Файл: app/api/tasks/[id]/route.ts
import { barleys } from '@/app/db/db';
import { NextResponse } from 'next/server';


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {

    const { id } = await params

    const barleyId = parseInt(id, 10);
    const barley = barleys.find(t => t.id === barleyId);

    if (!barley) {
        return NextResponse.json({ error: 'barley not found' }, { status: 404 });
    }

    return NextResponse.json(barley);
}