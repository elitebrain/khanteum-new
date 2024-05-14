import React from "react";

import useLayoutStore from "@/store/useLayoutStore";

const Content = (props) => {
  const { children, headerHeight, gnbHeight } = props;

  const { height } = useLayoutStore();

  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          height: calc(${height - (headerHeight + gnbHeight)}px);
          overflow-y: auto;
        }
        .container > h1 {
          font-size: 16px;
          color: #000;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Content;
