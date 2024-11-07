import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="text-center">
      <h1>Cart</h1>
      <p>there is no product</p>
      <Link to="/">
        {" "}
        <button className="bg-yellow-200 text-black p-2 rounded-lg mt-3">
          Return to shop
        </button>
      </Link>
    </div>
  );
};

export default Cart;
