import Story from "./Story";
import { FaPlusCircle } from "react-icons/fa";

const Stories = () => {
  return (
    <div className="stories-row">
      <FaPlusCircle className="icon-plus" />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
