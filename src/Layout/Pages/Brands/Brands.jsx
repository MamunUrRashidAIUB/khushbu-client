import Allbrands from "./Brands/Allbrands";
import BrandFilter from "./Brands/BrandFilter";

const Brands = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mx-auto">
        <BrandFilter />
      </div>
      <Allbrands />
    </div>
  );
};

export default Brands;
