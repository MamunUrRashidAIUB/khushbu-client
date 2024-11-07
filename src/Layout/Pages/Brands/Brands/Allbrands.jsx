import Card from "../../../../Components/Cards/Card";
import useProducts from "../../../../Hooks/useProducts";
const Allbrands = () => {
  const [products] = useProducts();
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          image={product.image}
          title={product.description}
          brand={product.brand}
        />
      ))}
    </div>
  );
};

export default Allbrands;
