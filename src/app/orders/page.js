"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { dbTimeForHuman } from "@/libs/datetime";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const { loading, data: profile } = useProfile();

  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoadingOrders(true);
    fetch("/api/orders").then((res) => {
      res.json().then((orders) => {
        setOrders(orders.reverse());
        setLoadingOrders(false);
      });
    });
  }

  async function handleUpdateOrderStatus(item) {
    const creationPromise = new Promise(async (resolve, reject) => {
      const data = { _id: item?._id, ...item, paid: true };
      const response = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      fetchOrders();
      if (response.ok) resolve();
      else reject();
    });
    await toast.promise(creationPromise, {
      loading: "Updating Order...",
      success: "Order updated",
      error: "Error, sorry...",
    });
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={profile.admin} />
      <div className="mt-8">
        {loadingOrders && <div>Loading orders...</div>}
        {orders?.length > 0 &&
          orders.map((order) => (
            <div
              key={order._id}
              className="hover:bg-gray-100 mb-2 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="grow flex w-full flex-row items-center gap-6">
                <div>
                  <div
                    className={
                      (order.paid ? "bg-green-400" : "bg-red-500") +
                      " p-2 rounded-md text-white w-24 text-center"
                    }
                  >
                    {order.paid ? "Paid" : "Not paid"}
                  </div>
                </div>
                <div className="grow truncate whitespace-normal">
                  <div className="flex gap-2 items-center mb-1 flex-wrap">
                    <div className="grow truncate">{order.userEmail}</div>
                    <div className="text-gray-500 text-sm">
                      {dbTimeForHuman(order.createdAt)}
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">
                    {order.cartProducts.map((p) => p.name).join(", ")}
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-32 whitespace-nowrap">
                <button
                  disabled={order.paid}
                  onClick={() => {
                    handleUpdateOrderStatus(order);
                  }}
                  className="disabled:bg-gray-300 mb-2 hover:bg-white disabled:hover:bg-gray-300 disabled:hover:cursor-no-drop bg-white"
                >
                  Update status
                </button>
                <Link
                  href={"/orders/" + order._id}
                  className="button bg-white hover:bg-white"
                >
                  Show order
                </Link>
              </div>
            </div>
          ))}
        {/* {orders.length == 0 && <div>order is empty</div>} */}
      </div>
    </section>
  );
}
