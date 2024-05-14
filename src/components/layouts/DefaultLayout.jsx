import React, { useState } from "react";

import Header from "@/components/layouts/Header";
import Content from "@/components/layouts/Content";
import Gnb from "@/components/layouts/Gnb";

const DefaultLayout = (props) => {
  const { children } = props;
  const [headerHeight, setHeaderHeight] = useState(0);
  const [gnbHeight, setGnbHeight] = useState(0);

  const headerRef = (el) => {
    if (!el) return;
    setHeaderHeight(el.offsetHeight);
  };

  const gnbRef = (el) => {
    if (!el) return;
    setGnbHeight(el.offsetHeight);
  };

  return (
    <div className="container">
      <Header headerRef={headerRef} />
      <Content headerHeight={headerHeight} gnbHeight={gnbHeight}>
        {children}
      </Content>
      <Gnb gnbRef={gnbRef} />
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
