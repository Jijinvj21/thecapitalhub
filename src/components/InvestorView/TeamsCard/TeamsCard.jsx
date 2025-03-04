import "./TeamsCard.scss";

const TeamsCard = ({ image, name, designation }) => {
  return (
    <div className="TeamsCard">
      <img src={image} width={100} alt="" className="rounded-4" />
      <div className="details">
        <div className="about">
          <p>{name || `Name`}</p>
          <hr />
        </div>
        <div className="about">
          <p>{designation || `Designation`}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
