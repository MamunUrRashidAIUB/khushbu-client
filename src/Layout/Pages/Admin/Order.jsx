import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminOrders = () => {
  const axiossecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiossecure.get("/orders");
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [axiossecure]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-amber-400"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 p-4 md:p-8 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-2">
            Order Management
          </h1>
          <p className="text-amber-200/70 text-lg">
            Monitor and manage all customer orders
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">No Orders Yet</h2>
            <p className="text-amber-200/70">Orders will appear here once customers place them</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/40 backdrop-blur-sm border border-amber-800/30 rounded-2xl p-6 shadow-xl">
                <p className="text-amber-200/70 text-sm mb-2">Total Orders</p>
                <h3 className="text-3xl font-bold text-amber-400">{orders.length}</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-6 shadow-xl">
                <p className="text-blue-200/70 text-sm mb-2">Pending Orders</p>
                <h3 className="text-3xl font-bold text-blue-400">
                  {orders.filter(o => o.status === 'pending' || !o.status).length}
                </h3>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 backdrop-blur-sm border border-amber-800/30 rounded-2xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-amber-900/50 border-b border-amber-700/30">
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Order ID
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Customer
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Items
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Amount
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Status
                      </th>
                      <th className="px-4 md:px-6 py-4 text-left text-amber-300 font-semibold text-sm md:text-base">
                        Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={order._id || index}
                        className="border-b border-amber-800/20 hover:bg-amber-800/20 transition-colors"
                      >
                        <td className="px-4 md:px-6 py-4 text-amber-50 text-xs md:text-sm font-mono">
                          {String(order._id).substring(0, 8)}...
                        </td>
                        <td className="px-4 md:px-6 py-4 text-amber-100 text-xs md:text-sm">
                          {order.email}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-amber-100 text-xs md:text-sm">
                          <div className="space-y-1">
                            {order.items?.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="bg-amber-600/50 px-2 py-1 rounded text-xs">
                                  {item.quantity}x
                                </span>
                                <span className="text-amber-200/80">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-yellow-400 font-bold text-sm md:text-base">
                          ${Number(order.totalAmount).toFixed(2)}
                        </td>
                        <td className="px-4 md:px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                              order.status === 'delivered'
                                ? 'bg-green-600/30 text-green-300 border border-green-600/50'
                                : order.status === 'shipped'
                                ? 'bg-blue-600/30 text-blue-300 border border-blue-600/50'
                                : order.status === 'processing'
                                ? 'bg-orange-600/30 text-orange-300 border border-orange-600/50'
                                : 'bg-amber-600/30 text-amber-300 border border-amber-600/50'
                            }`}
                          >
                            {order.status || 'pending'}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-amber-100 text-xs md:text-sm max-w-xs truncate">
                          {order.address}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
