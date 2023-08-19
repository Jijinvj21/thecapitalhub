import React from "react";
import "./home.scss";
import GirlIcon from "../../Images/GirlIcons.png";
import laptopIcon from "../../Images/Group 6.svg";
import AngelIcon from "../../Images/Group 7.svg";
import ManageTeamIcon from "../../Images/Group 8.svg";
import ManageClientIcon from "../../Images/Group 9.svg";
import ManageInvestortIcon from "../../Images/Group 10.svg";
import MentorIcon from "../../Images/Group 13.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import WhyChooseUsCard from "../Card/Home/WhyChooseUs/WhyChooseUsCard";
import OurStartUp from "./OurStartUp/OurStartUp";
import CoInvestor from "./CoInvestor/CoInvestor";
import OurCollabration from "./OurCollabration/OurCollabration";

const Home = () => {
  return (
    <>
      <div className="container mb-md-5">
        <div className="row">
          <div className=" col-8 title__text d-flex flex-column justify-content-center">
            <h2>
              Fund your next big idea into a &nbsp;
              <span style={{ color: "#FD5901" }}>startup now !</span>
            </h2>

            <h4>Register now as</h4>
            <div className="buttons_row">
              <Link to="/signup">
                <button className="btn1 btn-primary">Start Up</button>
              </Link>
              <Link to="/signup">
                <button className="btn2 btn-primary">Investor</button>
              </Link>
            </div>
          </div>
          <div className=" col-4 image_section">
            <img src={GirlIcon} alt="img1" />
          </div>
          <section className="welcome_section mt-5">
            <h6>
              Welcome to The Capital Hub, Our integrated platform, where investors,
              startups, and professionals come together to unlock new
              opportunities and build meaningful connections. Whether your’re
              seeking investment opportunities, looking to fund your startup, or
              eager to expand your network, our platform offers the perfect
              ecosystem to fulfill your goals
            </h6>
          </section>
          <div className="container section_container">
            <h2>
              Who are &nbsp;<span style={{ color: "#FD5901" }}>we ?</span>
            </h2>
            <section className="welcome_section">
              <h6>
                The Capital Hub team comprises exceptional individuals with a
                diveerse range of expertise, spanning investment banking,
                startup management banking, startup management, software
                development, advisory services, and more. Our collective
                dedication is aimed at empowering startups to flourish and
                thrive in today’s dynamic market. Together, we are committed to
                providing the guidance and support needed for your startup to
                reach new heights of success.
              </h6>
            </section>
          </div>
        </div>
      </div>
      <div className="container-fluid why_choose_us_container">
        <div className="container">
          <WhyChooseUsCard />
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Create your one link now</h3>
                <p className="desktop_para">
                  With our innovative "One Link" feature, managing your
                  startup's communication has never been easier. Say goodbye to
                  the hassle of multiple attachments and lengthy emails. <br />
                  Now, you can effortlessly share all vital information,
                  including pitch decks, documents, and crucial updates, using
                  just one convenient and easily accessible link. Save time and
                  stay organized as you streamline interactions with potential
                  investors, partners, and stakeholders. Experience the
                  simplicity of centralized information sharing and make a
                  lasting impression with a seamless, professional approach.
                </p>
                <p className="mobile_para">
                  Build your online presence effortlessly with our user-friendly
                  platform. Customise your unique One-Link, showcase your work,
                  and connect with your audience seamlessly. Start building your
                  digital footprint today!
                </p>
                <button>Create</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 onelink_img">
              <img className="create_one_link" src={laptopIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center angel_investment">
            <div className="col-lg-6 col-md-12  angel_img">
              <img
                className="angel_investment_image"
                src={AngelIcon}
                alt="img"
              />
            </div>
            <div className="col-lg-6 col-md-12 angel_investment_text">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Angel investment made easy</h3>
                <p className="desktop_para">
                  Unlock the potential of your startup by connecting with the
                  ideal angel investors tailored to your preferences. Our
                  advanced filtering system ensures you find the perfect match,
                  crucial for achieving your startup's success. Don't miss out
                  on this opportunity to take your business to new heights with
                  the right investors by your side. Let us help you make the
                  right connections for a thriving future.
                </p>
                <p className="mobile_para">
                  Unlock the potential of early-stage startups and
                  entrepreneurs. Our platform connects angel investors with
                  innovative ideas, providing a streamlined and secure
                  investment process for sustainable growth and financial
                  returns.
                </p>
                <button className="angel_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Manage your team</h3>
                <p className="desktop_para">
                  With our intuitive team management tools, enhance
                  collaboration and productivity within your startup. Easily add
                  team members, create vision boards, and assign tasks,
                  fostering a cohesive environment for seamless teamwork.
                  Experience the power of our platform, driving your startup
                  towards success through efficient and effective team
                  management.
                </p>
                <p className="mobile_para">
                  Efficiently oversee your team's projects, tasks, and
                  collaboration with our powerful Team Management tools.
                  Streamline workflows, foster effective communication, and
                  drive productivity to achieve remarkable results.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  onelink_img">
              <img className="manage_team_img" src={ManageTeamIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center angel_investment">
            <div className="col-lg-6 col-md-12 client_img">
              <img src={ManageClientIcon} alt="img" />
            </div>
            <div className="col-lg-6 col-md-12 angel_investment_text">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Client Management</h3>
                <p className="desktop_para">
                  Elevate client interactions with our user-friendly management
                  tools. From simplified payment and workflow tracking to
                  effortless invoice creation and smooth payment processing, our
                  platform ensures a seamless and satisfying experience for your
                  clients. Strengthen client relationships and leave a lasting
                  impression with our comprehensive client management solutions.
                </p>
                <p className="mobile_para">
                  Transform your approach to client relationships. Our Client
                  Management system centralises client data, streamlines
                  communication, and automates processes, empowering you to
                  deliver personalised and exceptional service at every
                  touchpoint.
                </p>
                <button className="angel_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Investor management</h3>
                <p className="desktop_para">
                  Foster investor relationships with our dedicated tools,
                  nurturing and cultivating connections. Effortlessly segment
                  and engage with potential investors, while sharing your
                  startup's details in just one click. Our platform empowers you
                  to build strong investor connections, driving the success and
                  growth of your startup.
                </p>

                <p className="mobile_para">
                  Elevate your investor relations with our comprehensive
                  Investor Management platform. From fundraising to reporting,
                  track and engage with investors, foster trust, and drive
                  success for your venture.
                </p>
                <button className="investor_button">Learn more</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  onelink_img">
              <img
                className="manage_team_img"
                src={ManageInvestortIcon}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container margin_bottom">
          <div className="row d-flex justify-content-center align-items-center angel_investment">
            <div className="col-lg-6 col-md-12  mentor_img ">
              <img
                className="angel_investment_image"
                src={MentorIcon}
                alt="img"
              />
            </div>
            <div className="col-lg-6 col-md-12 angel_investment_text">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Growthive for Mentors</h3>
                <p className="desktop_para">
                  Introducing Growthive, an innovative program by The Capital Hub
                  that bridges the gap between investors and early-stage
                  startups. Investors become mentors, offering their expertise
                  and guidance in exchange for equity, propelling startups from
                  ground zero to success. With a wealth of experience and
                  knowledge at their disposal, Growthive empowers startups to
                  navigate the challenging journey from 0 to 1, unlocking their
                  full potential and fostering lasting growth.
                </p>
                <p className="mobile_para">
                  Unlock the potential of mentorship. Join our network of
                  accomplished mentors and guide the next generation of
                  entrepreneurs. Share your expertise, cultivate innovative
                  ideas, and create a lasting impact on startup success.
                </p>
                <button className="mentor_button">Be a mentor now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid our_startups_section">
        <OurStartUp />
      </div>

      <div className="container-fluid our_investor_section">
        <CoInvestor />
      </div>

      <div className="container-fluid">
        <OurCollabration />
      </div>
    </>
  );
};

export default Home;
