import { useState } from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import Receipt from "../components/Receipt";
import styles from "../styles/App.module.css";

const Home = () => {
  const [balance, setBalance] = useState(100000000000);
  const [receipt, setReceipt] = useState([]);

  const updateBalance = (amount) => {
    setBalance((prev) => prev + amount);
  };

  const updateReceipt = (product, quantity) => {
    setReceipt((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  return (
    <div className={styles.container}>
      <h1>Bill Gates' Money: ${balance.toLocaleString()}</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            balance={balance}
            updateBalance={updateBalance}
            updateReceipt={updateReceipt}
          />
        ))}
      </div>
      <Receipt receipt={receipt} />
    </div>
  );
};

export default Home;
