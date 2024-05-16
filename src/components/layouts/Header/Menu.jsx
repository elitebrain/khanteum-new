import React from "react";

import useLayoutStore from "@/store/useLayoutStore";

const Menu = (props) => {
  const { isOpenMenu } = props;
  const { height, headerHeight, gnbHeight } = useLayoutStore();

  return (
    <div className="container">
      <style jsx>{`
        .container {
          position: absolute;
          top: 46px;
          right: ${isOpenMenu ? "0" : "-100vw"};
          height: ${height - (headerHeight + gnbHeight)}px;
          overflow: hidden;
          overflow-y: auto;
          width: calc(100% - 40px);
          max-width: 400px;
          background-color: #fff;
          border-top-left-radius: 35px;
          z-index: 1000;
          transition: 0.5s ease-in-out;
        }

        @media (min-width: 768px) {
          .container {
            top: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;
