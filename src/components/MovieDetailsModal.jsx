/* eslint-disable react/prop-types */
import { useContext } from "react";
import { getImageUrl } from "../utils/utils";
import { ThemeContext } from "../context";

const MovieDetailsModal = ({ setShowModal, movieData, handleAddToCart }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
            <img
              className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
              src={getImageUrl(movieData?.cover)}
              alt=""
            />
            <div className="p-5 lg:p-11">
              <div className="">
                <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                  {movieData?.title}
                </h2>
                <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                  {movieData?.genre}
                </span>
                <div></div>
              </div>
              <p className="text-sm lg:text-base mb-8 lg:mb-16">
                {movieData?.description}
              </p>
              <div className="grid lg:grid-cols-2 gap-2">
                <button
                  onClick={(e) => handleAddToCart(e, movieData)}
                  className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>${movieData?.price} | Add to Cart</span>
                </button>
                <button
                  className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F]  font-semibold text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsModal;
