import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "Pencil", category: "Stationary", price: 5, stock: 250 },
    { name: "Eraser", category: "Stationary", price: 10, stock: 178 },
    { name: "Sharpener", category: "Stationary", price: 5, stock: 42 },
    { name: "Cricket Ball", category: "Sports", price: 50, stock: 37 },
    { name: "Cricket Bat", category: "Sports", price: 2000, stock: 13 },
    { name: "Headphones", category: "Electronics", price: 1500, stock: 61 },
    { name: "Notebook", category: "Stationary", price: 80, stock: 100 },
    { name: "Football", category: "Sports", price: 800, stock: 25 },
    { name: "Laptop", category: "Electronics", price: 20000, stock: 20 },
    { name: "Water Bottle", category: "Accessories", price: 250, stock: 150 },
    { name: "Backpack", category: "Accessories", price: 500, stock: 50 },
    { name: "Marker", category: "Stationary", price: 8, stock: 80 },
    { name: "Gym Bag", category: "Sports", price: 300, stock: 45 },
    { name: "SSD Disk", category: "Electronics", price: 1000, stock: 100 },
    { name: "Sunglasses", category: "Accessories", price: 500, stock: 200 },
    { name: "Yoga Mat", category: "Sports", price: 250, stock: 70 },
    { name: "USB Flash Drive", category: "Electronics", price: 200, stock: 150 },
    { name: "Watch", category: "Accessories", price: 1500, stock: 30 },
    { name: "Tennis Racket", category: "Sports", price: 1500, stock: 15 },
    { name: "Desktop Computer", category: "Electronics", price: 30000, stock: 10 },
    { name: "Sun Hat", category: "Accessories", price: 200, stock: 100 },
  ]);

  const [orders, setOrders] = useState([
    {
      orderId: 11248395,
      customer: "Rajkumar",
      orderDate: "13/3/2024",
      orderStatus: "Not Delivered",
      orderTotal: 5000,
      deliveryDate: "15/3/2024",
      products: [
        { name: "Cricket Bat", quantity: 1, price: 2000 },
        { name: "Headphones", quantity: 2, price: 3000 },
      ],
    },
    {
      orderId: 34542671,
      customer: "Jenny",
      orderDate: "10/3/2024",
      orderStatus: "Delivered",
      orderTotal: 450,
      deliveryDate: "11/3/2024",
      products: [
        { name: "Cricket Ball", quantity: 7, price: 350 },
        { name: "Eraser", quantity: 3, price: 30 },
        { name: "Pencil", quantity: 10, price: 50 },
        { name: "Sharpener", quantity: 4, price: 20 },
      ],
    },
    {
      orderId: 57894613,
      customer: "Shanti",
      orderDate: "24/2/2024",
      orderStatus: "Delivered",
      orderTotal: 2700,
      deliveryDate: "27/2/2024",
      products: [
        { name: "Cricket Bat", quantity: 1, price: 2000 },
        { name: "Cricket Ball", quantity: 10, price: 500 },
        { name: "Pencil", quantity: 10, price: 50 },
        { name: "Eraser", quantity: 10, price: 100 },
        { name: "Sharpener", quantity: 10, price: 50 },
      ],
    },
    {
      orderId: 98765432,
      customer: "Purva",
      orderDate: "1/3/2024",
      orderStatus: "Delivered",
      orderTotal: 1500,
      deliveryDate: "4/3/2024",
      products: [
        { name: "Backpack", quantity: 1, price: 500 },
        { name: "SSD Disk", quantity: 1, price: 1000 },
      ],
    },
    {
      orderId: 12345678,
      customer: "Rohit",
      orderDate: "5/3/2024",
      orderStatus: "Delivered",
      orderTotal: 580,
      deliveryDate: "7/3/2024",
      products: [
        { name: "Marker", quantity: 5, price: 40 },
        { name: "Gym Bag", quantity: 1, price: 300 },
        { name: "Notebook", quantity: 3, price: 240 },
      ],
    },
    {
      orderId: 87654321,
      customer: "Tripti",
      orderDate: "8/3/2024",
      orderStatus: "Delivered",
      orderTotal: 4600,
      deliveryDate: "11/3/2024",
      products: [
        { name: "Tennis Racket", quantity: 1, price: 1500 },
        { name: "Yoga Mat", quantity: 2, price: 500 },
        { name: "Sun Hat", quantity: 3, price: 600 },
        { name: "Sunglasses", quantity: 4, price: 2000 },
      ],
    },
    {
      orderId: 65432198,
      customer: "Shahid",
      orderDate: "15/3/2024",
      orderStatus: "Not Delivered",
      orderTotal: 31700,
      deliveryDate: "20/3/2024",
      products: [
        { name: "USB Flash Drive", quantity: 1, price: 200 },
        { name: "Watch", quantity: 1, price: 1500 },
        { name: "Desktop Computer", quantity: 1, price: 30000 },
      ],
    },
    {
      orderId: 23456789,
      customer: "Neha",
      orderDate: "12/3/2024",
      orderStatus: "Delivered",
      orderTotal: 1300,
      deliveryDate: "14/3/2024",
      products: [
        { name: "Football", quantity: 1, price: 800 },
        { name: "Water Bottle", quantity: 2, price: 500 },
      ],
    },
    {
      orderId: 54321987,
      customer: "Priya",
      orderDate: "22/2/2024",
      orderStatus: "Delivered",
      orderTotal: 22700,
      deliveryDate: "24/2/2024",
      products: [
        { name: "Laptop", quantity: 1, price: 20000 },
        { name: "Headphones", quantity: 1, price: 1500 },
        { name: "SSD Disk", quantity: 1, price: 1000 },
        { name: "USB Flash Drive", quantity: 1, price: 200 },
      ],
    },
    {
      orderId: 45678912,
      customer: "Anoksha",
      orderDate: "26/2/2024",
      orderStatus: "Delivered",
      orderTotal: 5250,
      deliveryDate: "28/2/2024",
      products: [
        { name: "Cricket Ball", quantity: 3, price: 150 },
        { name: "Cricket Bat", quantity: 1, price: 2000 },
        { name: "Football", quantity: 2, price: 1600 },
        { name: "Tennis Racket", quantity: 1, price: 1500 },
      ],
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts, orders, setOrders }}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
