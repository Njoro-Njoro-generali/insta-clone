import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { CgClapperBoard } from "react-icons/cg";
import { BsPlayFill } from "react-icons/bs";

const Bottom = ({ mySelf, togglePages, goToProfile, homeDirect }: any) => {
  return (
    <div className="bottom-bar">
      <GoHomeFill className="home-icon" onClick={homeDirect} />
      <CiSearch className="search-icon" />
      <CiSquarePlus className="add-icon" onClick={togglePages} />
      <CgClapperBoard className="reel-icon" />
      <BsPlayFill className="play-icon" />
      <div
        className="bottom-image"
        onClick={goToProfile}
        style={{
          background: `url(${mySelf})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Bottom;
