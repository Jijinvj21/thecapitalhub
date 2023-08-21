import React from "react";
import "./OneLink.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import ShareLink from "./ShareLink/ShareLink";
import IntroductoryMessage from "./IntroductoryMessage/IntroductoryMessage";
import OnePagePreview from "./OnePagePreview/OnePagePreview";
import ThreeDotsImage from "../../../Images/whiteTheeeDots.svg";
import FolderImage from "../../../Images/Folder.svg";
import VideoImage from "../../../Images/Video.svg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getStartupByFounderId } from "../../../Service/user";

const OneLink = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  console.log(loggedInUser);
  const userId = loggedInUser._id;
  const [company, setCompany] = useState([]);
  useEffect(() => {
    getStartupByFounderId(userId)
      .then(({ data }) => {
        setCompany(data);
      })
      .catch(() => setCompany([]));
  }, [userId]);
  return (
    <div className="container-fluid onelink_container">
      <div className="row mt-4 mt-xxl-2">
        <div className="col">
          <SmallProfileCard text={"One Link"} />
          <ShareLink OneLink={company?.oneLink} />
          <IntroductoryMessage
            title={"Introductory message"}
            image={{
              threeDots: ThreeDotsImage,
              folder: FolderImage,
              video: VideoImage,
            }}
            para={company.introductoryMessage}
            input={true}
          />
        </div>
        <div className="col   d-none d-xl-block">
          <div className="content-30">
            <div className="row">
              <RightProfileCard />
              <RecommendationCard />
              {/* <NewsCorner /> */}
            </div>
          </div>
        </div>
        <OnePagePreview show={true} />
      </div>
    </div>
  );
};

export default OneLink;
