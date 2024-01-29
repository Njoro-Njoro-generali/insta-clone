import { RxCross1 } from "react-icons/rx";

const PostingTop = ({ goBack }: any) => {
  return (
    <div className="posting-top">
      <RxCross1 className="cross-icon" onClick={goBack} />
      <p className="new-post">New post</p>
    </div>
  );
};

export default PostingTop;
