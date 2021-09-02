import React from "react";

const SocialMediaIcons = ({ link, icon, description, className }) => {
  return (
      <div className="social-media-flex">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <img className={className} src={icon} alt={description} />
        </a>
      </div>
  );
};
export default SocialMediaIcons;
