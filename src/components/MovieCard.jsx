/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImageUrl } from "../utils/utils";
import Ratting from "./Ratting";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
const MovieCard = ({ movieData }) => {
  const [showModal, setShowModal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);
  const handleAddToCart = (e, newMovieData) => {
    e.stopPropagation();
    const isExist = cartData.find((cart) => cart.id === newMovieData.id);
    if (isExist) {
      alert("movie is already added!!");
    } else {
      setCartData((prev) => [...prev, newMovieData]);
    }
  };

  console.log(cartData, "this is the cart data which is shown");

  return (
    <>
      {showModal && (
        <MovieDetailsModal movieData={movieData} setShowModal={setShowModal} handleAddToCart={handleAddToCart} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => setShowModal(true)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movieData?.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movieData?.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movieData?.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratting value={movieData?.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCart(e, movieData)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movieData?.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
