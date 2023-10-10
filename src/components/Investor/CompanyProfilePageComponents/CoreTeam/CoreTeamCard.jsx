import React from "react";
import "./CoreTeamCard.scss";

export default function CoreTeamCard({ image, name, designation }) {
  return (
    <div
      className="p-4 d-flex flex-column align-items-center gap-3 rounded-5 core_team_card"
      style={{ backgroundColor: "#EDEDED" }}
    >
      <img
        src={image}
        alt={"name"}
        style={{ width: "50px", height: "50px" }}
        className="rounded-circle"
        loading="lazy"
      />
      <h5 className="text-capitalize text-center text-break">{name}</h5>
      <p className="text-capitalize text-center text-break">{designation}</p>
    </div>
  );
}
