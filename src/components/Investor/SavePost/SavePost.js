import "./SavedPost.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import NavigatedCardViewer from "./NavigatedCardViewer/NavigatedCardViewer";
import { useEffect } from "react";

const SavePost = () => {
  useEffect(() => {
    document.title = "Saved Posts | The Capital Hub";
  }, []);

  return (
    <div className="container ">
      <div className="savedpost_main_container">
        {/* Main Content */}
        <div className="main__content">
          <SmallProfileCard text={"Saved Post"} />

          <div className="box_container">
            <h5>Find all your saved posts here</h5>
          </div>

          {/* nav container section */}
          <div className="nav_container">
            <NavigatedCardViewer />
          </div>
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RightProfileCard />
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
    </div>
  );
};

export default SavePost;
