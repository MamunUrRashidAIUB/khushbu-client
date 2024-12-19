import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Cart = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const axiossecure = useAxiosSecure();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState("");
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item._id]: item.quantity || 1 }), {})
  );

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item._id] || 1),
    0
  );

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddressSubmit = () => {
    if (!address.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Please provide a valid address.",
        icon: "error",
      });
      return;
    }

    const order = {
      email: user.email,
      items: cart.map((item) => ({
        id: item._id,
        name: item.name,
        quantity: quantities[item._id] || 1,
        price: item.price,
      })),
      totalAmount: totalAmount,
      address: address.trim(),
    };

    axiossecure
      .post("/orders", order)
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            title: "Order Placed!",
            text: "Your order has been successfully placed.",
            icon: "success",
          });
          refetch();
          setShowAddressForm(false);
          setAddress("");
        }
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue placing your order.",
          icon: "error",
        });
      });
  };

  const handlePlaceOrder = () => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Please log in to place your order.",
        icon: "error",
      });
      return;
    }
    setShowAddressForm(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart.",
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
              text: "Item has been removed from your cart.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Could not remove the item.",
              icon: "error",
            });
          }
        });
      }
    });
  };

  return (
    <div className="text-center px-4 sm:px-6 md:px-8">
      {cart.length === 0 ? (
        <p className="text-lg sm:text-xl">There are no products in the cart.</p>
      ) : (
        <>
          <h1 className="text-xl sm:text-2xl font-bold mb-5">Your Cart</h1>

          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="px-2 py-1 sm:px-4 sm:py-2">Image</th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2">Name</th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2">Price</th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2">Quantity</th>
                  <th className="px-2 py-1 sm:px-4 sm:py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">{item.name}</td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button
                          onClick={() => handleDecrement(item._id)}
                          className="bg-red-600 text-black px-1 sm:px-2 rounded"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        {quantities[item._id] || 1}
                        <button
                          onClick={() => handleIncrement(item._id)}
                          className="bg-green-500 text-black px-1 sm:px-2 rounded"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-2 py-1 sm:px-4 sm:py-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded"
                        aria-label="Delete item"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-5 gap-2">
            <h2 className="text-lg sm:text-xl font-bold">Total Amount:</h2>
            <p className="text-lg sm:text-xl font-bold">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="text-black p-2 rounded-lg mt-5 bg-green-400"
          >
            Place Order
          </button>
        </>
      )}

      {showAddressForm && (
        <div className="address-form mt-5">
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            Enter Your Address
          </h2>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="input input-bordered w-full sm:w-1/2 mb-3"
            required
          />
          <button
            onClick={handleAddressSubmit}
            className="btn bg-green-400 text-black"
          >
            Submit Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
