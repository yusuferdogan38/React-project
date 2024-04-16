//css
import { useContext, useRef } from "react";
import "./Info.css";

import PropTypes from "prop-types";
import { CartContext } from "../../../context/CartProvider";

const Info = ({ singleProduct }) => {
  const quantityRef = useRef();
  const { addToCart } = useContext(CartContext);

  //product discounted price calculation
  const orginalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;
  const discountedPrice =
    orginalPrice - (orginalPrice * discountPercentage) / 100;

  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.productname}</h1>
      <div className="product-review">
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
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price" style={{ color: "royalblue" }}>
          {orginalPrice.toFixed(2)}
        </s>
        <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
      </div>

      <p className="product-description">{singleProduct.description}</p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
              <div className="color-wrapper">
                <label className="blue-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="red-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper ">
                <label className="green-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
              <div className="color-wrapper">
                <label className="purple-color">
                  <input type="radio" name="product-color" />
                </label>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              <span className="">XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="cart-button">
            <input
              type="number"
              defaultValue="1"
              min="1"
              id="quantity"
              ref={quantityRef}
            />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              onClick={() =>
                addToCart({
                  ...singleProduct,
                  price: discountedPrice,

                  quantity: parseInt(quantityRef.current.value),
                })
              }
            >
              Add to cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Share this Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>Pants , Women</strong>
        </div>
        <div className="product-tags">
          <span>Tags:</span>
          <a href="#">black</a>,<a href="#">white</a>
        </div>
      </div>
    </div>
  );
};

export default Info;

Info.propTypes = {
  singleProduct: PropTypes.object,
};
