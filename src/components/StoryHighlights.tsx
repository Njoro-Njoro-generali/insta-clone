import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const StoryHighlights = () => {
  const [upAngle, setUpAngle] = useState("arrow-up-high-hide");
  const [downAngle, setDownAngle] = useState("arrow-down-high");
  const [bodyClass, setBodyClass] = useState("the-highlights-body-hide");
  const onClick = () => {
    if (upAngle == "arrow-up-high-hide") {
      setDownAngle("arrow-down-high-hide");
      setUpAngle("arrow-up-high");
      setBodyClass("the-highlights-body");
    } else {
      setDownAngle("arrow-down-high");
      setUpAngle("arrow-up-high-hide");
      setBodyClass("the-highlights-body-hide");
    }
  };

  return (
    <div className="story-highlights">
      <div className="highlights-bar">
        <p>Story highlights</p>
        <FaAngleDown className={downAngle} onClick={onClick} />
        <FaAngleUp className={upAngle} onClick={onClick} />
      </div>
      <div className={bodyClass}>
        <p>Keep your favourite stories on your profile</p>
        <div className="the-highlights">
          <div className="new-highlight">
            {" "}
            <AiOutlinePlus />
          </div>
          <div className="each-highlight"></div>
          <div className="each-highlight"></div>
          <div className="each-highlight"></div>
          <div className="each-highlight"></div>
        </div>
      </div>
    </div>
  );
};

export default StoryHighlights;
