import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Home/Navbar";
import BGImage from "../assets/bg.jpg";
import Footer from "../components/Home/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const [imageload, setImageLoad] = useState(true);
  const { authModal } = useSelector((state) => state.ui);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKey) {
      navigate(`/jobs?searchKey=${searchKey}`);
    }
  };

  return (
    <div className={`${authModal && "h-screen overflow-hidden"}`}>
      <Navbar />
      <header className="h-screen relative bg-black flex justify-center items-center overflow-hidden">
        <img
          src={BGImage}
          alt="background-img"
          loading="lazy"
          onLoad={() => setImageLoad(false)}
          className={`absolute top-0 left-0 object-cover w-full h-full opacity-20 select-none duration-700 ease-in-out ${
            imageload
              ? "grayscale-100 blur-8xl scale-105"
              : "grayscale-0 blur-16x1 scale-100"
          }`}
        />
        <div className="flex flex-col items-center max-w-xl md:max-w-3xl z-10 text-center">
          <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 select-none">
            Finding Your Dream Job?
          </h1>
          <p class="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-6 select-none">
            Your Search Ends Here!
          </p>

          <form className="flex items-center py-1 pl-3 pr-1 bg-white rounded-lg md:w-1/2 gap-x-2">
            <FaSearch className="text-lg text-gray-500" />
            <input
              type="text"
              className="placeholder-gray-400 rounded-md w-full py-2 px-1 font-sans text-sm focus:outline-none"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search jobs..."
            />
            <button
              type="submit"
              className="px-4 py-2 font-medium rounded-md bg-blue-700 text-white ml-2"
              onClick={handleSearch}
            >
              Go
            </button>
          </form>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
