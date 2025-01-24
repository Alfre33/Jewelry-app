import { getJawelBySlug } from "@/actions/jawels/get-jawel-by-slug";
import { CreateProductForm, Tittle } from "@/components";
// import {CreateProductForm, Tittle } from "@/components";


interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function NewProductPage({ params }: Props) {
  const { slug } = await params;
  const { jawel } = await getJawelBySlug(slug);
  const title =slug === "new" ? "Agregar un nuevo producto " : "Editar Producto";



  return (
    <div className="w-full md:w-10/12 h-auto bg-white md:mx-auto px-10 py-5">
      <Tittle title={title} size="3xl" color="bronce"/>
      <CreateProductForm initialData={jawel ?? {}} />
    </div>
  );
}
