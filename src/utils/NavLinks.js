import {
  MdOutlineDomain,
  MdOutlineBusinessCenter,
  MdOutlineEventNote,
  MdOutlineDashboard,
  MdAssignment,
} from "react-icons/md";
import CompanyDashboard from "../components/Company/CompanyDashboard";

import JobDashboard from "../components/Company/JobDashboard";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminCompany from "../components/Admin/AdminCompany";
import ApplicantResume from "../components/Applicant/ApplicantResume";
export const applicantLinks = [
  {
    id: "CN1",
    name: "Profile",
    icon: MdOutlineDomain,
    element: CompanyDashboard,
  },
  {
    id: "CN2",
    name: "Resume Upload",
    icon: MdOutlineBusinessCenter,
    element: ApplicantResume,
  },
  {
    id: "CN3",
    name: "Applied Jobs ",
    icon: MdOutlineBusinessCenter,
    element: JobDashboard,
  },
];

export const employerLinks = [
  {
    id: "AD1",
    name: "Profile",
    icon: MdOutlineDashboard,
    element: AdminDashboard,
  },
  {
    id: "AD2",
    name: "Your Jobs",
    icon: MdOutlineDomain,
    element: AdminCompany,
  },
];
