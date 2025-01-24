import { getAllJawels } from "@/actions";
import { Pagination, TableProducts } from "@/components";

interface Props {
  searchParams: Promise<{ page: string }>;
}
export default async function ProductPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const { jawels, totalPages } = await getAllJawels({ pageNumber });
  return (
    <main className="mx-auto flex flex-col">
      {jawels && <TableProducts jawels={jawels} />}
      <Pagination totalPages={totalPages ?? 1} />
    </main>
  );
}
