import "./Cart.css";
import CartCoupon from "./CartCoupon";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-wrapper">
          <form className="cart-form">
            <CartProgress />
            <div className="shop-table-wrapper">
              <CartTable />
              <div className="actions-wrapper">
                <CartCoupon />
                <div className="update-cart">
                  <button className="btn">Update Cart</button>
                </div>
              </div>
            </div>
          </form>
          <div className="cart-collaterals">
            <CartTotal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
