export default function Layout({
  children,
  kuliah,
}: {
  children: React.ReactNode;
  kuliah: React.ReactNode;
}) {
  return <main className="h-max">{children}</main>;
}
