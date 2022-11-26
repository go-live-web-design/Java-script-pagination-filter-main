import React from "react";

function Banner() {
  return (
    <div className="py-16">
      <h1 className="md:text-8xl text-6xl text-center font-extrabold text-gray-800">
        Rick and Morty Cards
      </h1>
    </div>
  );
}

export default React.memo(Banner);
