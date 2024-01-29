import { CiSquarePlus } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
const ProfileTop = ({ addingAPost }: any) => {
  return (
    <div className="profile-top">
      <p className="my-profile-name">
        {" "}
        cha.rle.s <FaAngleDown className="profilename-arrow" />
      </p>
      <CiSquarePlus className="profile-plus" onClick={addingAPost} />
      <LuMenu className="profile-hum" />
    </div>
  );
};

export default ProfileTop;
