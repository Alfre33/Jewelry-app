import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function CatalogoLayout({
 children
}: {
 children: React.ReactNode;
}) {
    const session=await auth()
    if (session?.user.role!=='ADMIN') {
        redirect("/");
      }
      console.log(session)
  return (
    <>
      {children}
    </>
  );
}