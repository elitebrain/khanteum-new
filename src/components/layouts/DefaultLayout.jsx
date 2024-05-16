import React, { useState } from "react";

import Header from "@/components/layouts/Header";
import Content from "@/components/layouts/Content";
import Gnb from "@/components/layouts/Gnb";
import useLayoutStore from "@/store/useLayoutStore";

const DefaultLayout = (props) => {
  const { children } = props;

  const { setHeaderHeight, setGnbHeight, headerHeight, gnbHeight } =
    useLayoutStore();

  const headerRef = (el) => {
    if (!el) return;
    if (el.offsetHeight !== headerHeight) {
      setHeaderHeight(el.offsetHeight);
    }
  };

  const gnbRef = (el) => {
    if (!el) return;
    if (el.offsetHeight !== gnbHeight) {
      setGnbHeight(el.offsetHeight);
    }
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
