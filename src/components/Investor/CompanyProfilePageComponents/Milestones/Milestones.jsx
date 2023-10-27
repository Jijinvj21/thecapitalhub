import React, { useEffect, useState } from "react";
import "./Milestones.scss";
import { Link, useLocation } from "react-router-dom";
import MilestoneBadge from "./MilestoneBadge";
import MockBadge from "../../../../Images/StartUp/Milestones/MockBadge.svg";
import MockFundsBadge from "../../../../Images/StartUp/Milestones/MockfundsBadge.svg";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSFooter,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import AddMilestoneModal from "./AddMilestoneModal";
import { useSelector } from "react-redux";
import { getUserMilestonesAPI } from "../../../../Service/user";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

// Mock data array
// const companyMilestones = [
//   {
//     milestone: "Founded in",
//     text: "Sept, 2022",
//     badge: MockBadge,
//   },
//   {
//     milestone: "Achieved First Revenue",
//     text: "",
//     badge: MockFundsBadge,
//   },
// ];

const DATEOPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function Milestones({ headingClass, containerClass, theme }) {
  let { pathname } = useLocation();
  const { oneLinkId, createdAt } = useSelector(
    (state) => state.user.loggedInUser
  );

  const [userMilestones, setUserMilestones] = useState(null);

  // fetch user's milestones
  useEffect(() => {
    async function fetchUserMilestones(oneLinkId) {
      try {
        const { data } = await getUserMilestonesAPI(oneLinkId);
        data.milestones = data.milestones.map((milestone) => ({
          ...milestone,
          badge: MockBadge,
        }));
        // console.log("user's milestones", data);
        setUserMilestones(data);
      } catch (error) {
        console.log("Error fetching user's milestones:", error);
      }
    }

    fetchUserMilestones(oneLinkId);
  }, []);

  return (
    <div className={` d-flex flex-column gap-4 ${containerClass} `}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className={headingClass}>Milestones</h2>
        <Link className={`see__more align-self-end ${theme}`}>See more</Link>
      </div>
      <div
        className={`milestone__cards__container d-flex align-items-stretch gap-5 pb-3 ${theme}`}
      >
        {userMilestones ? (
          userMilestones.milestones.map((mile, index) => {
            return (
              <MilestoneBadge
                badge={mile.badge}
                milestone={mile.text}
                text={
                  mile.text === "Joining Capital HUB"
                    ? new Date(createdAt).toLocaleDateString([], DATEOPTIONS)
                    : ""
                }
                key={`${mile.milestone}${index}`}
                theme={theme}
                date
              />
            );
          })
        ) : (
          <SpinnerBS
            className={"d-flex justify-content-center align-items-center py-5"}
          />
        )}
      </div>
      {/* If authorised show "Add" button that triggers add modal */}
      {!pathname.includes("onelink") ? (
        <div className="align-self-end">
          <ModalBsLauncher
            id={"AddMilestoneModal"}
            className={`orange_button d-flex align-items-center gap-1 w-auto ${theme}`}
          >
            <span>Add</span>
          </ModalBsLauncher>
        </div>
      ) : (
        ""
      )}
      {/* Modal for adding new team member */}
      <div className="addMilestoneModal__container">
        <ModalBSContainer id={"AddMilestoneModal"} modalXl>
          <ModalBSHeader
            title={"Add/Edit Milestone"}
            className={`${theme === "investor" ? "" : "orange__heading"}`}
          />
          <ModalBSBody>
            <AddMilestoneModal
              theme={theme}
              userMilestones={userMilestones?.milestones}
            />
          </ModalBSBody>
        </ModalBSContainer>
      </div>
    </div>
  );
}
