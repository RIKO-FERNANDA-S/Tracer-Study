export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex">
        <div className="w-full">
        {children}
        </div>
      </main>
    )
  }