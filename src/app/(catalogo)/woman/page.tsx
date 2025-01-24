import { getJawelByWomans } from "@/actions/jawels/get-jawel-by-woman";
import { Pagination } from "@/components";
import { ProductCard } from "@/components/cards/ProductCard";
import { Gender } from "@prisma/client";

interface Props {
  searchParams: Promise<{ page: string }>;
}
export default async function WomanPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
   const women: Gender = "women";
  const { jawel ,totalPages} = await getJawelByWomans({ pageNumber,women });

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
