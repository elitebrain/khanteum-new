import React, { useState } from "react";

import SlotMachine from "@/components/commons/SlotMachine";
import { MenuIcon } from "@/assets/icons/Menu";
import Menu from "@/components/layouts/Header/Menu";

const Header = ({ headerRef }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="header" ref={headerRef}>
      <SlotMachine />
      <div className="menu_icon_wrapper" onClick={toggleMenu}>
        <MenuIcon isActive={isOpenMenu} />
      </div>
      <Menu isOpenMenu={isOpenMenu} />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 46px;
        }
        .header > h1 {
          font-size: 32px;
        }
        .menu_icon_wrapper {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (min-width: 768px) {
          .header {
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
