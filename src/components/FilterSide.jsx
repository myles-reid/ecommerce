
function FilterSide({ onFilter }) {

  return (
    <section className="sidebar">
      <h2>Filter</h2>
      {categories.map(cat => (
        <button key={cat} onClick={() => onFilter(cat)}>{cat}</button>
      ))}
    </section>
  );
}

export default FilterSide;