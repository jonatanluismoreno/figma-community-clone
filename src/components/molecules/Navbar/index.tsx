import React from "react";
import "./styles.css";

import searchheader from "../../../assets/searchheader.svg";
import arrowheader from "../../../assets/arrowheader.svg";
import community from "../../../assets/community.svg";
import userimage from "../../../assets/user.png";
import figma from "../../../assets/figma.svg";

import { useAuth } from "./../../../context/authContext";
interface Props {
  signUpModal?: () => void;
  signInModal?: () => void;
}

const Navbar: React.FC<Props> = ({ signUpModal, signInModal }) => {
  const { user } = useAuth();
  return (
    <>
      {!user ? (
        <header className="navbar-signup">
          <div className="navbar-left-section-signup">
            <img src={figma} alt="figma logo" className="navbar-figma-svg" />
            <span className="navbar-text-community-signup">Community</span>
          </div>
          <section className="right-section-signup">
            <button className="navbar-login__noauth" onClick={signInModal}>
              Log in
            </button>
            <button className="button-navbar__noauth" onClick={signUpModal}>
              Sign up
            </button>
          </section>
        </header>
      ) : (
        <header className="navbar">
          <div className="left-section">
            <div className="community-account">
              <img src={community} alt="" className="community-svg" />
              <img src={arrowheader} alt="" className="arrow-svg" />
            </div>
            <span className="text-community">Community</span>
            <div className="search-community">
              <img src={searchheader} alt="" className="search-svg" />
              <input
                type="text"
                placeholder="Search Community"
                className="input-search"
              />
            </div>
          </div>
          <div className="right-section">
            <button className="button-header">Publish</button>
            <div className="profile-container">
              <img src={userimage} alt="" className="user-image" />
              <img src={arrowheader} alt="" className="arrow-svg" />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
