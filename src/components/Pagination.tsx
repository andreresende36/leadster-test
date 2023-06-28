import PageButton from "./PageButton";
function Pagination() {
  return (
    <div className="flex justify-center items-center p-10 gap-2">
      <span className="font-extrabold text-lg pr-2">Página</span>
      <PageButton pageNumber={1} />
      <PageButton pageNumber={2} />
      <PageButton pageNumber={3} />
      <PageButton pageNumber={4} />
    </div>
  );
}

export default Pagination;
