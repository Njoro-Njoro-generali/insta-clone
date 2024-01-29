import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";

const Phonehead = () => {
  return (
    <div className="phone-head">
      <p className="time">11:47</p>
      <div className="camera-space"></div>
      <FaWifi className="wifi-icon" />
      <FaBatteryFull className="battery-icon" />
    </div>
  );
};

export default Phonehead;
