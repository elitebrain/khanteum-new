import React, { useEffect, useRef, useState } from "react";

const Content = (props) => {
  const { children } = props;
  const [text, setText] = useState("");

  const contentRef = useRef();

  useEffect(() => {
    if (contentRef?.current) {
      console.log(
        "\ninnerHeight: ",
        window.innerHeight,
        "offsetHeight: ",
        contentRef.current.offsetHeight,
        "\ndiff: ",
        window.innerHeight - contentRef.current.offsetHeight
      );
      setText(
        `innerHeight: ${window.innerHeight} / offsetHeight: ${
          contentRef.current.offsetHeight
        } / diff: ${window.innerHeight - contentRef.current.offsetHeight}`
      );
    }
  }, [contentRef]);

  return (
    <div className="container" ref={contentRef}>
      <h1>{text}</h1>
      {children}
      <style jsx>{`
        .container {
          height: calc(100% - 96px);
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
