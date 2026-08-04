// Файл: app/api/tasks/[id]/route.ts
import { barleys } from '@/app/db/db';
import { NextResponse } from 'next/server';


export async function GET() {
    return NextResponse.json(barleys);
}