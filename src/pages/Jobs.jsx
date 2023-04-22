import React, { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import JobsCard from "../components/Candidate/JobCards";
import { useSelector } from "react-redux";
import api from "../utils/api";
import { useLocation, useSearchParams } from "react-router-dom";

const Jobs = () => {
  const mockCompanies = [
    { name: "Company A" },
    { name: "Company B" },
    { name: "Company C" },
  ];

  const mockCategory = ["Category A", "Category B", "Category C"];

  const mockExperience = ["Experience A", "Experience B", "Experience C"];

  // Mock data for testing purposes
  const mockData = [
    {
      CompanyID: { name: "Company A" },
      JobID: {
        jobTitle: "Job A",
        category: "Category A",
        experience: "Experience A",
      },
    },
    {
      CompanyID: { name: "Company B" },
      JobID: {
        jobTitle: "Job B",
        category: "Category B",
        experience: "Experience B",
      },
    },
    {
      CompanyID: { name: "Company C" },
      JobID: {
        jobTitle: "Job C",
        category: "Category C",
        experience: "Experience C",
      },
    },
  ];

  const [params] = useSearchParams();
  const urlLocation = useLocation();
  const { authModal } = useSelector((state) => state.ui);
  //company details for dropdown
  const [companies, setCompanies] = useState([]);
  //jobs categpries
  const [category, setCategory] = useState([]);
  //job experience
  const [experience, setExperience] = useState([]);

  //search data
  const [keyword, setKeyword] = useState(params.get("searchKey") || "");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(0);
  //filter data
  const [experienceF, setExperienceF] = useState("");
  const [companyF, setCompanyF] = useState("");

  const [medialitiyF, setMedialitiyF] = useState("");

  // //! Get All Company
  // const getAllCompany = async () => {
  //   const response = await api.get("/company");
  //   setCompanies(response.data.companies);
  //   return response.data;
  // };
  // //geta all jobs
  // const getAllJobs = async () => {
  //   const API_URL = `candidate/getAllJobs?page=${0}`;
  //   const response = await api.post(API_URL);

  //   setCategory(response.data.distincCat);
  //   setMedialitiy(response.data.mediality);
  //   setExperience(response.data.experience);
  // };
  const Onsearch = async () => {
    setSearch(1);
    //setSearch(0)
  };
  // useEffect(() => {
  //   getAllCompany();
  //   getAllJobs();
  // }, []);

  return (
    <div className={`${authModal && "h-screen overflow-hidden"}`}>
      <Navbar />
      <header className="header-container">
        <h1 className="header-title">Find Your Dream Job</h1>

        <div className="header-search-container">
          <div className="flex items-center w-full space-x-2">
            <input
              type="text"
              className="header-input"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              defaultValue={keyword}
              placeholder="Job title or keyword"
            />
            <button className="header-search-button" onClick={Onsearch}>
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center mt-16">
        <div className="flex items-center space-x-2">
          <div className="flex justify-center  w-1/2 mt-3">
            <div className="box-border grow-0  h-auto">
              {/* card starts here */}

              <JobsCard
                keyword={keyword}
                location={location}
                search={search}
                setSearch={setSearch}
                experienceF={experienceF}
                companyF={companyF}
                // categoryF={categoryF}
                medialitiyF={medialitiyF}
              />
              {/* card ends here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
