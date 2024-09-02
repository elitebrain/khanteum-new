import React from "react";

/**
 * 메뉴 아이콘
 * @param {boolean} isActive 메뉴 활성화 여부
 */
const MenuIcon = ({ isActive }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isActive ? "active" : ""}
    >
      {isActive ? (
        <>
          <rect
            className="close"
            width="23.5702"
            height="4.71404"
            rx="2"
            transform="matrix(0.707108 -0.707106 0.707108 0.707106 0.5 17.1665)"
            fill="#929292"
          />
          <rect
            className="close"
            width="23.5702"
            height="4.71404"
            rx="2"
            transform="matrix(0.707108 0.707106 -0.707108 0.707106 3.83334 0.5)"
            fill="#929292"
          />
        </>
      ) : (
        <>
          <rect className="menu" width="20" height="4" rx="2" fill="#929292" />
          <rect
            className="menu"
            y="8"
            width="20"
            height="4"
            rx="2"
            fill="#929292"
          />
          <rect
            className="menu"
            y="16"
            width="20"
            height="4"
            rx="2"
            fill="#929292"
          />
        </>
      )}
      <style jsx>{`
        svg:hover {
          cursor: pointer;
        }
        svg > rect.menu:nth-child(1) {
          animation: menu-top 0.4s forwards;
        }
        svg > rect.menu:nth-child(3) {
          animation: menu-bottom 0.4s forwards;
        }
        svg > rect.close:nth-child(1) {
          animation: close-top 0.4s forwards;
        }
        svg > rect.close:nth-child(2) {
          animation: close-bottom 0.4s forwards;
        }
        @keyframes menu-top {
          from {
            transform: translateY(8px);
          }
          to {
            transform: translateY(0px);
          }
        }
        @keyframes menu-bottom {
          from {
            transform: translateY(-8px);
          }
          to {
            transform: translateY(0px);
          }
        }
        @keyframes close-top {
          from {
            transform: translateY(calc(50% - 2px)) rotate(0deg);
          }
          to {
            transform: matrix(
              0.707108,
              0.707106,
              -0.707108,
              0.707106,
              3.83334,
              0.5
            );
          }
        }
        @keyframes close-bottom {
          from {
            transform: translateY(calc(50% - 2px)) rotate(0deg);
          }
          to {
            transform: matrix(
              0.707108,
              -0.707106,
              0.707108,
              0.707106,
              0.5,
              17.1665
            );
          }
        }
      `}</style>
    </svg>
  );
};

export default MenuIcon;
