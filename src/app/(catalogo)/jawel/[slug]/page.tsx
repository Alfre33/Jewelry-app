import { getJawelBySlug } from "@/actions/jawels/get-jawel-by-slug";
import { ProductDetails } from "@/components/product/ProductDetails";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function JawelPage({ params }: Props) {
  const { slug } =await params;
  const {jawel}=await getJawelBySlug(slug)
  console.log(jawel)
  return (
    <>
    {
      jawel ? (
        <ProductDetails product={jawel}/>
      ) :(
        <p>Cargando...</p>
      )
    }
    </>
  )
}
