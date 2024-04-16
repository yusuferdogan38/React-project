import { useContext } from "react";
import Proptypes from "prop-types";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
//css
import "./ProductItem.css";
const ProductItem = ({ product }) => {
  const { price, img } = product;

  const { cartItem, addToCart } = useContext(CartContext);
  const filteredCart = cartItem.find(
    (cartItem) => cartItem._id === product._id
  );
  //product discounted price calculation
  const orginalPrice = product.price.current;
  const discountPercentage = product.price.discount;
  const discountedPrice =
    orginalPrice - (orginalPrice * discountPercentage) / 100;

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={img[0]} alt="" className="img1" />
          <img src={img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {product.productname}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">{discountedPrice.toFixed(2)}</strong>
          <span className="old-price">{price.current.toFixed(2)}</span>
        </div>
        <span className="product-discount">-%{price.discount}</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() =>
              addToCart({
                ...product,
                price: discountedPrice,
              })
            }
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`/productdetail/${product._id}`} className="product-link">
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
ProductItem.propTypes = {
  product: Proptypes.object,
  setCartItem: Proptypes.func,
};
