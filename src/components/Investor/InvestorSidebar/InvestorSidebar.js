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
import BookIcon from "../../../Images/investorIcon/Book.svg";
import ExitIcon from "../../../Images/investorIcon/Exit.svg";
import GroupIcon from "../../../Images/investorIcon/Group.svg";
import InvestorIcon from "../../../Images/investorIcon/Pot.svg";
import SaveIcon from "../../../Images/investorIcon/Save.svg";
import PlusIcon from "../../../Images/investorIcon/Plus.svg";
import { BsLink45Deg } from "react-icons/bs";
import "react-pro-sidebar/dist/css/styles.css";
import "./investorsidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/Action/userAction";

const InvestorSidebar = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuIconClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
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
      className={`container sidebar_container ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div id="header">
        <ProSidebar collapsed={sidebarCollapsed}>
          <SidebarHeader>
            <div className="logotext">
              {sidebarCollapsed ? (
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to={"/profile"}
                >
                  {" "}
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
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    to={"/profile"}
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
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/createpost"
                >
                  {sidebarCollapsed ? (
                    <>
                      <button className="plus_btn">
                        <img src={PlusIcon} alt="image" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="create_post">
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
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/home"
                >
                  <img src={HomeIcon} alt="image" />
                  {!sidebarCollapsed && <span>Home</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/documentation")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/documentation"
                >
                  <img src={BookIcon} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Documentation</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/savePost")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/savePost"
                >
                  <img src={SaveIcon} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Saved posts</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/onelink")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/onelink"
                >
                  {/* <img src={OnelinkIcon} alt="image" width="17px" height="17px" /> */}
                  <BsLink45Deg height={"59px"} width={"59px"} size={"20px"} />
                  {!sidebarCollapsed && <span>One link</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/team")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/team"
                >
                  <img src={GroupIcon} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Team</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/customers")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/customers"
                >
                  <img src={Setting} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Customers</span>}
                </Link>
              </MenuItem>
              <MenuItem
                active={location.pathname.includes("/investors")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/investors"
                >
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
                active={location.pathname.includes("/help")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/help"
                >
                  <img src={Setting} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Help</span>}
                </Link>
              </MenuItem>

              <hr className="hr-above-support" />
              <MenuItem
                active={location.pathname.includes("/support")}
                className="active-item"
              >
                <Link
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  to="/support"
                >
                  <img src={Support} alt="image" width="17px" height="17px" />
                  {!sidebarCollapsed && <span>Support</span>}
                </Link>
              </MenuItem>
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

export default InvestorSidebar;
