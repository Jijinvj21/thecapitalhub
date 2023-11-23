import React, { useEffect, useState } from "react";
import "./home.scss";
import profilePic from "../../../Images/investorIcon/profilePic.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
// import InvestorRecommendationCard from "../../../components/NewInvestor/InvestorRecommendationCard/InvestorRecommendationCard";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import InvestorCreatePostPopUp from "../../../components/NewInvestor/InvestorCreatePostPopUp/InvestorCreatePostPopUp";
import InvestorSmallProfilecard from "../../../components/NewInvestor/InvestorSmallProfilecard/InvestorSmallProfilecard";
import InvestorFeedPostCard from "../../../components/NewInvestor/InvesterFeedPostCard/InvestorFeedPostCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import {
  getAllPostsAPI,
  getInvestorById,
  getSavedPostCollections,
  postUserPost,
} from "../../../Service/user";
import { useLocation } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import {
  setPageTitle,
  selectInvestorCreatePostModal,
} from "../../../Store/features/design/designSlice";
import OnBoardUser from "../../../components/OnBoardUser/OnBoardUser";
import { investorOnboardingSteps } from "../../../components/OnBoardUser/steps/investor";
import {
  selectIsInvestor,
  selectUserInvestor,
  setUserCompany,
} from "../../../Store/features/user/userSlice";

function Home() {
  const isInvestor = useSelector(selectIsInvestor);
  const userInvestor = useSelector(selectUserInvestor);

  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const [loadingFeed, setLoadingFeed] = useState(false);
  const [getSavedPostData, setgetSavedPostData] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isInvestorCreatePostModalOpen = useSelector(
    selectInvestorCreatePostModal
  );

  useEffect(() => {
    setPopupOpen(isInvestorCreatePostModalOpen);
  }, [isInvestorCreatePostModalOpen]);

  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };

  const appendDataToAllPosts = (data) => {
    setAllPosts([data, ...allPosts]);
  };

  const deletePostFilterData = (postId) => {
    const filteredPosts = allPosts.filter((post) => post._id !== postId);
    setAllPosts(filteredPosts);
  };

  useEffect(() => {
    dispatch(setPageTitle("Home"));
    window.title = "Home | Investors - The Capital Hub";

    // Fetch company data
    if (isInvestor) {
      getInvestorById(userInvestor)
        .then(({ data }) => {
          dispatch(setUserCompany(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, isInvestor, userInvestor]);

  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const fetchMorePosts = () => {
    getAllPostsAPI(page)
      .then(({ data }) => {
        console.log(data);
        if (data?.length === 0) {
        } else {
          setAllPosts([...allPosts, ...data]);
          setPage(page + 1);
        }
      })
      .catch((err) => {
        setHasMore(false);
        console.log(err);
      })
      .finally(() => setLoadingFeed(false));
  };

  useEffect(() => {
    getSavedPostCollections(loggedInUser._id)
      .then((data) => {
        setgetSavedPostData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    fetchMorePosts();
  }, [newPost]);

  console.log(allPosts?.[0]);

  // Repost
  const [repostLoading, setRepostLoading] = useState({
    instant: false,
    withThoughts: false,
  });
  const [respostingPostId, setRepostingPostId] = useState("");

  const repostInstantly = (resharedPostId) => {
    setRepostLoading({ ...repostLoading, instant: true });
    postUserPost({ resharedPostId })
      .then(() => fetchMorePosts())
      .catch((err) => console.log(err))
      .finally(() => setRepostLoading({ ...repostLoading, instant: false }));
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showPopup = queryParams.get("showPopup") === "true";

  useEffect(() => {
    if (showPopup) {
      setPopupOpen(true);
      const urlWithoutQuery = location.pathname;
      window.history.replaceState({}, "", urlWithoutQuery);
    }
  }, [location]);

  return (
    <MaxWidthWrapper>
      <div className="investor_feed_container">
        <div className="main_content">
          {/* <InvestorSmallProfilecard text={"Home"} /> */}
          <div className="posts_col">
            <div className="box start_post_container border">
              <img
                src={loggedInUser.profilePicture}
                alt="Profile"
                className="rounded-circle"
                style={{ objectFit: "cover" }}
              />
              <div className="w-100 me-4" onClick={openPopup}>
                <input
                  className="px-3"
                  type="text"
                  placeholder="Write a post..."
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>
            {/* {!loadingFeed ? ( */}
            <InfiniteScroll
              dataLength={allPosts.length}
              next={fetchMorePosts}
              hasMore={hasMore}
              loader={
                <p className="container p-5 text-center my-5 bg-white rounded-4 shadow ">
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              }
            >
              {allPosts?.map(
                ({
                  description,
                  user: {
                    firstName,
                    lastName,
                    designation,
                    profilePicture,
                    _id: userId,
                    startUp,
                    investor,
                  },
                  video,
                  image,
                  documentUrl,
                  documentName,
                  createdAt,
                  likes,
                  _id,
                  resharedPostId,
                }) => (
                  <InvestorFeedPostCard
                    key={Math.random()}
                    userId={userId}
                    postId={_id}
                    designation={designation}
                    profilePicture={profilePicture}
                    description={description}
                    startUpCompanyName={startUp}
                    investorCompanyName={investor}
                    firstName={firstName}
                    lastName={lastName}
                    video={video}
                    image={image}
                    documentName={documentName}
                    documentUrl={documentUrl}
                    createdAt={createdAt}
                    likes={likes}
                    fetchAllPosts={fetchMorePosts}
                    response={getSavedPostData}
                    repostWithToughts={(resharedPostId) => {
                      setRepostingPostId(resharedPostId);
                      openPopup();
                    }}
                    repostInstantly={repostInstantly}
                    repostLoading={repostLoading}
                    resharedPostId={resharedPostId}
                    deletePostFilterData={deletePostFilterData}
                  />
                )
              )}
            </InfiniteScroll>
            {/* ) : (
                <p className="container p-5 text-center my-5 bg-white rounded-4 shadow ">
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              )}*/}
          </div>
        </div>
        <div className="right_content d-none d-xl-block">
          <InvestorRightProfileCard />
          <RecommendationCard isInvestor={true} />
          <NewsCorner />
        </div>
      </div>
      {popupOpen && (
        <InvestorCreatePostPopUp
          setPopupOpen={setPopupOpen}
          popupOpen
          setNewPost={setNewPost}
          respostingPostId={respostingPostId}
          appendDataToAllPosts={appendDataToAllPosts}
        />
      )}
      <OnBoardUser steps={investorOnboardingSteps.homePage} />
    </MaxWidthWrapper>
  );
}

export default Home;
