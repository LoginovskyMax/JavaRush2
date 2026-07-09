export default function AboutTemplate({ children }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>Template about</nav>
      {children}
    </section>
  );
}