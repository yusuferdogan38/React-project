import { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartTotal = () => {
  const { cartItem } = useContext(CartContext);
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const cartItemTotal = cartItem.map((item) => {
    const itemTotal = item.price * item.quantity;
    return itemTotal;
  });

  const subTotal = cartItemTotal.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;
  const cartTotal = fastCargoChecked
    ? (subTotal + cargoFee).toFixed(2)
    : subTotal.toFixed(2);

  return (
    <div className="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotal}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${cartTotal}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
