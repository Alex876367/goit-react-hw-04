import toast, { Toaster } from "react-hot-toast";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const heandleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.input.value.trim();

    if (query === "") {
      toast("Please, enter your query!");
      return;
    }
    onSearch(query);
    e.target.reset();
  };

  return (
    <>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={heandleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
