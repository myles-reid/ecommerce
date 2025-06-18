import React from 'react';

function FilterSide({ categories, setSelectedCategory, setSearchTerm, setPriceRange }) {
  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>

      <div>
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <h4>Category</h4>
        <button onClick={() => setSelectedCategory('all')}>All</button>
        {categories.map((cat, i) => (
          <button key={i} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div>
        <h4>Price</h4>
        <select onChange={handlePriceChange}>
          <option value="0-1000">All</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-1000">$100+</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSide;
