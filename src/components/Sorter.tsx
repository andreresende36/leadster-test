function Sorter() {
  return (
    <div className="w-[30%] flex justify-end items-center gap-4">
      <span className="font-bold">Ordenar por</span>
      <select
        name="sort"
        id="sort"
        className={`text-center font-medium border-[1.5px]
        border-[#21465e] p-2 rounded-lg`}
      >
        <option value="date">Data da publicação</option>
        <option value="title">Título</option>
      </select>
    </div>
  );
}

export default Sorter;
