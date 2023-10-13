import React from "react";
import "./NavBar.scss";
import searchIconBlack from "../../../Images/navbar/Search.svg";
import Logo from "../../../Images/investorIcon/Logo.svg";
import NotificationIcon from "../../../Images/investorIcon/notification.svg";
import YellowNotificationIcon from "../../../Images/investorIcon/YellowNotificationIcon.svg";
import MessageIcon from "../../../Images/investorIcon/message.svg";
import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
import HambergerIcon from "../../../Images/Hamberger.svg";
import HambergerCrossIcon from "../../../Images/investorsidebar/FontX.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getSearchResultsAPI } from "../../../Service/user";
import { SearchIcon } from "../SvgIcons";
import NotificationsPopup from "../../Investor/InvestorNavbar/NotificationsPopup/NotificationsPopup";
import { useRef } from "react";

const NavBar = (props) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [url, setUrl] = useState("Home");
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [toggleNotificationPopup, setToggleNotificationPopup] = useState(false);
  const notificationPopup = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href.split("/");
    setUrl(url[url.length - 1]);
  }, [window.location.href]);

  const searchInputHandler = async ({ target }) => {
    try {
      setLoading(true);
      setSearchInput(target.value);
      const { data } = await getSearchResultsAPI(target.value);
      setSearchSuggestions(data);
    } catch (error) {
      console.error("Error getting search results : ", error);
    }
    setLoading(false);
  };

  const searchSubmitHandler = (e) => {
    if (e) e.preventDefault();
    if (!searchInput) return;
    navigate(`/investor/search?query=${searchInput}`);
  };

  const searchInputBlurHandler = () => {
    setTimeout(() => {
      if (mobileSearch) setMobileSearch(false);
      setInputOnFocus(false);
      setSearchSuggestions(false);
      setSearchInput("");
    }, 500);
  };
  const [mobileSearch, setMobileSearch] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationPopup.current &&
        !notificationPopup.current.contains(event.target)
      ) {
        setToggleNotificationPopup(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNotificationPopup]);

  return (
    <>
      <div className="container pt-1  mb-4 mb-xl-0">
        <div className="d-flex my-investor_navbar justify-content-between">
          <div className="d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img
                  src={Logo}
                  onClick={() => navigate("/investor/home")}
                  alt="the capital hub logo"
                />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={props.handleSidebarToggle}
              >
                {props.sidebarCollapsed ? (
                  <img src={HambergerIcon} alt="bar" />
                ) : (
                  <img src={HambergerCrossIcon} alt="bar" />
                )}
                <h1 className="ms-2">{url}</h1>
              </div>
            </div>
          </div>
          <div className="navbar_right_container">
            <div className="search_container position-relative">
              <form
                onSubmit={searchSubmitHandler}
                className="searchbar-container"
              >
                <input
                  type="text"
                  className="searchbar-input"
                  placeholder="Search"
                  style={{
                    width: `${inputOnFocus ? "400px" : "100%"}`,
                  }}
                  value={searchInput}
                  onChange={searchInputHandler}
                  onFocus={() => setInputOnFocus(true)}
                  onBlurCapture={searchInputBlurHandler}
                />
                <button
                  type="submit"
                  className="investor-searchbar-button d-flex align-items-center justify-content-center"
                >
                  {/* <img src={searchIcon} alt="search" /> */}
                  <SearchIcon color="black" width="24" height="24" />
                </button>
              </form>
              {inputOnFocus && searchSuggestions && !mobileSearch && (
                <div className="search_results rounded-5 border shadow-sm p-4 position-absolute bg-white">
                  {!loading ? (
                    searchSuggestions && (
                      <>
                        {!searchSuggestions?.company?.length &&
                          !searchSuggestions?.users?.length && (
                            <h6 className="h6 text-center w-100 text-secondary">
                              No Suggestions.
                            </h6>
                          )}
                        {!!searchSuggestions?.users?.length && (
                          <span className="">Users</span>
                        )}
                        {searchSuggestions?.users
                          ?.slice(0, 5)
                          .map(({ firstName, lastName, _id }) => (
                            <Link
                              key={_id}
                              className="single_result"
                              to={`/investor/user/${_id}`}
                            >
                              {firstName} {lastName}
                            </Link>
                          ))}
                        {searchSuggestions?.users?.length > 5 && (
                          <span className="w-100 d-flex justify-content-center">
                            <button
                              className="btn btn-xs btn-light"
                              onClick={() => {
                                searchSubmitHandler();
                                searchInputBlurHandler();
                              }}
                            >
                              Show more
                            </button>
                          </span>
                        )}
                        {!!searchSuggestions?.company?.length && (
                          <span className="mt-2">Companies</span>
                        )}
                        {searchSuggestions?.company
                          ?.slice(0, 5)
                          .map(({ company, oneLink }) => (
                            <span className="single_result">
                              <Link to={`/investor/company-profile/${oneLink}`}>{company}</Link>
                            </span>
                          ))}
                        {searchSuggestions?.company?.length > 5 && (
                          <span className="w-100 d-flex justify-content-center">
                            <button
                              className="btn btn-xs btn-light"
                              onClick={() => {
                                searchSubmitHandler();
                                searchInputBlurHandler();
                              }}
                            >
                              Show more
                            </button>
                          </span>
                        )}
                      </>
                    )
                  ) : (
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="icons-container">
              <div className="mobile-icon-wrapper position-relative ">
                <span
                  className="notification-icon"
                  onClick={() => setMobileSearch((prev) => !prev)}
                >
                  <img src={searchIconBlack} alt="search" />
                </span>

                {mobileSearch && (
                  <div className="search_container rounded shadow-sm border p-3 position-absolute d-flex flex-column">
                    <form
                      onSubmit={searchSubmitHandler}
                      className="searchbar-container "
                    >
                      <input
                        type="text"
                        className="searchbar-input"
                        placeholder="Search"
                        value={searchInput}
                        onChange={searchInputHandler}
                        onFocus={() => setInputOnFocus(true)}
                        onBlurCapture={(e) =>
                          setTimeout(() => {
                            searchInputBlurHandler(e);
                          }, 500)
                        }
                      />
                      <button
                        type="submit"
                        className="investor-searchbar-button d-flex align-items-center justify-content-center"
                      >
                        <img src={searchIcon} alt="search" />
                      </button>
                    </form>
                    {inputOnFocus && searchSuggestions && mobileSearch && (
                      <div className="search_results py-4 px-2">
                        {!loading ? (
                          searchSuggestions && (
                            <>
                              {!searchSuggestions?.company?.length &&
                                !searchSuggestions?.users?.length && (
                                  <h6 className="h6 text-center w-100 text-secondary">
                                    No Suggestions.
                                  </h6>
                                )}
                              {!!searchSuggestions?.users?.length && (
                                <span className="">Users</span>
                              )}
                              {searchSuggestions?.users
                                ?.slice(0, 5)
                                .map(({ firstName, lastName, _id }) => (
                                  <span
                                    key={_id}
                                    className="single_result"
                                    onClick={() => navigate(`/user/${_id}`)}
                                  >
                                    {firstName} {lastName}
                                  </span>
                                ))}
                              {searchSuggestions?.users?.length > 5 && (
                                <span className="w-100 d-flex justify-content-center">
                                  <button
                                    className="btn btn-xs btn-light"
                                    onClick={() => {
                                      searchSubmitHandler();
                                      searchInputBlurHandler();
                                    }}
                                  >
                                    Show more
                                  </button>
                                </span>
                              )}
                              {!!searchSuggestions?.company?.length && (
                                <span className="mt-2">Companies</span>
                              )}
                              {searchSuggestions?.company
                                ?.slice(0, 5)
                                .map(({ company }) => (
                                  <span className="single_result">
                                    <Link to={`#`}>{company}</Link>
                                  </span>
                                ))}
                              {searchSuggestions?.company?.length > 5 && (
                                <span className="w-100 d-flex justify-content-center">
                                  <button
                                    className="btn btn-xs btn-light"
                                    onClick={() => {
                                      searchSubmitHandler();
                                      searchInputBlurHandler();
                                    }}
                                  >
                                    Show more
                                  </button>
                                </span>
                              )}
                            </>
                          )
                        ) : (
                          <div class="d-flex justify-content-center">
                            <div
                              class="spinner-border text-secondary"
                              role="status"
                            >
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* <Link
                to="/notifications"
                className="rounded-circle notification-icon"
              > */}
              <div
                className={`notification-container icon-wrapper`}
                ref={notificationPopup}
              >
                {!toggleNotificationPopup ? (
                  <img
                    src={NotificationIcon}
                    alt="notification"
                    onClick={() => setToggleNotificationPopup((prev) => !prev)}
                  />
                ) : (
                  <img
                    src={YellowNotificationIcon}
                    alt="notification"
                    width={50}
                    onClick={() => setToggleNotificationPopup((prev) => !prev)}
                  />
                )}
                {toggleNotificationPopup && (
                  <NotificationsPopup
                    toggleVisibility={setToggleNotificationPopup}
                  />
                )}
              </div>
              {/* </Link> */}
              <Link to="/chats" className="rounded-circle message-icon">
                <div className="icon-wrapper">
                  <img src={MessageIcon} alt="message" />
                </div>
              </Link>
              {/* <div className="icon-wrapper d-none d-md-block"> */}
              <div className="icon-wrapper">
                <Link to={"/investor/manage-account"}>
                  {" "}
                  <img
                    className="profile-pic rounded-circle"
                    src={loggedInUser.profilePicture}
                    alt="Profile"
                  />
                </Link>
                {/* <span className="me">Me</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
