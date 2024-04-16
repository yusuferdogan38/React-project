import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (cartItem) => {
    setCartItem((prevCart) => [
      ...prevCart,
      { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity : 1 },
    ]);
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItem.filter((item) => {
      return item._id !== itemId;
    });
    setCartItem(filteredCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
