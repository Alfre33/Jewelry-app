import { auth } from "@/auth.config";
import { Sidebar } from "@/components/ui/sidebar/Sidebar";
import { TopMenu } from "@/components/ui/TopMenu";
import { redirect } from "next/navigation";

const getRoles = async () => {
  const session = await auth();
  return {
    isAdmin: session?.user.role === "ADMIN",
    isAuthenticated: Boolean(session?.user),
  };
};
export default async function CatalogoLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const sidebarProps = await getRoles();

    if (!sidebarProps.isAuthenticated) {
        redirect("/auth/login");
      }
  return (
    <>
    <TopMenu/>
    <Sidebar {...sidebarProps} />
    {/* <HeaderUser/> */}
      {children}
    </>
  );
}