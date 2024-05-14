import React from "react";

const Header = ({ headerRef }) => {
  return (
    <div className="header" ref={headerRef}>
      <h1>Header</h1>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 46px;
          background: rgba(255, 0, 0, 0.6);
        }
        .header > h1 {
          font-size: 32px;
        }
      `}</style>
    </div>
  );
};

export default Header;
