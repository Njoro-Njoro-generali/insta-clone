import {
  FaRegHeart,
  FaFacebookMessenger,
  FaAngleDown,
  FaRegPlusSquare,
} from "react-icons/fa";

const Insta = ({ togglePages, addHome }: any) => {
  return (
    <div className="insta-line">
      <p className="instagram">Instagram</p>
      <FaAngleDown className="down" />
      <FaRegPlusSquare className="insta-plus" onClick={addHome} />
      <FaRegHeart className="insta-heart" />
      <FaFacebookMessenger className="insta-messanger" onClick={togglePages} />
    </div>
  );
};

export default Insta;
