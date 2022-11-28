import React from "react";
import "./../styles/service.css";
import StyledService from "./../Styled/StyledService.styled";
import cardcontent from "../Data/cardcontent";

function Service() {
  return (
    <>
      <div className="service">
        <div className="title">Our Services</div>
        <div className="subtitle">
          Stop wasting time and money designing and managing a website
          <br></br>that doesn’t get results.Happiness guaranteed!
        </div>
        <div className="flex-content">
          {cardcontent.map(({ text, pictureURL, paragraph, link }) => (
            <StyledService>
              <div className="flex-divs">
                <h1>{text}</h1>
                <img src={pictureURL} />
              </div>
              <div>
                <p>{paragraph}</p>
              </div>
              <div className="last-div">
                <a>{link}</a>
              </div>
            </StyledService>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
