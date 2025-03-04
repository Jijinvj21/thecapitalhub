import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import ArrowLeft from "../../../Images/investorsidebar/ArrowLeft.svg";
import ArrowRight from "../../../Images/investorsidebar/ArrowRight.svg";
import Setting from "../../../Images/investorsidebar/Settings.svg";
import Support from "../../../Images/investorsidebar/Support.svg";
import HomeIcon from "../../../Images/investorIcon/home.svg";
import myStartUpIcon from "../../../Images/Investor/Sidebar/MyStartUps.svg";
import exploreIcon from "../../../Images/Investor/Sidebar/explore.svg";
import syndicateIcon from "../../../Images/Investor/Sidebar/syndicates.svg";
import liveDealsIcon from "../../../Images/Investor/Sidebar/Live Deals.svg";
import mySchedulesIcon from "../../../Images/Investor/Sidebar/My Schedules.svg";
import savedPostsIcon from "../../../Images/Investor/Sidebar/SavedPosts.svg";
import ExitIcon from "../../../Images/investorIcon/Exit.svg";
import InvestorIcon from "../../../Images/investorIcon/Pot.svg";
import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/Action/userAction";
import connectionsIcon from "../../../Images/investorsidebar/connection.svg";

const SideBar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuIconClick = () => {
    setSidebarCollapsed(true);
  };

  const handleLogout = () => {
    // Step 3: Show the logout popup
    setShowLogoutPopup(true);
  };

  const handleLogoutLogic = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div
      className={`container newInvestor_sidebar_container ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <Link
                  onClick={() => setSidebarCollapsed(true)}
                  to={"/investor/profile"}
                >
                  <img
                    className="rounded-circle"
                    width={50}
                    src={loggedInUser.profilePicture}
                    alt="image"
                  />
                </Link>
              ) : (
                <>
                  <Link
                    onClick={() => setSidebarCollapsed(true)}
                    to={"/investor/profile"}
                  >
                    {" "}
                    <img
                      className="rounded-circle"
                      width={70}
                      src={loggedInUser.profilePicture}
                      alt="image"
                    />
                  </Link>
                  <h3>
                    {loggedInUser?.firstName} {loggedInUser?.lastName}
                  </h3>
                  <h4>{loggedInUser?.email}</h4>
                </>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {sidebarCollapsed ? (
                <img className="closemenu-Right" src={ArrowRight} alt="image" />
              ) : (
                <img className="closemenu-Left" src={ArrowLeft} alt="image" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round">
              <MenuItem
                // active={location.pathname.includes("/")}
                className=""
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="">
                  {sidebarCollapsed ? (
                    <>
                      <button className="plus_btn_newInvestor">
                        <img src={PlusIcon} alt="image" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="create_post_newInvestor">
                        <span>Create Post</span>
                        <img src={PlusIcon} alt="image" />
                      </button>
                    </>
                  )}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/home")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="">
                  <img src={HomeIcon} alt="image" />
                  {!sidebarCollapsed && <span>Home</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/explore")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(true)}
                  to="/investor/explore"
                >
                  <img
                    src={exploreIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Explore</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/mystartups")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/investor/mystartups">
                  <img
                    src={myStartUpIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>My StartUps</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/syndicates")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/onelink">
                  {/* <img src={OnelinkIcon} alt="image" width="17px" height="17px" /> */}
                  <img
                    src={syndicateIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Syndicates</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/live-Deals")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/team">
                  <img
                    src={liveDealsIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Live Deals</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/my-schedules")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/customers">
                  <img
                    src={mySchedulesIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>My Schedules</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/saved-posts")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/help">
                  <img
                    src={savedPostsIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Saved Posts</span>}
                </Link>
              </MenuItem>
              {/* <MenuItem
                active={location.pathname.includes("/investors")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/investors">
                  <img
                    src={InvestorIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Investors</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/connection")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(true)}
                  to="/connection"
                >
                  <img
                    src={connectionsIcon}
                    alt="image"
                    width="17px"
                    height="17px"
                  />
                  {!sidebarCollapsed && <span>Connnections</span>}
                </Link>
              </MenuItem>

              <hr className="hr-above-support" />
              <MenuItem
                active={location.pathname.includes("/support")}
                className="active-item"
              >
                <Link onClick={() => setSidebarCollapsed(true)} to="/support">
                  <img src={Support} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Support</span>}
                </Link>
              </MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="round">
              <MenuItem onClick={handleLogout}>
                <img src={ExitIcon} alt="image" width="17px" height="17px" />
                {!sidebarCollapsed && <span>Log out</span>}
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      {showLogoutPopup && (
        <LogOutPopUp
          setShowLogoutPopup={setShowLogoutPopup} // Make sure this prop is passed correctly
          handleLogoutLogic={handleLogoutLogic}
          showLogoutPopup
        />
      )}
    </div>
  );
};

export default SideBar;
