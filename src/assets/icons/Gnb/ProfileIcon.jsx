import React from "react";

/**
 * GNB - 프로필(마이 페이지) 아이콘
 */
const ProfileIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.5" stroke="#919191" />
      <circle cx="12" cy="9" r="3.5" stroke="#919191" />
      <mask
        id="mask0_567_1051"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <circle cx="12" cy="12" r="9.5" fill="#D9D9D9" stroke="#919191" />
      </mask>
      <g mask="url(#mask0_567_1051)">
        <path
          d="M23.5 24C23.5 29.1652 18.4405 33.5 12 33.5C5.5595 33.5 0.5 29.1652 0.5 24C0.5 18.8348 5.5595 14.5 12 14.5C18.4405 14.5 23.5 18.8348 23.5 24Z"
          stroke="#919191"
        />
      </g>
    </svg>
  );
};

export default ProfileIcon;
