// React
import React, { useEffect } from "react";

// Images for the slider
import st from "../assets/images/1.jpg";
import nd from "../assets/images/2.jpg";
import rd from "../assets/images/3.jpg";
import fo from "../assets/images/4.jpg";
import fi from "../assets/images/5.jpg";
import si from "../assets/images/6.jpg";
import se from "../assets/images/7.jpg";
import ei from "../assets/images/8.jpg";
import ni from "../assets/images/9.jpg";
import te from "../assets/images/10.jpg";

// Component that changes the src of and image card
export const Slider = () => {
  useEffect(() => {
    const slider = Array.from(document.getElementById("slider").children);
    const intervalId = setInterval(() => {
      for (let i = 0; i < slider.length; i++) {
        const length = slider.length;
        if (slider[i].classList.contains("block")) {
          if (i === length - 1) {
            slider[i].classList.remove("block");
            slider[i].classList.add("hidden");
            slider[0].classList.remove("hidden");
            slider[0].classList.add("block", "animate-fadeOut");
            break;
          }
          slider[i].classList.remove("block");
          slider[i].classList.add("hidden");
          slider[i + 1].classList.remove("hidden");
          slider[i + 1].classList.add("block", "animate-fadeOut");
          break;
        }
      }
    }, 7000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      id="slider"
      className="w-full h-72 md:h-96 ss:w-3/4 py-auto p-6 xl:pr-40 flex-1"
    >
      <img
        id="homeImg"
        className={`block object-fill w-full h-64 md:h-96 rounded animate-fadeOut`}
        src={st}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={nd}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={rd}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={fo}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={fi}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={si}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={se}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={ei}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={ni}
        alt="Random Landscape Images"
      />
      <img
        id="homeImg"
        className={`hidden object-fill w-full h-64 md:h-96 rounded`}
        src={te}
        alt="Random Landscape Images"
      />
    </div>
  );
};
