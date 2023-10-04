import React from "react";
import LocationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import EmailIcon from "../../../../Images/investorIcon/message.svg";
import TweeterIcon from "../../../../Images/investorIcon/Tweeter.svg";
import IntagramIcon from "../../../../Images/investorIcon/Instagram.svg";
import LinkedinIcon from "../../../../Images/investorIcon/Linkedin.svg";
import WebIcon from "../../../../Images/investorIcon/WebIcon.svg";
import LogoX from "../../../../Images/investorIcon/LogoX.png";
import "./companyDetails.scss";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import {
  getStartupByFounderId,
  postStartUpData,
} from "../../../../Service/user";
import { useState, useEffect } from "react";

const CompanyDetailsCard = ({ userDetails, page, className }) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState("");
  const [onePager, setOnePager] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  });
  const [locationData, setLocationData] = useState("");

  // Fetch user details
  useEffect(() => {
    getStartupByFounderId(userDetails._id)
      .then(({ data }) => {
        setOnePager(data);
        setDescriptionContent(data.description);
        setSocialLinks(data.socialLinks);
        setLocationData(data.location);
      })
      .catch(() => setOnePager([]));
  }, [userDetails]);

  // Submit Changes
  const submitDescriptionHandler = async () => {
    const updatedData = {
      founderId: userDetails._id,
      description: descriptionContent,
      socialLinks,
      location: locationData,
    };
    await postStartUpData(updatedData);
    setIsDescriptionEditable(!isDescriptionEditable);
  };

  return (
    <>
      <div className={`${className} row company_details_container`}>
        <div className=" company_details box">
          <div className="row">
            <div className="col-12">
              <div className="image_name_section mt-2 ">
                <span className="company_details_logo_container">
                  <img src={onePager.logo || LogoX} alt="profileimage" />
                </span>
                <div className="left_profile_text flex_content">
                  <h2 className="typography m-2">
                    {onePager.company || `The Capital Hub`}
                  </h2>
                  {/* <span className="small_typo m-2">
                    {onePager.description}
                  </span> */}
                  <span className="small_typo location_icon d-flex flex-column flex-lg-row gap-2">
                    <span>
                      <img src={LocationIcon} alt="location" />
                      {onePager.location}
                    </span>
                    <span>
                      <img src={EmailIcon} alt="email icon" />
                      {userDetails?.email}
                    </span>
                  </span>
                  <div className="small_typo social_icon mt-3">
                    <a
                      href={socialLinks?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={WebIcon} alt="Website" />
                    </a>
                    <a
                      href={socialLinks?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                    <a
                      href={socialLinks?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={TweeterIcon} alt="Twitter" />
                    </a>
                    <a
                      href={socialLinks?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={IntagramIcon} alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="company_details mt-4">
              {page === "edit" ? (
                <>
                  <span className="ms-auto">
                    <div className="edit-container mb-4">
                      <button
                        className="edit-btn"
                        onClick={() =>
                          setIsDescriptionEditable(!isDescriptionEditable)
                        }
                      >
                        {isDescriptionEditable ? "Cancel" : "Edit"}
                        <CiEdit />
                      </button>
                      {isDescriptionEditable && (
                        <button
                          className="edit-btn ms-2"
                          onClick={() => submitDescriptionHandler()}
                        >
                          Save <CiSaveUp2 />
                        </button>
                      )}
                    </div>
                  </span>
                  <p className="para_text">
                    {/* As the Founder at The Capital HUB, my vision is all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture. */}
                    {/* {onePager.description} */}
                    {isDescriptionEditable ? (
                      <>
                        {/* Edit description */}
                        <div className="input-group my-2">
                          <label htmlFor="bio" className="align-self-start">
                            Description:
                          </label>
                          <textarea
                            className="description flex-grow-1 rounded-2"
                            value={descriptionContent}
                            id="bio"
                            name="bio"
                            rows={6}
                            onChange={(e) =>
                              setDescriptionContent(e.target.value)
                            }
                          />
                        </div>

                        {/* Edit Location */}
                        <div className="input-group mb-2">
                          <label htmlFor="location">Location:</label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={locationData}
                            onChange={(e) => setLocationData(e.target.value)}
                            className="rounded-2"
                          />
                        </div>

                        {/* Edit social links */}
                        <div className="social-inputs">
                          <div className="input-group">
                            <label>Website:</label>
                            <input
                              type="text"
                              value={socialLinks?.website}
                              onChange={(e) =>
                                setSocialLinks({
                                  ...socialLinks,
                                  website: e.target.value,
                                })
                              }
                              className="rounded-2"
                            />
                          </div>
                          <div className="input-group">
                            <label>LinkedIn:</label>
                            <input
                              type="text"
                              value={socialLinks?.linkedin}
                              onChange={(e) =>
                                setSocialLinks({
                                  ...socialLinks,
                                  linkedin: e.target.value,
                                })
                              }
                              className="rounded-2"
                            />
                          </div>
                          <div className="input-group">
                            <label>Twitter:</label>
                            <input
                              type="text"
                              value={socialLinks?.twitter}
                              onChange={(e) =>
                                setSocialLinks({
                                  ...socialLinks,
                                  twitter: e.target.value,
                                })
                              }
                              className="rounded-2"
                            />
                          </div>
                          <div className="input-group">
                            <label>Instagram:</label>
                            <input
                              type="text"
                              value={socialLinks?.instagram}
                              onChange={(e) =>
                                setSocialLinks({
                                  ...socialLinks,
                                  instagram: e.target.value,
                                })
                              }
                              className="rounded-2"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="small_typo">{descriptionContent}</p>
                    )}
                  </p>
                </>
              ) : (
                <p className="small_typo">{descriptionContent}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailsCard;
