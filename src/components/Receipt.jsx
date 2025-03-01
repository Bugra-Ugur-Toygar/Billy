import styles from "../styles/Receipt.module.css";

const Receipt = ({ receipt }) => {
  const total = receipt.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.receipt}>
      <h2>Your Receipt</h2>
      {receipt.map((item) => (
        <div key={item.id} className={styles.receiptItem}>
          <span>
            {item.name} x{item.quantity}
          </span>
          <span>${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      ))}
      <h3 className={styles.total}>TOTAL: ${total.toLocaleString()}</h3>
    </div>
  );
};

export default Receipt;
