import { FiCamera } from "react-icons/fi";

const TheMessage = ({ sender, senderName, lastMessage }: any) => {
  return (
    <div className="a-message">
      <div
        className="sender-profile"
        style={{
          background: `url(${sender})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="message-content">
        <p className="sender-name">{senderName}</p>
        <p className="last-message">{lastMessage}</p>
      </div>
      <FiCamera className="camera-icon" />
    </div>
  );
};

export default TheMessage;
