import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";


export default function RecentOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/today`);
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        console.log("Today's Orders:", data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
    const interval = setInterval(fetchOrders, 60000); // every 60 seconds
    return () => clearInterval(interval);
  }, []);

    return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Today's Orders
          </h3>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Customer
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Items
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Total
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orders.map((order) => {
              const itemSummary = order.items
                .map(item => `${item.item_name} x${item.quantity}`)
                .join(", ");

              return (
                <TableRow key={order.order_id}>
                  <TableCell className="py-3 text-theme-sm text-gray-800 dark:text-white/90">
                    <div className="font-medium">{order.customer_name}</div>
                    <div className="text-theme-xs text-gray-500 dark:text-gray-400">
                      {order.customer_phone}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-theme-sm text-gray-700 dark:text-white/90">
                    <div className="flex flex-col gap-1">
                      {order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.item_name} x{item.quantity}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-theme-sm text-gray-700 dark:text-white/90">
                    ${order.total_amount}
                  </TableCell>
                  <TableCell className="py-3 text-theme-sm text-gray-700 dark:text-white/90">
                    <Badge size="sm" color="success">Placed</Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}