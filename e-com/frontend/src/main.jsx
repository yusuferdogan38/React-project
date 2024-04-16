import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Layout } from "./layouts/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
//React-Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//css
import "./index.css";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
