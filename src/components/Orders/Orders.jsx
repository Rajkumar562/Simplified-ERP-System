import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext";

function Orders() {
  const { orders, setOrders } = useContext(ProductContext);

  const [delOrder, setDelOrder] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState({});
  const [itemsPerOrder, setItemsPerOrder] = useState([]);

  useEffect(() => {
    initializeShowOrderDetails();
  }, []);

  function initializeShowOrderDetails() {
    let updatedDetails = {};
    for (const obj of orders) {
      updatedDetails = { ...updatedDetails, [obj.orderId]: false };
    }
    setShowOrderDetails(updatedDetails);
  }

  function deleteOrder(orderId) {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    setDelOrder(!delOrder);
  }

  function toggleDetails(id) {
    const visible = !showOrderDetails[id];
    setItemsPerOrder([]);

    const orderDetails = {};
    for (const order of orders) {
      if (order.orderId === id) {
        orderDetails[order.orderId] = !showOrderDetails[id];
      } else {
        orderDetails[order.orderId] = false;
      }
    }

    setShowOrderDetails(orderDetails);

    if (visible) {
      const oneOrder = orders.find((order) => order.orderId === id);
      setItemsPerOrder(oneOrder.products);
    }
  }

  function changeStatus(id) {
    const newOrders = orders.map((order) => (order.orderId === id ? { ...order, orderStatus: "Delivered" } : order));
    setOrders(newOrders);
  }

  return (
    <>
      <div className="text-center text-white text-3xl m-4">
        Order List
        <table className="w-full bg-gray-200 rounded-2xl m-2 text-black overflow-hidden">
          <thead className="bg-blue-400 text-xl">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Delivery Status</th>
              <th className="px-4 py-2">More Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="bg-white text-lg"
                onClick={() => delOrder && deleteOrder(order.orderId)}
              >
                <td className="border px-4 py-2">{order.orderId}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">₹{order.orderTotal}</td>
                <td className="border px-4 py-2">{order.orderDate}</td>
                <td className="border px-4 py-2">
                  {order.orderStatus !== "Delivered" ? (
                    <>
                      <div>Not delivered</div>
                      <button
                        className="text-xs bg-indigo-700 hover:bg-indigo-900 text-white px-2 py-1 rounded-full"
                        onClick={() => changeStatus(order.orderId)}
                      >
                        Change Status
                      </button>
                    </>
                  ) : (
                    "Delivered"
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="text-xs bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-1 rounded-full"
                    onClick={() => toggleDetails(order.orderId)}
                  >
                    {showOrderDetails[order.orderId] ? "Hide Details" : "More Details..."}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className={`text-lg p-2 m-2 rounded ${
            delOrder ? "border-2 border-rose-600 bg-stone-200 text-rose-600" : "bg-rose-600 hover:bg-rose-800"
          }`}
          onClick={() => setDelOrder(!delOrder)}
        >
          Delete Order
        </button>
      </div>
      {showOrderDetails && (
        <div className="text-center text-xl">
          {itemsPerOrder.map((item) => (
            <p key={item.name}>
              {item.name} - Quantity: {item.quantity}, Total Price: ₹{item.price}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Orders;

// import React, { useState, useContext, useEffect } from "react";
// import ProductContext from "../../context/ProductContext";

// function Orders() {
//   const { orders, setOrders } = useContext(ProductContext);

//   const [delOrder, setDelOrder] = useState(false);
//   const [showOrderDetails, setShowOrderDetails] = useState({});
//   const [itemsPerOrder, setItemsPerOrder] = useState([]);
//   const [newOrder, setNewOrder] = useState({
//     orderId: "",
//     customer: "",
//     orderDate: "",
//     orderStatus: "",
//     orderTotal: "",
//     products: [],
//   });

//   useEffect(() => {
//     initializeShowOrderDetails();
//   }, []);

//   function initializeShowOrderDetails() {
//     let updatedDetails = {};
//     for (const obj of orders) {
//       updatedDetails = { ...updatedDetails, [obj.orderId]: false };
//     }
//     setShowOrderDetails(updatedDetails);
//   }

//   function deleteOrder(orderId) {
//     const updatedOrders = orders.filter((order) => order.orderId !== orderId);
//     setOrders(updatedOrders);
//     setDelOrder(!delOrder);
//   }

//   function toggleDetails(id) {
//     const visible = !showOrderDetails[id];
//     setItemsPerOrder([]);

//     const orderDetails = {};
//     for (const order of orders) {
//       if (order.orderId === id) {
//         orderDetails[order.orderId] = !showOrderDetails[id];
//       } else {
//         orderDetails[order.orderId] = false;
//       }
//     }

//     setShowOrderDetails(orderDetails);

//     if (visible) {
//       const oneOrder = orders.find((order) => order.orderId === id);
//       setItemsPerOrder(oneOrder.products);
//     }
//   }
//   function changeStatus(id) {
//     const newOrders = orders.map((order) => (order.orderId === id ? { ...order, orderStatus: "Delivered" } : order));
//     setOrders(newOrders);
//   }
//   return (
//     <>
//       <div className="text-center text-3xl m-4 ">
//         Order List
//         <ul className="divide-y divide-gray-400">
//           {orders.map((order) => (
//             <li key={order.orderId} onClick={() => delOrder && deleteOrder(order.orderId)}>
//               <div className="flex flex-wrap justify-between pt-2 mt-2 mb-0">
//                 <div>
//                   <p className="text-lg">Order Id: {order.orderId}</p>
//                   <p className="text-sm text-gray-300">Order Date: {order.orderDate}</p>
//                 </div>
//                 <div>
//                   <p className="text-lg">Customer: {order.customer}</p>
//                   <p className="text-sm text-gray-300">Order Total: ₹{order.orderTotal}</p>
//                 </div>
//                 <div>
//                   <p className="text-lg">Order Status: {order.orderStatus}</p>
//                   {order.orderStatus !== "Delivered" && (
//                     <button
//                       className="text-white text-xs bg-indigo-700 hover:bg-indigo-900 p-2 rounded-full"
//                       onClick={() => changeStatus(order.orderId)}
//                     >
//                       Change Status
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="text-left">
//                 <button
//                   className="text-sm px-2 py-1 mt-0 mb-2 bg-emerald-500 hover:bg-emerald-700 rounded-full"
//                   onClick={() => toggleDetails(order.orderId)}
//                 >
//                   {showOrderDetails[order.orderId] ? "Hide Details" : "More Details..."}
//                 </button>
//               </div>
//               {showOrderDetails[order.orderId] ? (
//                 <ul className="text-center text-sm">
//                   {itemsPerOrder.map((item) => (
//                     <li key={item.name} className="flex p-1">
//                       <p className="mx-2">{`${item.name} x${item.quantity}             Total Price: ₹${item.price}`}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 ""
//               )}
//             </li>
//           ))}
//         </ul>
//         <button
//           className={`text-lg p-2 m-2 rounded ${
//             delOrder ? "border-2 border-rose-600 bg-stone-200 text-rose-600" : "bg-rose-600 hover:bg-rose-800"
//           }`}
//           onClick={() => setDelOrder(true)}
//         >
//           Delete Order
//         </button>
//       </div>
//     </>
//   );
// }

// export default Orders;
