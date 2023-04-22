import React from "react";
import Logo from "../../assets/Logo.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div
              className="flex items-center justify-center sm:justify-start
             gap-x-2 cursor-pointer"
            >
              <h1 className="text-2xl font-medium text-white font-[Domine]">
                JobConnect
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Team Members</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm text-white">
                  <li>Company History</li>

                  <li>Meet the Team</li>

                  <li>Employee Handbook</li>

                  <li>Careers</li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Features</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm text-white">
                  <li>Company History</li>

                  <li>Meet the Team</li>

                  <li>Employee Handbook</li>

                  <li>Careers</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
