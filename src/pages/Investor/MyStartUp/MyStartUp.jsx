import React from "react";
import "./MyStartUp.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import MyInvestmentCard from "../InvestorCards/MyInvestmentCard/MyInvestmentCard";
import logoIcon from "../../../Images/investorIcon/Rectangle 1577.png";
import EyeLikeImage from "../../../Images/investorIcon/Ellipse 192.svg";
import ChartComponent from "./ChartComponent";
import PostInvestmentCard from "../InvestorCards/PostInvestmentCard/PostInvestmentCard";
import { Link } from "react-router-dom";
import ModalBsLauncher from "../../../components/PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
import ModalBSContainer from "../../../components/PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
import ModalBSHeader from "../../../components/PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
import ModalBSBody from "../../../components/PopUp/ModalBS/ModalBSBody/ModalBSBody";
import AddModalContent from "../../../components/NewInvestor/MyStartupsComponents/AddModalContent";

const MyStartUp = () => {
  // Mock data for my investments
  const investmentsData = [
    {
      id: 1,
      logo: logoIcon,
      name: "Bondlink",
      description:
        "One classical breakdown of economic activity distinguishes three sectors.",
      equity: 3,
    },
    {
      id: 2,
      logo: logoIcon,
      name: "Mini Cubex",
      description:
        "One classical breakdown of economic activity distinguishes three sectors.",
      equity: 10,
    },
    {
      id: 3,
      logo: logoIcon,
      name: "HCL",
      description:
        "One classical breakdown of economic activity distinguishes three sectors.",
      equity: 10,
    },
  ];

  return (
    <>
      <div className="container-fluid mystartup_main_container">
        <SmallProfileCard text={"My Startup"} />
        <div className="row mt-2 m-3">
          <div className="col-12 startup_container p-0">
            {/* My Investments */}
            <div className="d-flex align-items-center justify-content-between border border-3 border-top-0 border-start-0 border-end-0 py-3 px-4 ">
              <h4 className="title_h4 m-0 green_underline ">My Investments</h4>
              <div className="d-flex gap-2">
                <div className="">
                  {/* <Link to={""}>Add New</Link> */}
                  <ModalBsLauncher
                    id={"myInvestmentsAddModal"}
                    className={"green_button"}
                  >
                    Add New
                  </ModalBsLauncher>
                </div>
                <div className="">
                  {/* <Link to={""}>Edit</Link> */}
                  <ModalBsLauncher
                    id={"myInvestmentsEditModal"}
                    className={"green_button"}
                  >
                    Edit
                  </ModalBsLauncher>
                </div>
              </div>
            </div>
            <div className="card_container border-bottom p-4 d-flex gap-5 align-items-center">
              {investmentsData.map((company, index) => {
                return <MyInvestmentCard key={company.id} company={company} />;
              })}
            </div>
            {/* My Investments Add Modal */}
            <ModalBSContainer id={"myInvestmentsAddModal"} isStatic={false}>
              <ModalBSHeader title={"Add new Investment"} />
              <ModalBSBody>
                <AddModalContent />
              </ModalBSBody>
            </ModalBSContainer>

            {/* My Investments Edit Modal */}
            <ModalBSContainer id={"myInvestmentsEditModal"} isStatic={false}>
              <ModalBSHeader title={"Edit Investments"} />
              <ModalBSBody>Body</ModalBSBody>
            </ModalBSContainer>

            {/* My Interests */}
            <div className="d-flex align-items-center justify-content-between border border-3 border-top-0 border-start-0 border-end-0 py-3 px-4 ">
              <h4 className="title_h4 m-0 green_underline">My Interests</h4>
              <div className="d-flex gap-2">
                <div className="">
                  {/* <Link to={""}>Add New</Link> */}
                  <ModalBsLauncher
                    id={"myInterestsAddModal"}
                    className={"green_button"}
                  >
                    Add New
                  </ModalBsLauncher>
                </div>
                <div className="">
                  {/* <Link to={""}>Edit</Link> */}
                  <ModalBsLauncher
                    id={"myInterestsEditModal"}
                    className={"green_button"}
                  >
                    Edit
                  </ModalBsLauncher>
                </div>
              </div>
            </div>
            <div className="card_container p-4 d-flex gap-5 align-items-center ">
              {investmentsData.map((company, index) => {
                return (
                  <MyInvestmentCard
                    key={company.id}
                    company={company}
                    isInterests={true}
                  />
                );
              })}
            </div>
            {/* My Interests Add Modal */}
            <ModalBSContainer id={"myInterestsAddModal"} isStatic={false}>
              <ModalBSHeader title={"Add new Interest"} />
              <ModalBSBody>
                <AddModalContent isInterests />
              </ModalBSBody>
            </ModalBSContainer>

            {/* My Investments Edit Modal */}
            <ModalBSContainer id={"myInterestsEditModal"} isStatic={false}>
              <ModalBSHeader title={"Edit Interests"} />
              <ModalBSBody>Body</ModalBSBody>
            </ModalBSContainer>
          </div>
        </div>

        <div className="row mt-2 big_card_container">
          <div className="col-6 left_container">
            <h4 className="title_h4">Summary</h4>
            <hr />
            <div className="chart_container">
              <ChartComponent />
            </div>
          </div>
          <div className="col-6 right_container">
            <h4 className="title_h4">Past Investments</h4>
            <hr />
            <div className="two_by_two_card_container">
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
              <PostInvestmentCard
                logo={logoIcon}
                text="Investment 1"
                para="Some description for Investment 1."
                images={EyeLikeImage}
                smallText="Small text for Investment 1."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStartUp;
