import { MdOutlinePersonAdd } from "react-icons/md";

const ProfileButtons = () => {
  return (
    <div className="profile-buttons">
      <button className="profile-btn">Edit profile</button>
      <button className="profile-btn"> Share profile</button>
      <button className="profile-button">
        <MdOutlinePersonAdd />
      </button>
    </div>
  );
};

export default ProfileButtons;
