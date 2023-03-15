import React from "react";

const Shimmer = () => {
  return (
    <div className="p-2 my-10 flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-64 h-64 bg-gray-400 m-5"></div>
        ))}
    </div>
  );
};

export default Shimmer;
