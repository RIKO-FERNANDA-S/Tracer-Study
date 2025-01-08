import NavSide from "@/components/layouts/navSide"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex">
        <NavSide/>
        <div className="w-full">
        {children}
        </div>
      </main>
    )
  }