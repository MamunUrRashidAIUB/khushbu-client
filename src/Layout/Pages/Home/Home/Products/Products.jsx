import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../../Hooks/useProducts";
import Card from "../../../../../Components/Cards/Card";

const Products = () => {
  const [products] = useProducts();

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <Tabs className="flex justify-center items-center flex-col">
      <TabList className="flex justify-center mb-4">
        {uniqueCategories.map((category, index) => (
          <Tab
            key={index}
            className="mx-4 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            {category}
          </Tab>
        ))}
      </TabList>

      {uniqueCategories.map((category, index) => (
        <TabPanel key={index} className="text-center">
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {products
              .filter((product) => product.category === category)
              .map((filteredProduct) => (
                <Card
                  key={filteredProduct.id}
                  name={filteredProduct.name}
                  image={filteredProduct.image}
                  title={filteredProduct.description}
                ></Card>
              ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Products;
