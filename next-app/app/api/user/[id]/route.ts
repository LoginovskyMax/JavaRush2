// Файл: app/api/tasks/[id]/route.ts
import { NextResponse } from 'next/server';

const users = [
    { id: 1, name: 'Alice' },
];

// GET /api/user/1
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {

    const { id } = await params

    const taskId = parseInt(id, 10);
    const user = users.find(t => t.id === taskId);

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
}