import React, { useState } from "react";
import "./NewPasswordPopUp.scss";
import { postResetPaswordLink } from "../../../Service/user";

const NewPasswordPopUp = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendResetLink = async () => {
    try {
      await postResetPaswordLink(email);
      console.log("Sending reset link to:", email);
      onClose();
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  return (
    <div className="reset_password_popup">
      <div className="popup">
        <div className="popup-content">
          <div>
            <h4 className="mb-5">
              Enter your email and we'll send you a link to reset Password
            </h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="ok_button" onClick={handleSendResetLink}>
              Send Link
            </button>
          </div>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPopUp;
