import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import alarmSound from "../../assets/alarm.mp3";

export default function RecentOrders() {
    const alarmRef = useRef<HTMLAudioElement | null>(null);
    const [orders, setOrders] = useState([]);
    const [seenOrderIds, setSeenOrderIds] = useState(new Set());

    useEffect(() => {
      alarmRef.current = new Audio(alarmSound);
      alarmRef.current.loop = true;

      const fetchOrders = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/today`);
          if (!response.ok) {
            throw new Error("Failed to fetch orders");
          }

          const newData = await response.json();

          setOrders((prevOrders) => {
            const prevIds = new Set(prevOrders.map(o => o.order_id));
            const newOrders = newData.filter(order => !prevIds.has(order.order_id));
            const newIds = newOrders.map(order => order.order_id);

            // 🔊 Play tone if there are new orders
            if (newIds.length > 0) {
              alarmRef.current.play().catch((err) => {
                console.warn("Sound playback failed:", err);
              });
            }

            // Remove newIds from seenOrderIds so they highlight
            setSeenOrderIds(prevSeen => {
              const updated = new Set(prevSeen);
              newIds.forEach(id => updated.delete(id));
              return updated;
            });

            return newData;
          });

          console.log("Today's Orders:", newData);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
      const interval = setInterval(fetchOrders, 60000); // every 60 seconds
      return () => clearInterval(interval);
    }, []);

    function handleRowClick(orderId) {
      setSeenOrderIds((prev) => new Set(prev).add(orderId));
    }

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
                  <TableRow
                    key={order.order_id}
                    onClick={() => handleRowClick(order.order_id)}
                    className={`cursor-pointer transition-colors duration-300 ${
                      !seenOrderIds.has(order.order_id)
                        ? 'bg-green-50 dark:bg-green-900/20'
                        : 'bg-white dark:bg-white/[0.03]'
                    }`}
                  >
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