import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export default async function Layout({
  children,
  kuliah,
}: {
  children: React.ReactNode;
  kuliah: React.ReactNode;
}) {
     const session = await auth();
      if (!session?.user) {
        redirect("/login");
      }
      if (session?.user.role == "admin") {
        redirect("/dashboard");
      }
  return <main className="h-max">{children}</main>;
}
