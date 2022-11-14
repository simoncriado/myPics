import React, { useEffect, useState } from "react";

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

const imagesArr = [st, nd, rd, fo, fi, si, se, ei, ni, te];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let description = "test1";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imagesArr.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 7000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-50 md:h-96 py-auto p-6 flex-1 ">
      <img
        id="homeImg"
        className={`object-fill w-full h-50 md:h-96 rounded duration-700 ease-in`}
        src={imagesArr[currentIndex]}
        alt={description}
      />
    </div>
  );
};
