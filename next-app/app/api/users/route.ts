// Файл: app/api/hello/route.ts
import { UserSchema } from '@/app/types/zodShemas';
import { NextResponse } from 'next/server';

const users = [
    { id: 1, name: 'Alice' },
];

// Обработчик для GET-запросов
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const user = users.find(item => item.id === Number(id))
    // NextResponse.json() автоматически устанавливает Content-Type: application/json
    return NextResponse.json({ 
        message: 'Hello, from users api!', 
        user: user ? user : 'User not found'
    });
}


export async function POST(request: Request) {
    try {
        // Получаем тело запроса как JSON
        const body = await request.json();

       const validation = UserSchema.safeParse(body);

       if (!validation.success) {
          // Если валидация не прошла, возвращаем ошибки
          return NextResponse.json({message: validation.error.message}, { status: 400 });
       }

        // // Простая валидация
        // if (!body.name) {
        //     return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        // }

        const newUser = { id: users.length + 1, name: body.name };
        users.push(newUser);

        return NextResponse.json(newUser, { status: 201 }); // 201 Created
    } catch (err) {
        return NextResponse.json({ error: 'err' , message:'Invalid JSON'  }, { status: 400 });
    }
}