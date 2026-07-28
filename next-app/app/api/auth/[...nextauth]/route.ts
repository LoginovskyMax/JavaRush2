import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

// `handlers` экспортирует GET и POST обработчики
const handler = NextAuth({
  providers: [
    // Добавляем провайдера GitHub
    GitHub({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
});

export { handler as GET, handler as POST }