import { useState, useEffect } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ImageModal from "../imageModal/ImageModal";

import fetchFotos from "../../api/apiServise";

import "./App.module.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = (value) => {
    setImages([]);
    setPage(1);
    setQuery(value);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleModal = (image) => {
    setCurrentImg(image);
  };

  useEffect(() => {
    setError(false);
    setLoading(true);

    if (query === "") {
      setLoading(false);
      return;
    }

    const getImages = async () => {
      try {
        const data = await fetchFotos(query, page);
        setImages((prev) => [...prev, ...data.results]);

        if (page === 1) {
          setTotalPage(data.total_pages);
        }
      } catch (error) {
        console.log(" error:", error);
        setError(true);
      }
    };

    getImages();

    setLoading(false);
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          page={page}
          total={totalPage}
          handleLoadMore={handleLoadMore}
          handleOpenModal={handleModal}
        />
      )}
      <PacmanLoader
        color="red"
        cssOverride={{
          margin: "30px auto",
          color: "red"
        }}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <ErrorMessage />}
      {currentImg && (
        <ImageModal image={currentImg} handleCloseModal={handleModal} />
      )}
    </>
  );
}

export default App;
