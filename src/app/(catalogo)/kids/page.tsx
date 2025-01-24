import { getAllJawels } from "@/actions/jawels/get-all-jawels";
import { getJawelByKids } from "@/actions/jawels/get-jawel-by-kid";
import { Pagination } from "@/components";
import { ProductCard } from "@/components/cards/ProductCard";
import { Gender } from "@prisma/client";

interface Props {
  searchParams: Promise<{ page: string }>;
}
export default async function KidsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const kid: Gender = "kid";
  const { jawel, totalPages } = await getJawelByKids({ pageNumber, kid });

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 h-auto mx-auto my-10">
        {jawel?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
      <Pagination totalPages={totalPages ?? 1} />
    </>
  );
}
