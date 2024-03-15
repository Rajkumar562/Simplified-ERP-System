import React, { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";

function Dashboard() {
  const { products, orders } = useContext(ProductContext);

  function productCategories() {
    const categories = products.map((item) => item.category);
    const distinctCategories = new Set(categories);
    return distinctCategories.size;
  }

  function totalStock() {
    return products.reduce((ans, val) => ans + val.stock, 0);
  }

  function totalStockPrice() {
    return products.reduce((ans, val) => {
      return ans + val.price * val.stock;
    }, 0);
  }

  function totalOrderValue() {
    return orders.reduce((ans, val) => ans + val.orderTotal, 0);
  }

  function ordersDelivered() {
    return orders.filter((order) => order.orderStatus === "Delivered").length;
  }

  function averageOrderPrice() {
    return Math.floor(totalOrderValue() / orders.length);
  }

  return (
    <div className="text-center text-4xl p-3 h-auto">
      Simplified ERP System
      <div className="box-border border-2 bg-gray-600 rounded-3xl text-left p-4 m-4 ">
        Dashboard
        <div className="box-border border-2 bg-gray-400 rounded-3xl p-4 m-3 ">
          Products
          <div className="flex flex-row flex-wrap justify-between">
            <div className="box-border border-2 m-2 min-w-20 max-w-44 rounded-3xl p-4 h-48 bg-blue-300">
              <div className="box-border border-2 m-2 min-w-12 max-w-32 py-6 rounded-3xl p-4 h-32 bg-blue-400 text-7xl text-center max-[600px]:text-5xl">
                {products.length}
              </div>
              <div className="m-1 px-2 text-base text-center max-[600px]:text-xs">No. Of Products</div>
            </div>
            <div className="box-border border-2 m-2 max-w-44 min-w-20 rounded-3xl p-4 h-48 bg-green-300">
              <div className="box-border border-2 m-2 max-w-32 min-w-12 py-3 rounded-3xl p-4 h-32 bg-green-400 text-8xl text-center max-[600px]:text-5xl">
                {productCategories()}
              </div>
              <div className="text-center text-base max-[600px]:text-xs">Distinct Categories</div>
            </div>
            <div className="box-border border-2 m-2 min-w-20 max-w-56 rounded-3xl p-4 h-48 bg-red-300 text-base">
              <div className="box-border border-2 m-2 min-w-12 max-w-44 p-5 px-2 rounded-3xl h-32 bg-red-400 text-7xl text-center max-[600px]:text-3xl">
                {totalStock()}
              </div>
              <div className="m-1 px-2 text-center max-[600px]:text-xs">Total Quantity</div>
            </div>
            <div className="box-border border-2 m-2 min-w-20 max-w-[25rem] rounded-3xl p-4 h-48 bg-yellow-300 text-base">
              <div className="box-border border-2 m-2 min-w-12 max-w-[22rem] py-6 rounded-3xl p-4 h-32 bg-yellow-400 text-7xl text-center max-[600px]:text-sm">
                ₹{totalStockPrice()}
              </div>
              <div className="m-1 px-2 text-center max-[600px]:text-xs">Total Value Of Products</div>
            </div>
          </div>
        </div>
        <div className="box-border border-2 bg-gray-400 rounded-3xl p-4 m-3">
          Orders
          <div className="flex flex-row flex-wrap justify-between">
            <div className="box-border border-2 m-2 min-w-20 max-w-44 rounded-3xl p-4 h-48 text-base bg-orange-300">
              <div className="box-border border-2 m-2 min-w-12 max-w-32 py-6 rounded-3xl p-4 h-32 bg-orange-400 text-7xl text-center max-[600px]:text-5xl">
                {orders.length}
              </div>
              <div className="m-1 px-2 text-base text-center max-[600px]:text-xs">No. Of Orders</div>
            </div>
            <div className="box-border border-2 m-2 min-w-20 max-w-44 rounded-3xl p-4 h-48 text-base bg-yellow-300">
              <div className="box-border border-2 m-2 min-w-12 max-w-32 py-3 rounded-3xl p-4 h-32 bg-yellow-400 text-8xl text-center max-[600px]:text-5xl">
                {ordersDelivered()}
              </div>
              <div className="text-center max-[600px]:text-xs">Orders Delivered</div>
            </div>
            <div className="box-border border-2 m-2 min-w-20 max-w-68 rounded-3xl p-4 h-48 text-base bg-red-300">
              <div className="box-border border-2 m-2 min-w-12 max-w-56 p-5 px-2 rounded-3xl h-32 bg-red-400 text-7xl text-center max-[600px]:text-2xl">
                ₹{averageOrderPrice()}
              </div>
              <div className="m-1 px-2 text-center max-[600px]:text-xs">Average Price Per Order</div>
            </div>
            <div className="box-border border-2 m-2 min-w-20 max-w-[25rem] rounded-3xl p-4 h-48 text-base bg-pink-300">
              <div className="box-border border-2 m-2 min-w-12 max-w-[22rem] py-6 rounded-3xl p-4 h-32 bg-pink-400 text-7xl text-center max-[600px]:text-lg">
                ₹{totalOrderValue()}
              </div>
              <div className="m-1 px-2 text-center max-[600px]:text-xs">Total Value Of Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
