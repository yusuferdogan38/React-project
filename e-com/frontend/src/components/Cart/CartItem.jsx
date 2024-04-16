import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={item.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(item._id)}
        >
          x
        </i>
      </td>
      <td>{item.productname}</td>
      <td>{item.price.toFixed(2)}</td>
      <td className="product-quantity">{item.quantity}</td>
      <td className="product-subtotal">
        {(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
};
