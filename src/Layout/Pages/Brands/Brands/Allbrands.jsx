import Card from "../../../../Components/Cards/Card";
import useProducts from "../../../../Hooks/useProducts";

const Allbrands = ({ filteredProducts }) => {
  const [products] = useProducts();

  // Get the filtered products
  const productsToDisplay = filteredProducts(products);

  return (
    <div className="container mx-auto pt-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            title={product.description}
            brand={product.brand}
            price={product.price}
            variants={product.variants}
          />
        ))}
      </div>
    </div>
  );
};

export default Allbrands;
