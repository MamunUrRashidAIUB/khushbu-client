import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();

  return (
    <div className="text-center ">
      {cart.length === 0 ? (
        <p>There is no product in the cart.</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              {/* Table Head */}
              <thead>
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {/* Table Rows */}
                {cart.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Return to Shop Button */}
      <Link to="/">
        <button className="bg-yellow-200 text-black p-2 rounded-lg mt-5">
          Return to shop
        </button>
      </Link>
    </div>
  );
};

export default Cart;
