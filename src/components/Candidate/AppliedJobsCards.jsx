import React from "react";
import moment from "moment";

const AppliedJobsCards = ({ data }) => {
  return (
    <>
      <h1 className="font-sans font-normal italic text-gray-500">
        {data.length} results found
      </h1>
      {data.map((data) => (
        <div key={data._id} className="flex flex-col pt-4 ...">
          <div className=" h-48 relative w-full bg-gray-50   shadow-xl">
            <div className=" h-5/6 w-full pl-4 pt-4 bg-white  ">
              <div className="flex relative">
                <div className="pr-4">
                  <img
                    src="data:image/png;base64,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"
                    alt="company-img"
                    className="object-cover h-24 w-24  shadow-xl"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{data.JobID.jobTitle}</h1>
                  <h1 className="pt-4 text-lg">{data.CompanyID.name}</h1>
                  <h1 className="pt-2 text-sm">{data.JobID.jobCategory}</h1>
                </div>
                <div className=" absolute right-12 top-2">
                  {data.ApplicationStatus === "rejected" && (
                    <span className="text-lg font-bold mr-2 px-8 py-1 rounded-full bg-red-700 text-white">
                      {data.ApplicationStatus}
                    </span>
                  )}
                  {data.ApplicationStatus === "accepted" && (
                    <span className="text-lg font-bold mr-2 px-8 py-1 rounded-full bg-green-700 text-white">
                      {data.ApplicationStatus}
                    </span>
                  )}
                  {data.ApplicationStatus === "pending" && (
                    <span className="text-lg font-bold mr-2 px-8 py-1 rounded-full bg-gray-500 text-white">
                      {data.ApplicationStatus}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex font-sans font-medium text-gray-600 absolute left-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Applied On: {moment(data.createdAt).utc().format("YYYY-MM-DD")}
            </div>
            <div className="flex font-sans font-medium text-gray-600 absolute right-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Last Update: {moment(data.updatedAt).utc().format("YYYY-MM-DD")}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJobsCards;
