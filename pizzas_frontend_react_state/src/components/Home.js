import Product from './Product';

function Home(props) {
  function deleteProduct(productId) {
    props.deleteProduct(productId);
  }

  return (
    <>
      <p>
        <a href="/products/add">Add a product</a>
      </p>
      <div className="promo-blocks">
        {props.products.map((prod) => (
          <Product key={prod.id} product={prod} deleteProduct={deleteProduct} />
        ))}
      </div>
    </>
  );
}

export default Home;
