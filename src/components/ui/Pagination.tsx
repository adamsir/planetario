import { Button } from "./Button";

type PaginationProps = {
  page: number;
  itemsPerPage: number;
  totalItems: number;
};

export function Pagination({
  page,
  itemsPerPage,
  totalItems,
}: PaginationProps) {
  return (
    <div className="pagination">
      <Button href={`/planets/${page - 1}`} aria-disabled={page <= 1}>
        Previous
      </Button>
      {page} / {totalItems / itemsPerPage}
      <Button
        href={`/planets/${page + 1}`}
        aria-disabled={page === totalItems / itemsPerPage}
      >
        Next
      </Button>
    </div>
  );
}
