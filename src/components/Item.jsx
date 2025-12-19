import React from "react";

const Item = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt="" className="relative rounded-3xl h-40 w-40" />
      <p className="relative left-23 w-fit bottom-5 bg-gray-500 text-white rounded-full px-8 py-2">{name}</p>
    </div>
  );
};

export default Item;
