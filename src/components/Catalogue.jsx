import { useEffect, useState } from 'react';
import { useAPI } from '../Context';
// import ProductCard from './ProductCard';
// import FilterSidebar from './FilterSidebar';

function Catalogue() {
  const { data, loading } = useAPI();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setFiltered(data);
    }
  }, [data]);

  const handleFilter = (category) => {
    if (category === 'all') {
      setFiltered(data);
    } else {
      const result = data.filter(item => item.category === category);
      setFiltered(result);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="catalogue-container">
      <FilterSidebar onFilter={handleFilter} />
      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
