import React, { useEffect, useState } from "react";
import axios from "axios";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import Banner from "@/components/Main/Banner";
import { VIDEO_LIMIT } from "@/utils/constant";
import RankingList from "@/components/Main/RankingList";
import OfficialVideoList from "@/components/Main/OfficialVideoList";
import VideoList from "@/components/Main/VideoList";

const Main = () => {
  const [bannerList, setBannerList] = useState([]);
  const [rankingList, setRankingList] = useState([]);
  const [officialVideoList, setOfficialVideoList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  /**
   * 배너 목록 조회
   */
  const getBannerList = async () => {
    const { data } = await axios.get(
      "https://api.khanteum.com/api/v2/common/banners"
    );
    if (window.innerWidth < 378) {
      setBannerList(
        data.banners.filter((banner) => banner.type === "mobile_sm")
      );
    } else if (window.innerWidth < 768) {
      setBannerList(data.banners.filter((banner) => banner.type === "mobile"));
    } else {
      setBannerList(data.banners.filter((banner) => banner.type === "pc"));
    }
  };
  /**
   * 메인 데이터 조회 (랭킹목록 | 오피셜 영상 목록 | 카테고리 목록 & 카테고리별 영상 목록)
   */
  const getMainData = async () => {
    const { data } = await axios.get(
      "https://api.khanteum.com/api/v2/main/videos"
    );
    setRankingList(data.rankList);
    setOfficialVideoList(data.officialVideoList);
    setCategoryList(data.categoryList);
    // setVideoList(data);
  };

  /**
   * 카테고리 영상 추가 조회 (Infinite Loading)
   * @param category_level2_no
   * @param offset
   */
  const getMoreVideoList = async ({ category_level2_no, offset }) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.khanteum.com/api/v2/main/videos/${category_level2_no}?offset=${offset}&limit=${VIDEO_LIMIT}`
    );
    setCategoryList((prevState) => {
      const idx = prevState.findIndex(
        (v) => v.category_level2_no === categoryLevel2No
      );
      const prevList = prevState.filter((v, i) => i < idx);
      const nextList = prevState.filter((v, i) => i > idx);
      const newVideoList = [...prevState[idx].videoList, ...data];
      prevState[idx].videoList = newVideoList;
      return [...prevList, prevState[idx], ...nextList];
    });
    setLoading(false);
  };

  useEffect(() => {
    getMainData();
    getBannerList();
  }, []);

  return (
    <DefaultLayout>
      <Banner bannerList={bannerList} />
      <div className="indent_container">
        <RankingList rankingList={rankingList} />
        <OfficialVideoList officialVideoList={officialVideoList} />
        {categoryList.map((category) => (
          <VideoList
            key={category.category_level2_no}
            category_level2_no={category.category_level2_no}
            title={category.category_level2_korean_title}
            linkUrl={`https://m.khanteum.com/category?category_no=${category.category_level2_no}`}
            videoList={category.videoList}
          />
        ))}
      </div>
      <style jsx>{`
        .indent_container {
          padding: 25px;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default Main;
