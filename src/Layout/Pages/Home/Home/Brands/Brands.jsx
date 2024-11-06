import img1 from "./../../../../../assets/images/logo1.jpeg";
import img2 from "./../../../../../assets/images/logo2.jpeg";
import img3 from "./../../../../../assets/images/logo3.jpeg";
import img4 from "./../../../../../assets/images/logo4.jpeg";
import img5 from "./../../../../../assets/images/logo5.png";

const Brands = () => {
  return (
    <div className="flex gap-4 pt-5 justify-center">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
    </div>
  );
};

export default Brands;
