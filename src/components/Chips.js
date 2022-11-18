// React
import React from "react";

const Chips = ({ filteredImages, activeChip, setActiveChip }) => {
  let tags = [];
  // For each image, looping through the tags and if the tag is not already in the tags varible, including it
  if (filteredImages.length) {
    filteredImages.forEach((img) => {
      img.tags.forEach((tag) => {
        if ([...tags].every((obj) => obj !== tag.title)) {
          tags = [...tags, tag.title];
        }
      });
    });
  }
  // Sorting the tags alphabetically
  let sortedTags = tags.sort();

  const changeColor = (e) => {
    if (e.currentTarget.classList.contains("bg-gray-800" && "text-gray-400")) {
      e.currentTarget.classList.remove("bg-gray-800", "text-gray-400");
      e.currentTarget.classList.add("bg-gray-300", "text-mainColor");
    } else {
      e.currentTarget.classList.remove("bg-gray-300", "text-mainColor");
      e.currentTarget.classList.add("bg-gray-800", "text-gray-400");
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-2 w-full px-4">
      {sortedTags.map((tag) => (
        <span
          onClick={(e) => {
            // Changing the colors from the selected Chips
            changeColor(e);
            // Setting the activeChips array to include the ones that are currently selected
            activeChip.includes(tag)
              ? setActiveChip(activeChip.filter((t) => t !== tag))
              : setActiveChip([...activeChip, tag]);
          }}
          key={tag}
          className="px-3 py-1 md:px-4 md:py-2 capitalize rounded-full bg-gray-800 text-gray-400 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Chips;
