import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import ProductContext from "../../context/ProductContext";
import "react-calendar/dist/Calendar.css";

function OrderCalendar() {
  const { orders } = useContext(ProductContext);

  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const dateStr = date.toLocaleDateString();
    const ordersOnDate = orders.filter((order) => order.deliveryDate === dateStr);
    setOrdersForSelectedDate(ordersOnDate);
  };

  const tileContent = ({ date }) => {
    const dateStr = date.toLocaleDateString();
    const hasOrder = orders.some((order) => order.deliveryDate === dateStr);
    return hasOrder ? <p className="bg-green-700 rounded-full h-5 w-5 flex justify-center items-center"></p> : null;
  };

  return (
    <div className="calendar-container flex flex-col sm:flex-row items-center justify-center">
      <div className="mb-4 sm:mb-0">
        <Calendar
          onClickDay={handleDateClick}
          tileContent={tileContent}
          value={selectedDate}
          className="custom-calendar text-black h-3/4 p-4 rounded-lg shadow-lg"
        />
      </div>
      <div className="order-details mt-4 sm:ml-8">
        {ordersForSelectedDate.length > 0 && (
          <>
            <h2 className="text-center sm:text-left">Orders for {selectedDate?.toLocaleDateString()}</h2>
            <ul>
              {ordersForSelectedDate.map((order) => (
                <li key={order.orderId} className="p-2">
                  Order ID: {order.orderId}, Customer: {order.customer}, Order Date: {order.orderDate}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderCalendar;
