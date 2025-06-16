import { useAPI } from './Context';

function ProductList() {
  const data = useAPI();
  return (
    <>
      <h1>Product List</h1>
      {data.loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.data.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductList;
