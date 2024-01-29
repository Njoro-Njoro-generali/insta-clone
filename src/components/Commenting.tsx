const Commenting = ({ myImage, timePosted }: any) => {
  return (
    <div className="commenting">
      <div
        className="my-image"
        style={{
          background: `url(${myImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <p className="time-ago">{timePosted}</p>
      <p className="comments">Add a comment...</p>
    </div>
  );
};

export default Commenting;
