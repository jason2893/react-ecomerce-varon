import { useEffect } from "react";
import ProductItem from "./ProductItem";
import '../styles/ProductList.css';

const ProductList = ({ addToCart, cartItems, products }) => {
  return (
    <div className="producto-list">
      {products.map((product) => {
        const isInCart = cartItems.some((item) => item.id === product.id);
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
