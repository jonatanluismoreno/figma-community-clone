import React from "react";
import "./styles.css";

import searchheader from "../../../assets/searchheader.svg";
import arrowheader from "../../../assets/arrowheader.svg";
import community from "../../../assets/community.svg";
import user from "../../../assets/user.png";
import figma from "../../../assets/figma.svg";
interface Props {
  isAuth?: boolean;
}

const Navbar: React.FC<Props> = ({ isAuth = false }) => {
  return (
    <>
      {!isAuth ? (
        <header className="navbar-signup">
          <section className="navbar-left-section-signup">
            <img src={figma} alt="figma logo" className="navbar-figma-svg" />
            <span className="navbar-text-community-signup">Community</span>
          </section>
          <section className="right-section-signup">
            <button className="navbar-login__noauth">Log in</button>
            <button className="button-navbar__noauth">Sign up</button>
          </section>
        </header>
      ) : (
        <header className="navbar">
          <section className="left-section">
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
          </section>
          <section className="right-section">
            <button className="button-header">Publish</button>
            <div className="profile-container">
              <img src={user} alt="" className="user-image" />
              <img src={arrowheader} alt="" className="arrow-svg" />
            </div>
          </section>
        </header>
      )}
    </>
  );
};

export default Navbar;
