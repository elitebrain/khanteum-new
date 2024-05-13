import React from "react";

import Header from "@/components/layouts/Header";
import Content from "@/components/layouts/Content";
import Gnb from "@/components/layouts/Gnb";

/**
 *
 * @param children any
 */
const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <Header />
      <Content>{children}</Content>
      <Gnb />
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          background: #fff;
          font-size: 0;
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
