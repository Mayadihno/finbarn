import React from "react";

const BannerImage = ({ item: { image, textBig, textSmall } }) => {
  return (
    <React.Fragment>
      <div className="items">
        <img src={image} alt="" />
        <div className="text">
          <h2>{textBig}</h2>
          <div className="spanButton">
            <h5>{textSmall}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerImage;
