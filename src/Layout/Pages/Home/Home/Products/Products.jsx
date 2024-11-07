import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../../Hooks/useProducts";
import Card from "../../../../../Components/Cards/Card";

const Products = () => {
  const [products] = useProducts();

  if (!products || products.length === 0) {
    return <p className="text-center mt-5">No products available.</p>;
  }

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <Tabs className="flex justify-center items-center mt-5 flex-col">
      <TabList className="flex justify-center mb-4">
        {uniqueCategories.map((category, index) => (
          <Tab
            key={index}
            className="mx-4 cursor-pointer px-4 py-2 rounded-lg  transition duration-300"
            selectedClassName="bg-orange-400 text-black font-bold"
          >
            {category}
          </Tab>
        ))}
      </TabList>

      {uniqueCategories.map((category, index) => (
        <TabPanel key={index} className="text-center">
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products
              .filter((product) => product.category === category)
              .map((filteredProduct) => (
                <Card
                  key={filteredProduct.id}
                  name={filteredProduct.name}
                  image={filteredProduct.image}
                  title={filteredProduct.description}
                  price={filteredProduct.price}
                />
              ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Products;
