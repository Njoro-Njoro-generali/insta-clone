const ActivePerson = ({ image, name }: any) => {
  return (
    <div className="active-person">
      <div
        className="person-image"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p className="person-name">{name}</p>
    </div>
  );
};

export default ActivePerson;
