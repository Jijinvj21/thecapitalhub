import React, { useState, useEffect } from "react";
import "./NavigatedCardViewer.scss";
import FeedPostCard from "../../Cards/FeedPost/FeedPostCard";
import {
  getSavedPostCollections,
  getSavedPostsAPI,
  getSavedPostsByCollection,
} from "../../../../Service/user";
import { useSelector } from "react-redux";
import SavedPostSmallCard from "../../InvestorGlobalCards/SavedPostSmallCard/SavedPostSmallCard";

const NavigatedCardViewer = () => {
  const [activeHeader, setActiveHeader] = useState("startup");
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [headerTabs, setHeaderTabs] = useState([]);
  const [collectionName, setCollectionName] = useState(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
    setCollectionName(header);
    setLoading(true); 
  };

  useEffect(() => {
    setLoading(true);
    getSavedPostCollections(loggedInUser._id)
      .then((res) => {
        const collectionHeaders = res.data.map((val) => val.name);
        setHeaderTabs(collectionHeaders);
        setActiveHeader(collectionHeaders[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [loggedInUser]);

  useEffect(() => {
    if (headerTabs.length > 0) {
      setCollectionName(headerTabs[0]);
    }
  }, [headerTabs]);

  useEffect(() => {
    if (collectionName) {
      setLoading(true); 
      getSavedPostsByCollection(loggedInUser._id, collectionName)
        .then((data) => {
          console.log(data);
          setAllPosts(data.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.log(error);
          setAllPosts([]);
          setLoading(false); 
        });
    }
  }, [loggedInUser, collectionName, activeHeader]);

  return (
    <div className="navigated_box_container">
      <div className="navigated-card-viewer">
        <div className="navigation-header border-bottom">
          {headerTabs.map((header) => (
            <div
              key={header}
              className={`nav-item ${activeHeader === header ? "active" : ""}`}
              onClick={() => handleHeaderClick(header)}
            >
              {header}
            </div>
          ))}
        </div>
        <div className="row row-cols-1">
          {console.log("allpost", allPosts)}
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : allPosts && allPosts.length > 0 ? (
            allPosts.map(
              (
                {
                  description,
                  user: { firstName, lastName, profilePicture, designation },
                  video,
                  image,
                  createdAt,
                },
                index
              ) => (
                <SavedPostSmallCard
                  activeHeader={activeHeader}
                  key={index}
                  description={description}
                  profilePicture={profilePicture}
                  firstName={firstName}
                  lastName={lastName}
                  video={video}
                  image={image}
                  createdAt={createdAt}
                  designation={designation}
                />
              )
            )
          ) : (
            <p className="container p-5 text-center my-5 bg-white mx-auto">
              {`No posts saved for ${activeHeader}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigatedCardViewer;
