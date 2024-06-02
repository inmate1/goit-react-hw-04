import { useState, useEffect, useId } from "react";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./components/apiService/photos-api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchPage, setSearchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    async function fetchData() {
      setIsLoading(true);
      try {
        const { total, total_pages, results } = await fetchImages(
          searchQuery,
          searchPage
        );
        if (total === 0) {
          toast.error("There are no images matching your request!");
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setShowBtn(total_pages > 0 && total_pages !== searchPage);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery, searchPage]);

  useEffect(() => {
    if (!isLoading && images.length > 0 && searchPage > 1) {
      const viewportHeight = window.innerHeight;
      window.scrollBy({
        top: viewportHeight / 2,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isLoading, images, searchPage]);

  const handleSearchBar = (searchValue) => {
    setSearchPage(1);
    setImages([]);
    setError(null);
    setSearchQuery(searchValue);
  };

  const handleClickBtn = () => {
    setSearchPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchBar} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onImageClick={handleImageClick}
        />
      )}
      {isLoading && <Loader loading={isLoading} />}
      {showBtn && <LoadMoreBtn onClick={handleClickBtn} />}
      <ImageModal
        imageSrc={selectedImage}
        onClose={closeModal}
        isOpen={isOpenModal}
      />
    </>
  );
};

export default App;
