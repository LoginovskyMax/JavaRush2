export default function RickLayout({ children, analytics }:Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode
}>) {
  return (
    <section>
      <nav>Боковая панель Rick</nav>
      {children}
      {analytics}
    </section>
  );
}