import NavSide from "@/components/layouts/navbar/navSide"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex bg-gray-50 text-black">
        <NavSide/>
        <div className="w-full h-screen">
        {children}
        </div>
      </main>
    )
  }