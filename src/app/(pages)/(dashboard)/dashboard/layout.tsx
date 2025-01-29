import NavSide from "@/components/layouts/navbar/navSide"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex bg-gray-50">
        <NavSide/>
        <div className="w-full overflow-y-scroll h-screen">
        {children}
        </div>
      </main>
    )
  }