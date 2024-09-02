import React from "react";

import {
  HomeIcon,
  IndexChartIcon,
  ProfileIcon,
  SearchIcon,
  UploadIcon,
} from "@/assets/icons/Gnb";

const Gnb = ({ gnbRef }) => {
  return (
    <nav className="container" ref={gnbRef}>
      <ul>
        <li>
          <div className="icon_wrapper">
            <IndexChartIcon />
          </div>
          <label>인덱스</label>
        </li>
        <li>
          <div className="icon_wrapper">
            <UploadIcon />
          </div>
          <label>업로드</label>
        </li>
        <li>
          <div className="icon_wrapper">
            <HomeIcon />
          </div>
          <label>홈</label>
        </li>
        <li>
          <div className="icon_wrapper">
            <SearchIcon />
          </div>
          <label>검색</label>
        </li>
        <li>
          <div className="icon_wrapper">
            <ProfileIcon />
          </div>
          <label>마이</label>
        </li>
      </ul>
      <style jsx>{`
        .container {
          height: 50px;
          width: 100%;
        }
        .container > ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: normal;
          height: 100%;
        }
        .container > ul > li {
          display: inline-block;
          width: 20%;
          text-align: center;
          font-size: 14px;
          color: #000;
        }
        .container > ul > li > .icon_wrapper {
          font-size: 0;
        }
        .container > ul > li > label {
          font-size: 12px;
        }
      `}</style>
    </nav>
  );
};

export default Gnb;
