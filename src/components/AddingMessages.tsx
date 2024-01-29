import { FaArrowLeft } from "react-icons/fa";

const AddingMessages = ({ backPages }: any) => {
  return (
    <div className="message-adding">
      <div className="add-message-bar">
        <FaArrowLeft className="arrow-icon" onClick={backPages} />
        <p className="my-name">New message</p>
      </div>
    </div>
  );
};

export default AddingMessages;
