const Description = ({ poster, description }: any) => {
  return (
    <div className="post-description">
      <p className="likes">154,678 likes</p>
      <p className="description">{`${poster}...${description}`}</p>
      <p className="comments">View all 1,896 comments</p>
    </div>
  );
};

export default Description;
