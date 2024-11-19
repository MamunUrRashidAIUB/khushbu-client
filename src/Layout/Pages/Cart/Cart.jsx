import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  return (
    <div className="text-center">
      <h1>Cart</h1>
      <p>there is no product</p>

      {cart.map((item) => (
        <div key={item._id}>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

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
