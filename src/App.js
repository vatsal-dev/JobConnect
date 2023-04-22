import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import CompanySignUp from "./pages/CompanySignUp";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewJob from "./components/Candidate/ViewJob";
import AppliedJobs from "./pages/AppliedJobs";
import CompanyDashboard from "./components/Company/CompanyDashboard";
import AppliedJobsCards from "./components/Candidate/AppliedJobsCards";
import ApplicantResume from "./components/Applicant/ApplicantResume";
import JobDashboard from "./components/Company/JobDashboard";
import PostEvent from "./pages/PostEvent";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/sign-up" element={<CompanySignUp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />

        <Route path="/candidate/view-job" element={<ViewJob />} />

        <Route path="/company/post-job" element={<PostJob />} />
        <Route path="/company/post-event" element={<PostEvent />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/company/dashboard" element={<Dashboard />} />
        <Route path="/candidate/resume" element={<ApplicantResume />} />
        {/* <Route path="/pages/appliedjobs" element={<AppliedJobs />} /> */}
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/employer/details" element={<CompanyDashboard />} />
        <Route path="/employer/jobs" element={<JobDashboard />} />
        <Route path="/appliedjobs" element={<AppliedJobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        draggable
        limit={3}
      />
    </>
  );
};

export default App;
