import React from "react";
import { useParams } from "react-router-dom";

const SocialMedia = () => {
  const { platform } = useParams();

  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com",
  };
  if (platform === null) {
  return (
    <div>
      {socialMediaLinks[platform] && (
        <p>
          {platform.charAt(0).toUpperCase() + platform.slice(1)}
          <a
            href={socialMediaLinks[platform]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialMediaLinks[platform]}
          </a>
        </p>
      )}
    </div>
  );
}
}

export default SocialMedia;
