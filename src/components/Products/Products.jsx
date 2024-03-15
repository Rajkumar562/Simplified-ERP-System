import React, { useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";

function Products() {
  const { products, setProducts } = useContext(ProductContext);

  const [delProduct, setDelProduct] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  let id = 0;
  const [editMode, setEditMode] = useState({});
  const [disableEdit, setDisableEdit] = useState(false);

  function addProduct() {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stock) {
      setProducts([...products, newProduct]);
      setShowAddProduct(false);
      setNewProduct({ name: "", category: "", price: "", stock: "" });
    }
  }

  function deleteProduct(itemName) {
    const updatedProducts = products.filter((item) => item.name !== itemName);
    setProducts(updatedProducts);
    setDelProduct(false);
  }

  function toggleEditMode(itemName) {
    setEditMode({ ...editMode, [itemName]: !editMode[itemName] });
    setDisableEdit(!disableEdit);
  }

  function EditProduct(itemName) {
    const newList = products.map((item) => {
      if (item.name === itemName) {
        item.name = newProduct.name === "" ? item.name : newProduct.name;
        item.category = newProduct.category === "" ? item.category : newProduct.category;
        item.price = newProduct.price === "" ? item.price : newProduct.price;
        item.stock = newProduct.stock === "" ? item.stock : newProduct.stock;
      }
      return item;
    });
    toggleEditMode(itemName);
    setProducts(newList);
    setNewProduct({ name: "", category: "", price: "", stock: "" });
  }

  return (
    <>
      <div className="text-3xl text-center m-3">Products List</div>
      <div class="mt-6 flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200 text-xl">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 text-left font-normal text-gray-700">
                      <span>Item</span>
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left font-normal text-gray-700">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left font-normal text-gray-700">
                      Stock
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left font-normal text-gray-700">
                      Price
                    </th>
                    <th scope="col" className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((item, index) => (
                    <tr key={index} onClick={() => delProduct && deleteProduct(item.name)} className="p-2">
                      <td className="px-4 py-4 text-lg text-gray-700">
                        {editMode[item.name] ? (
                          <>
                            <div>{item.name}</div>
                            <div>
                              <input
                                className="rounded p-2 mt-2"
                                type="text"
                                placeholder="Product Name"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                              />
                            </div>
                          </>
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-700">
                        {editMode[item.name] ? (
                          <>
                            <div>{item.category}</div>
                            <div>
                              <input
                                className="rounded p-2 mt-2"
                                type="text"
                                placeholder="Category"
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                              />
                            </div>
                          </>
                        ) : (
                          item.category
                        )}
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-700">
                        {editMode[item.name] ? (
                          <>
                            <div>{item.stock}</div>
                            <div>
                              <input
                                className="rounded p-2 mt-2"
                                type="number"
                                placeholder="Stock"
                                value={newProduct.stock}
                                onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                              />
                            </div>
                          </>
                        ) : (
                          item.stock
                        )}
                      </td>
                      <td className="px-4 py-4 text-lg text-gray-700">
                        {editMode[item.name] ? (
                          <>
                            <div>₹{item.price}</div>
                            <div>
                              <input
                                className="rounded p-2 mt-2"
                                type="number"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                              />
                            </div>
                          </>
                        ) : (
                          `₹${item.price}`
                        )}
                      </td>
                      <td className="px-4 py-4">
                        {editMode[item.name] ? (
                          <button
                            className="bg-cyan-500 hover:bg-cyan-700 p-2 rounded mr-2"
                            onClick={() => EditProduct(item.name)}
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            className="bg-cyan-500 hover:bg-cyan-700 p-2 rounded"
                            onClick={() => toggleEditMode(item.name)}
                            disabled={disableEdit}
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showAddProduct ? (
                <div className="text-black p-2">
                  <input
                    className="rounded p-2 m-2"
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                  <input
                    className="rounded p-2 m-2"
                    type="text"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  />
                  <input
                    className="rounded p-2 m-2"
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  />
                  <input
                    className="rounded p-2 m-2"
                    type="number"
                    placeholder="Stock"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
                  />
                  <button className="text-white bg-orange-500 hover:bg-orange-700 p-2 m-2 rounded" onClick={addProduct}>
                    Add
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <button
                    className="bg-orange-500 hover:bg-orange-700 p-2 m-2 rounded"
                    onClick={() => setShowAddProduct(true)}
                  >
                    Add Product
                  </button>
                  <button
                    className={`p-2 m-2 rounded ${
                      delProduct
                        ? "border-2 border-rose-600 bg-stone-200 text-rose-600"
                        : "bg-rose-600 hover:bg-rose-800"
                    }`}
                    onClick={() => setDelProduct(!delProduct)}
                  >
                    Delete Product
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
