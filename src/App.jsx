import { Outlet } from "react-router-dom";
import { Header } from "./components/index.js";
import ProductContextProvider from "./context/ProductContextProvider.jsx";

function App() {
  return (
    <ProductContextProvider>
      <div className="text-white bg-gray-700 p-4">
        <Header />
        <Outlet />
      </div>
    </ProductContextProvider>
  );
}

export default App;
