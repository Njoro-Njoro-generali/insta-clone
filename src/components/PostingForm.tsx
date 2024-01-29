import { useState } from "react";

const PostingForm = ({ addThePost, goingBack }: any) => {
  /*poster={post.poster}
    postedImage={post.postedImage}
    postDescription={post.postDescription}
    imageMine={post.imageMine}
    postTime={post.postTime}
    postersImage={post.postersImage}*/
  const [poster, setPoster] = useState("");
  const [postedImageD, setPostedImage] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [imageMineD, setImageMine] = useState("");
  const [postTime, setPostTime] = useState("");
  const [postersImageD, setPostersImage] = useState("");
  const addingThatPost = () => {
    let postedImage = `images/${postedImageD}.jpg`;
    let postersImage = `images/${postersImageD}.jpg`;
    let imageMine = `images/${imageMineD}.jpg`;

    addThePost({
      poster,
      postedImage,
      postDescription,
      imageMine,
      postTime,
      postersImage,
    });

    setImageMine("");
    setPostDescription("");
    setPostTime("");
    setPostedImage("");
    setPoster("");
    setPostersImage("");
  };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !poster ||
      !postedImageD ||
      !postDescription ||
      !imageMineD ||
      !postTime ||
      !postersImageD
    ) {
      alert("please fill out all areas!!");
      return;
    }
    addingThatPost();

    goingBack();
  };

  return (
    <div className="posting-form">
      <p className="lets-add">Fill below to post</p>
      <form action="POST" className="new-post-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="whos-posting"
          placeholder="Who is posting: name"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
        <input
          type="text"
          className="whos-posted"
          placeholder="Who is posted: image"
          value={postedImageD}
          onChange={(e) => {
            setPostedImage(e.target.value);
          }}
        />
        <input
          type="text"
          className="the-post-description"
          placeholder="Whats the post about"
          value={postDescription}
          onChange={(e) => {
            setPostDescription(e.target.value);
          }}
        />
        <input
          type="text"
          className="the-post-time"
          placeholder="time of posting"
          value={postTime}
          onChange={(e) => {
            setPostTime(e.target.value);
          }}
        />
        <input
          type="text"
          className="my-posting-image"
          placeholder="Who is posting: image"
          value={postersImageD}
          onChange={(e) => {
            setPostersImage(e.target.value);
          }}
        />
        <input
          type="text"
          className="the-poster-image"
          placeholder="My image"
          value={imageMineD}
          onChange={(e) => {
            setImageMine(e.target.value);
          }}
        />
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default PostingForm;
