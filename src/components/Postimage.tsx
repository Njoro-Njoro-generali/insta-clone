const Postimage = ({ imagePosted, changeLike }: any) => {
  return (
    <div
      className="post-image"
      style={{
        background: `url(${imagePosted})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onDoubleClick={changeLike}
    ></div>
  );
};

export default Postimage;
