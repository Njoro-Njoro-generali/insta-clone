import { useState } from "react";
import Name from "./Name";
import Postimage from "./Postimage";
import Postactions from "./Postactions";
import Description from "./Description";
import Commenting from "./Commenting";

const Post = ({
  poster,
  postedImage,
  postDescription,
  imageMine,
  postTime,
  postersImage,
}: any) => {
  const [liked, setLiked] = useState("liked-hide");
  const [unLiked, setUnliked] = useState("unliked");
  const likePost = () => {
    if (unLiked == "unliked") {
      setUnliked("unliked-hide");
      setLiked("liked");
    } else {
      setLiked("liked-hide");
      setUnliked("unliked");
    }
  };
  return (
    <div className="post">
      <Name text={poster} whoPosting={postersImage} />
      <Postimage imagePosted={postedImage} changeLike={likePost} />
      <Postactions liked={liked} unLiked={unLiked} changeLike={likePost} />
      <Description description={postDescription} poster={poster} />
      <Commenting myImage={imageMine} timePosted={postTime} />
    </div>
  );
};

export default Post;
