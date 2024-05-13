import React from "react";

const Content = (props) => {
  const { children } = props;
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          height: calc(100% - 96px);
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Content;
