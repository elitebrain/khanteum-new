import React from "react";

import useLayoutStore from "@/store/useLayoutStore";

const Content = (props) => {
  const { children } = props;

  const { height } = useLayoutStore();
  console.log("height", height);
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          height: calc(${height - 96}px);
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
