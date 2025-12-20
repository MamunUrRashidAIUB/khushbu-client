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
    <Tabs className="flex justify-center items-center mt-8 flex-col px-4">
      <TabList className="flex justify-center gap-3 md:gap-6 mb-8 flex-wrap bg-gradient-to-r from-gray-100 to-gray-200 p-2 rounded-full shadow-lg">
        {uniqueCategories.map((category, index) => (
          <Tab
            key={index}
            className="cursor-pointer px-6 py-3 rounded-full text-gray-700 font-semibold text-base md:text-lg transition-all duration-300 hover:bg-white hover:shadow-md transform hover:scale-105 border-2 border-transparent"
            selectedClassName="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold shadow-xl border-2 border-white scale-105"
          >
            {category}
          </Tab>
        ))}
      </TabList>

      {uniqueCategories.map((category, index) => (
        <TabPanel key={index} className="text-center w-full max-w-7xl mx-auto px-4">
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products
              .filter((product) => product.category === category)
              .map((filteredProduct) => (
                <Card
                  key={filteredProduct._id || filteredProduct.id}
                  _id={filteredProduct._id || filteredProduct.id}
                  name={filteredProduct.name}
                  image={filteredProduct.image}
                  title={filteredProduct.description}
                  brand={filteredProduct.brand}
                  price={filteredProduct.price}
                  variants={filteredProduct.variants}
                />
              ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Products;
