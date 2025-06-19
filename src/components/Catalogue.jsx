import { useState, useEffect } from 'react';
import { useAPI } from './Context';
import FilterSide from './FilterSide';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function Catalogue() {
    const { data, loading } = useAPI();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 1000]);

    console.log("Data received in Catalogue:", data);

    useEffect(() => {

        if (Array.isArray(data) && data.length > 0) {
            const uniqueCategories = [...new Set(data.map(item => item.category))];
            setCategories(uniqueCategories);
            setFilteredProducts(data);
        }
    }, [data]);


    useEffect(() => {
        let result = data;

        if (selectedCategory !== 'all') {
            result = result.filter(item => item.category === selectedCategory);
        }

        if (searchTerm.trim() !== '') {
            result = result.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        result = result.filter(item =>
            item.price >= priceRange[0] && item.price <= priceRange[1]
        );

        setFilteredProducts(result);
    }, [selectedCategory, searchTerm, priceRange, data]);

    if (loading) return <p>Loading products...</p>;
    return (
  <>
    <h2 className="catalogue-heading">Our Catalogue</h2>
    <section className="catalogue-container">
      <FilterSide
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        setSearchTerm={setSearchTerm}
        setPriceRange={setPriceRange}
      />

      <div className="products-grid">
        {filteredProducts.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  </>
);
}

export default Catalogue;
