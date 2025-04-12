import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ heandleClick }) {
  return (
    <button className={styles.button} onClick={heandleClick}>
      Load more
    </button>
  );
}
