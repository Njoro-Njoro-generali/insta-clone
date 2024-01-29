import ActivePerson from "./ActivePerson";

const Active = () => {
  return (
    <div className="active-people">
      <ActivePerson image="images/myself.jpg" name="Your Note" />
      <ActivePerson image="images/generali.jpg" name="_generali_98" />
      <ActivePerson image="images/fabrizio.jpg" name="fabriziorom" />
    </div>
  );
};

export default Active;
