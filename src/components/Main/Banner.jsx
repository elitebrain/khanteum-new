import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { convertImage } from "@/utils/functions";

const Banner = (props) => {
  const { bannerList } = props;

  return (
    <div className="container">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        style={{
          overflow: "initial",
          overflowX: "hidden",
          paddingBottom: "24px",
        }}
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner.banner_no}>
            <div className="banner_wrapper">
              <Image
                src={convertImage({ url: banner.banner_url, isOriginal: true })}
                className="banner"
                alt={`banner_${banner.banner_no}`}
                fill
                sizes={`(min-width: 1920px) 1920px, 100vw`}
                style={{ objectFit: "cover", borderRadius: "20px" }}
                priority
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .container {
          margin-top: 20px;
          padding-bottom: 26px;
        }
        .banner_wrapper {
          position: relative;
          width: 100%;
          height: 398px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Banner;
