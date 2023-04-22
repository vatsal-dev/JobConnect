import React from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { employerLinks, applicantLinks } from "../../utils/NavLinks";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [openDropDown, setOpenDropDown] = useState(false);
  const ref = useRef();
  return (
    <div className="dashboard-sideNav">
      {/* Side NavLink */}
      {
        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <span className="text-white text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold">
              Applicant Dashboard
            </span>
          </button>

          {openDropDown && (
            <div ref={ref}>
              <div
                className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
              >
                {
                  <Link
                    to={"/user-profile"}
                    className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                  >
                    <span>Resume Upload & User Details</span>
                  </Link>
                }
                {
                  <Link
                    to={"/appliedjobs"}
                    className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                  >
                    <span>Applied Jobs</span>
                  </Link>
                }

                {
                  <Link
                    to={"/jobs"}
                    className="avatar-option text-lg font-[Mulish] md:block pr-2 hover:scale-110 hover:font-bold"
                  >
                    <span>Find more Jobs</span>
                  </Link>
                }
              </div>
            </div>
          )}
        </div>
      }

      <ReactTooltip
        place="right"
        type="dark"
        effect="solid"
        className="!block md:!hidden"
      />
    </div>
  );
};

export default DashboardSidebar;
