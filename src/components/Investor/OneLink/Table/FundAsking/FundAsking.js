import React from "react";
import "./FundAsking.scss";
import PramodSq from "../../../../../Images/PramodSqare.png";
import { useSelector } from "react-redux";
import { postStartUpData } from "../../../../../Service/user";

const FundAsking = ({ company, page }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const handleUpdate = (field, event) => {
    const updatedValue = event.target.value;
    if(!updatedValue) return;
    postStartUpData({
      [field]: updatedValue,
      founderId: loggedInUser._id,
    })
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row fund_asking_container">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Funding Ask (in lakhs)</h5>
              <img src={PramodSq} alt="image" />
              <hr />
              <div className="amount_text">
                {page === "oneViewEdit" ? (
                  <input 
                  placeholder={company?.fundingAsk} 
                  onBlur={(e) => handleUpdate("fundingAsk", e)}
                  />
                ) : (
                  <h6>{company?.fundingAsk}</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundAsking;
