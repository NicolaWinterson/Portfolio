import React from "react";

const PortfolioItem = ({ imgsrc, alt, link }) => {
  return (
    <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                className="flexchild--image"
                src={imgsrc}
                alt={alt}
            />
          </a>
    </div>
  );
};

export default PortfolioItem;