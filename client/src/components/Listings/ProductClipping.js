import styles from "./ProductClipping.module.css";

export default function ProductClipping({
  name,
  property_type,
  beds,
  number_of_reviews,
  price,
}) {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <p>{property_type}</p>
      <p>{beds}</p>
      <p>{number_of_reviews}</p>
      <p>{price["$numberDecimal"]}</p>
    </div>
  );
}
