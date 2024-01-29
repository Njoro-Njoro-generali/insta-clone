import { FaAngleDown, FaArrowLeft } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const MyBar = ({ backPages, goToAdd }: any) => {
  return (
    <div className="messages-bar">
      <FaArrowLeft className="arrow-icon" onClick={backPages} />
      <p className="my-name">
        {" "}
        cha.rle.s <FaAngleDown className="name-arrow" />
      </p>
      <BiEdit className="edit-icon" onClick={goToAdd} />
    </div>
  );
};

export default MyBar;
