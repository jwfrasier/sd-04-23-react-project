import React from "react";

const Tournament = ({ tournamentImages }) => {
  return (
    <div>
      {tournamentImages.map((images) => (
        <div className="product-card" key={images.image}>
          <img src={images.image} alt="photo" />
        </div>
      ))}
    </div>
  );
};

export default Tournament;
