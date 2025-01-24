import { auth } from "@/auth.config";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth();
  if(session){
    redirect('/')
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        {/* <div>
          <img
            src="https://drive.google.com/uc?export=view&id=1MFiKAExRFF0-2YNpAZzIu1Sh52J8r16v"
            className="w-mx-auto"
          />
        </div> */}
        <div className="mt-12 flex flex-col items-center">
          <div className="w-full flex-1 mt-8">

           {children}
          </div>
        </div>
      </div>
      <div className="flex-1 justify-center hidden lg:flex">
        <Image
          src='https://res.cloudinary.com/dj9huldbs/image/upload/v1737231285/journal/jawelrly/loginImage_k4dpxr.jpg'
          alt='Jawelrly login'
          width={500}
          height={300}
          className="w-full h-auto "
        />
      </div>
    </div>
  </div>
  );
}