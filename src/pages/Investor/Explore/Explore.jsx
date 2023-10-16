import "./Explore.scss";
import { useState, useEffect } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import Company from "../../../components/NewInvestor/Company/Company";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import CompanyProfileList from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfileList";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import PersonProfileList from "../../../components/Shared/PersonProfileComponents/PersonProfileList";

function Explore() {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Startup");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Explore | Investors - The Capital Hub";
    dispatch(setPageTitle("Explore"));
  }, []);

  // Render filter result
  const renderTabContent = () => {
    switch (activeTab) {
      case "Startup":
        return <CompanyProfileList isStartup data={filteredData} />;
      case "Founder":
        return (
          <PersonProfileList
            theme={"startup"}
            short={true}
            data={filteredData}
          />
        );
      case "Investor":
        return (
          <PersonProfileList
            theme={"startup"}
            short={true}
            data={filteredData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="explore_container px-3 border-start">
        <SmallProfileCard text="Explore" />
        <section className="filter_container border">
          <h5 className="h5">Find StartUps by</h5>
          <div className="filter_by">
            <button
              className={activeTab === "Startup" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Startup");
              }}
            >
              Startup
            </button>
            <button
              className={activeTab === "Founder" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Founder");
              }}
            >
              Founder
            </button>
            <button
              className={activeTab === "Investor" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Investor");
              }}
            >
              Investor
            </button>
          </div>
          <div className="filter_by_selections row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
            <FilterBySelect label="Sector" name="sector" />
            <FilterBySelect label="Sub-Sector" name="subSector" />
            <FilterBySelect label="State" name="state" />
            <FilterBySelect label="City" name="city" />
            <FilterBySelect label="Age" name="age" />
            <FilterBySelect label="Business Model" name="businessModel" />
            <FilterBySelect
              label="Incorporation Model"
              name="incorporationModel"
            />
            <FilterBySelect label="DPIIT Registered" name="dpiitRegistered" />
            {activeTab === "Founder" && (
              <>
                <FilterBySelect label="Incubation" name="incubation" />
                <FilterBySelect label="Incubation" name="incubation" />
              </>
            )}
          </div>
        </section>

        {/* Company profiles list - pass filters here */}
        <CompanyProfileList />
        {/* <section className="filtered_company_details">
          <CompanyProfile />
          <CompanyProfile />
        </section> */}
      </div>
    </MaxWidthWrapper>
  );
}

export default Explore;
