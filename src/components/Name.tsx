import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

const Name = ({ text, whoPosting }: any) => {
  return (
    <div className="post-name">
      <div
        className="poster-image"
        style={{
          background: `url(${whoPosting})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p className="poster-name">
        {text}
        <FaCheckCircle className="verified" />
      </p>
      <FaEllipsisV className="ellipsis" />
    </div>
  );
};

export default Name;
