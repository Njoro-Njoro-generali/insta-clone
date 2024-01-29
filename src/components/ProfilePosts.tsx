import { useState } from "react";
import { AiOutlineTable } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";

const ProfilePosts = () => {
  const [tableClass, setTableClass] = useState("table-div-active");
  const [personClass, setPersonClass] = useState("person-div");
  const [postsClass, setPostsClass] = useState("p-posts");
  const [photosClass, setPhotosClass] = useState("p-photos-hide");

  const onClickTable = () => {
    setTableClass("table-div-active");
    setPostsClass("p-posts");
    setPersonClass("person-div");
    setPhotosClass("p-photos-hide");
  };

  const onClickPerson = () => {
    setTableClass("table-div");
    setPostsClass("p-posts-hide");
    setPersonClass("person-div-active");
    setPhotosClass("p-photos");
  };

  return (
    <div className="profile-posts">
      <div className="profile-post-bar">
        <div className={tableClass} onClick={onClickTable}>
          <AiOutlineTable className="p-table-icon" />
        </div>
        <div className={personClass} onClick={onClickPerson}>
          <BsPersonSquare className="p-person-icon" />
        </div>
      </div>
      <div className="profile-posts-body">
        <div className={postsClass}>
          <p>Capture monemts with your friends</p>
          <span>Create rour first post</span>
        </div>
        <div className={photosClass}>
          <div className="person-border">
            <BsPersonSquare className="p-person-icon" />
          </div>
          <p>Photos and Videos of you</p>
          <span>
            When people tag you in photos and videos, they will appear here
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
