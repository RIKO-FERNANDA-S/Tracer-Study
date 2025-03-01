export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="p-7 h-max">
          <nav className="w-full h-max mb-10">
      <header className='w-full'>
        <div className='mb-8'>
        <h1 className="text-2xl font-semibold">Rekap Data Alumni</h1>
        </div>
 
      </header>
      </nav>
        <div className="w-full">
        {children}
        </div>
      </main>
    )
  }