import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { FiSend, FiBookmark } from "react-icons/fi";
import { PiHeartStraightFill } from "react-icons/pi";

const Postactions = ({ liked, unLiked, changeLike }: any) => {
  return (
    <div className="post-actions">
      <div className="likediv">
        <FaRegHeart className={unLiked} onClick={changeLike} />
      </div>
      <PiHeartStraightFill className={liked} onClick={changeLike} />
      <FaRegComment className="comment-icon" />
      <FiSend className="send-icon" />
      <FiBookmark className="bookmark-icon" />
    </div>
  );
};

export default Postactions;
