import { useParams } from "react-router-dom";

//components
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const { id: productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [productId]);
  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} />
  ) : (
    <p>ürün yükleniyor</p>
  );
};

export default ProductDetailsPage;
