import React from "react";
import "../styles/service.css";
import { useState } from "react";
import classroom from "../images/classroom.png";
import man from "../images/man.png"
import mountains from "../images/mountains.png"
import nature from "../images/nature.png"
import office from "../images/office.png"
import programmer from "../images/programmer.png"
import river from "../images/river.png"
import sunset from "../images/sunset.png"
import teacher from "../images/teacher.png"

function Featured() {
  const menuItems = [
    "ALL WORK",
    "BRANDING",
    "MARKETING",
    "PLANNING",
    "RESEARCH",
  ];
    const imageURL = [
        man, classroom, mountains, nature, office, programmer, river, sunset, teacher
    ]
    const [collection, setColection] = useState(menuItems);
    const [images, setImages] = useState(imageURL)
  return (
    <>
      <div className="title">Featured work</div>
      <div className="flex-content">
        <div>
          {collection.map((item) => (
            <p>{item}</p>
          ))}
        </div>
              <div>
              {images.map(item => <img className="featured-images" src={item} />)}
        </div>
      </div>
    </>
  );
}

export default Featured;
