import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}
