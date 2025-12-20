import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 flex items-center justify-center">
      {cart.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center space-y-6 max-w-md">
            <div className="text-7xl mb-4">🛒</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Your Cart is Empty
            </h1>
            <p className="text-amber-200/70 text-lg">
              Start shopping to add items to your cart and discover our amazing fragrance collection!
            </p>
            <Link
              to="/"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-8">
            Your Shopping Cart
          </h1>

            <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-2xl shadow-2xl border border-amber-800/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-amber-50">
                  <thead className="bg-amber-900/50 border-b border-amber-700/30">
                    <tr>
                      <th className="px-4 py-4 text-left text-amber-300 font-semibold">Image</th>
                      <th className="px-4 py-4 text-left text-amber-300 font-semibold">Name</th>
                      <th className="px-4 py-4 text-left text-amber-300 font-semibold">Price</th>
                      <th className="px-4 py-4 text-left text-amber-300 font-semibold">Quantity</th>
                      <th className="px-4 py-4 text-left text-amber-300 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item._id} className="border-b border-amber-800/30 hover:bg-amber-800/20 transition-colors">
                        <td className="px-4 py-4">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 font-semibold">{item.name}</td>
                        <td className="px-4 py-4 text-amber-400 font-bold">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 bg-amber-900/50 rounded-lg p-2 w-fit">
                            <button
                              onClick={() => handleDecrement(item._id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition-colors"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {quantities[item._id] || 1}
                            </span>
                            <button
                              onClick={() => handleIncrement(item._id)}
                              className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
                            aria-label="Delete item"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-8 border border-amber-800/30 shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-amber-200/70 text-lg mb-2">Subtotal</p>
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    ${totalAmount.toFixed(2)}
                  </h2>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 active:scale-95"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {showAddressForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-8 shadow-2xl border border-amber-800/30 max-w-md w-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-6">
                Delivery Address
              </h2>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all mb-6 px-4 py-3 rounded-lg"
                required
              />
              <div className="flex gap-4">
                <button
                  onClick={() => setShowAddressForm(false)}
                  className="flex-1 px-4 py-3 border-2 border-amber-700/50 text-white rounded-lg hover:bg-amber-700/20 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddressSubmit}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg font-semibold"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default Cart;
