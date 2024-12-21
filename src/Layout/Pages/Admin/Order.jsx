import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"; // Custom hook for secure axios instance

const AdminOrders = () => {
  const axiossecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiossecure.get("/orders"); // Replace with your actual endpoint
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [axiossecure]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left">
                  Order ID
                </th>
                <th className="border border-gray-300 p-2 text-left">Email</th>
                <th className="border border-gray-300 p-2 text-left">Items</th>
                <th className="border border-gray-300 p-2 text-left">
                  Total Amount
                </th>
                <th className="border border-gray-300 p-2 text-left">Status</th>
                <th className="border border-gray-300 p-2 text-left">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.email}</td>
                  <td className="border border-gray-300 p-2">
                    {order.items.map((item) => (
                      <div key={item.id}>
                        {item.name} (x{item.quantity})
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${order.totalAmount}
                  </td>
                  <td className="border border-gray-300 p-2">Pending</td>
                  <td className="border border-gray-300 p-2">
                    {order.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
