import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, balance, updateBalance, updateReceipt }) => {
  const [quantity, setQuantity] = useState(0);

  const buyProduct = () => {
    if (balance >= product.price) {
      updateBalance(-product.price);
      setQuantity(quantity + 1);
      updateReceipt(product, 1);
    }
  };

  const sellProduct = () => {
    if (quantity > 0) {
      updateBalance(product.price);
      setQuantity(quantity - 1);
      updateReceipt(product, -1);
    }
  };

  return (
    <div className={styles.productCard}>
      <span className={styles.productImage}>{product.image}</span>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toLocaleString()}</p>
      <div>
        <button
          onClick={sellProduct}
          disabled={quantity === 0}
          className={`${styles.button} ${styles.sellButton}`}
        >
          Sell
        </button>
        <span>{quantity}</span>
        <button
          onClick={buyProduct}
          disabled={balance < product.price}
          className={`${styles.button} ${styles.buyButton}`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
