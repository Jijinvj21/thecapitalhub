import "./Search.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import connectIcon from "../../../Images/connect-button.svg";
import companyIcon from "../../../Images/Investor/searchResult/business-and-trade.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getSearchResultsAPI,
  sentConnectionRequest,
} from "../../../Service/user";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import AfterSuccessPopup from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";

function Search() {
  const [userData, setUserData] = useState(null);
  const [CompanyData, setCompanyData] = useState(null);
  const [connectionSent, setConnectionSent] = useState(false);
  const [loading, setLoading] = useState(true);

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchBy = queryParams.get("query");
  const userIdToRemove = loggedInUser._id;

  useEffect(() => {
    async function fetchData() {
      const data = await getSearchResultsAPI(searchBy);
      const updatedUserData = data?.data?.users?.filter(
        (user) => user?._id !== userIdToRemove
      );
      setUserData(updatedUserData);
      setCompanyData(data?.data?.company);
      setLoading(false);
    }

    if (queryParams.has("query")) {
      fetchData();
    }
  }, [searchBy]);
  console.log(userData)
  const handleConnect = (userId) => {
    sentConnectionRequest(loggedInUser._id, userId)
      .then(({ data }) => {
        setConnectionSent(true); // Set the state to true once
        
        setTimeout(() => {
          setConnectionSent(false); // Reset the state after a delay
        }, 2500);
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="container-fluid serach_main_container">
      <SmallProfileCard text={"Search"} />
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box p-4">
            <h4>People</h4>
            <hr />
            {loading ? (
              <div class="d-flex justify-content-center my-4">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : userData?.length === 0 ? (
              <h6 className="text-center">No Users Found</h6>
            ) : (
              userData?.map((users, index) => (
                <div
                  key={index}
                  className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center"
                >
                  <div className="short_desc d-flex">
                    <img
                      src={`${users?.profilePicture}`}
                      className="people_img rounded-circle"
                      alt="people image"
                    />
                    <div className="d-flex flex-column justify-content-center">
                      <Link
                        to={`/user/${users?._id}`}
                        className="people_name_link "
                      >
                        <h5>{`${users?.firstName} ${users?.lastName}`} </h5>
                      </Link>
                      <p>{`${users?.designation ? users?.designation : ""}`}</p>
                    </div>
                  </div>
                  <button
                    className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white"
                    onClick={() => handleConnect(users?._id)}
                  >
                    <img src={connectIcon} alt="connect-user" />
                    <span>Connect</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box p-4">
            <h4>Company</h4>
            <hr />
            {loading ? (
              <div class="d-flex justify-content-center my-4">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : CompanyData?.length === 0 ? (
              <h6 className="text-center">No Companys Found</h6>
            ) : (
              CompanyData?.map((company, index) => (
                <div
                  key={index}
                  className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center"
                >
                  <div className="short_desc d-flex">
                    <img
                      src={`${
                        company?.logo
                          ? company?.logo
                          : companyIcon
                      }`}
                      className="people_img rounded-circle"
                      alt="company image"
                    />
                    <div className="d-flex flex-column justify-content-center">
                      <h5>{`${company?.company}`}</h5>
                      <p>{`${
                        company?.description ? company?.description : ""
                      }`}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {connectionSent && (
        <AfterSuccessPopup
          withoutOkButton
          onClose={() => setConnectionSent(!connectionSent)}
          successText="Connection Sent Successfully"
        />
      )}
    </div>
  );
}

export default Search;
