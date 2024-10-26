/* eslint-disable react/prop-types */
import Star from "../assets/assets/star.svg";
const Ratting = ({ value }) => {
  const stars = Array(value).fill(0);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={Star} width="14" height="14" alt="" />
      ))}
      {/* <img src={Star} width="14" height="14" alt="" /> */}
    </>
  );
};

export default Ratting;
