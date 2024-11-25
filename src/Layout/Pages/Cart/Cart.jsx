import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart(); // Now you're receiving both cart state and setCart function.
  const axiossecure = useAxiosSecure();

  // Add local state for quantity management
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item._id]: item.quantity || 1 }), {})
  );

  // Calculate total amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item._id] || 1),
    0
  );

  // Handlers for incrementing and decrementing quantities
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1), // Prevent quantity < 1
    }));
  };

  // delete item from cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="text-center">
      {cart.length === 0 ? (
        <>
          <p>There is no product in the cart.</p>
        </>
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
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Action</th>
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
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDecrement(item._id)}
                          className="bg-red-600 text-black px-2 rounded"
                        >
                          -
                        </button>
                        {quantities[item._id] || 1}
                        <button
                          onClick={() => handleIncrement(item._id)}
                          className="bg-green-500 text-black px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <div>
        <div className="flex justify-center mt-5">
          <h2 className="text-xl font-bold">Total Amount: </h2>
          <p className="text-xl font-bold"> $ {totalAmount.toFixed(2)}</p>
        </div>
        <button className=" text-black p-2 rounded-lg mt-5 bg-green-400">
          Place Order{" "}
        </button>
      </div>

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
