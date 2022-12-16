import React from "react";
import StyledBanner from "../Styled/Banner.styled";
import "../styles/banner.css";
import cloud from "../images/cloud.png";

function Banner() {
  return (
    <>
      <StyledBanner>
        <div className="first-div">
          <div className="header">
            <div className="distance">Business is</div>
            <div>Now Digital</div>{" "}
          </div>
          <div className="main-text">
            We blend insight and strategy to create digital products for forward
            thinking organisations.
          </div>
          <div className="buttons">
            <button>Get started</button>
            <button>Download</button>
          </div>
        </div>
        <div className="blue-div">
          <div className="small-picture">
            <img src={cloud} />
          </div>
        </div>
      </StyledBanner>
    </>
  );
}

export default Banner;
