import React from "react";
import profilePic from "../../../../Images/investorIcon/profilePic.svg";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
// import RoundLogo from "../../../../Images/RoundLogo.png";
// import SavedIcon from "../../../../Images/SavedIcon.svg";
// import FireIcon from "../../../../Images/Fire.png";
import HomeIcon from "../../../../Images/HomeIcon.svg";
import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./feedPostCard.scss";
import shareIMG from "../../../../Images/share.png";
import TimeAgo from "timeago-react";
import AddUserIcon from "../../../../Images/investorIcon/Add-User.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const FeedPostCard = ({
  description,
  firstName,
  lastName,
  video,
  image,
  createdAt,
  profilePicture,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const savePostHandler = async (postId) => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="row feedpostcard_main_container mb-2">
        <div className="col-12">
          <div className="box feedpostcard_container mt-2">
            <div className="  feed_header_container">
              <div className="feedpostcard_content">
                <img
                  src={
                    profilePicture ||
                    "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                  }
                  width={50}
                  className="rounded-circle"
                  alt="logo"
                />
                <div className="feedpostcart_text_header my-1">
                  <span
                    style={{ fontSize: "18px", fontWeight: 600, color: "#000" }}
                  >
                    {firstName + " " + lastName}
                  </span>
                  <span className="d-flex flex-column flex-md-row">
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={HomeIcon} alt="logo" />
                      Corporate
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={locationIcon} alt="logo" />
                      Bangalore, India
                    </span>
                  </span>
                  <span
                    style={{ fontSize: "12px", fontWeight: 500, color: "#000" }}
                  >
                    <TimeAgo datetime={createdAt} locale="" />
                  </span>
                </div>
              </div>
              <div className="three_dot">
                <img src={ThreeODotIcon} alt="dot" />
              </div>
            </div>
            <hr />
            <div className="para_container w-100">
              <div className="para_container_text w-100">
                <p style={{ fontSize: "15px" }}>{description}</p>
                {image && (
                  <span className="d-flex">
                    <img
                      className="mx-auto"
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                      width={"100%"}
                      src={image}
                      alt="post-image"
                    />
                  </span>
                )}
                {video && (
                  <span className="d-flex">
                    <video
                      className="mx-auto"
                      width={"100%"}
                      style={{ maxWidth: "500px" }}
                      controls
                    >
                      <source alt="post-video" src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </span>
                )}
              </div>
            </div>
            <hr />
            <div className="row feedpostcard_footer mb-2">
              <div className="col-8">
                <div className="feedpostcard_footer_like_comment">
                  <span className="ms-1 me-2">👍</span>
                  <span className="me-1">💬</span>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center gap-3 justify-content-end">
                <img src={shareIMG} width={16} />
                <span>📑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPostCard;
