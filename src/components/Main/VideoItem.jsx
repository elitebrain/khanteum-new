import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { convertImage, numberWithKorUnit } from "@/utils/functions";
import {
  DEV_URL,
  PC_VIDEO_THUMBNAIL_HEIGHT,
  PC_VIDEO_THUMBNAIL_WIDTH,
  VIDEO_THUMBNAIL_HEIGHT,
  VIDEO_THUMBNAIL_WIDTH,
} from "@/utils/constant";

const VideoItem = (props) => {
  const {
    lastVideoRef,
    category_level2_no,
    category_level3_no,
    video_no,
    thumbnail,
    count_like,
    count_view,
  } = props;

  const router = useRouter();

  return (
    <div
      className="container"
      ref={lastVideoRef}
      onClick={() =>
        router.push(
          `${DEV_URL}/videos?type=main&season=2024&currentVideoNo=${video_no}&category2No=${category_level2_no}&category3No=${category_level3_no}`
        )
      }
    >
      <Image
        src={convertImage({ url: thumbnail, isOriginal: true })}
        // width={VIDEO_THUMBNAIL_WIDTH}
        // height={VIDEO_THUMBNAIL_HEIGHT}
        alt={`video_${video_no}`}
        style={{ objectFit: "cover" }}
        sizes={`(min-width: 1200px) ${PC_VIDEO_THUMBNAIL_WIDTH}, ${VIDEO_THUMBNAIL_WIDTH}`}
        fill
      />
      <div className="cover">
        <div className="count_wrapper">
          <p className="count_value">{`좋아요 ${numberWithKorUnit(
            count_like
          )}회`}</p>
          <p className="count_value">{`조회수 ${numberWithKorUnit(
            count_view
          )}회`}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: inline-block;
          width: ${VIDEO_THUMBNAIL_WIDTH}px;
          height: ${VIDEO_THUMBNAIL_HEIGHT}px;
          border-radius: 8px;
          overflow: hidden;
          margin-right: 12px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.18);
        }
        .container:hover {
          cursor: pointer;
        }
        .cover {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .cover > .count_wrapper {
          position: absolute;
          left: 10px;
          bottom: 12px;
        }
        .cover > .count_wrapper > p.count_value {
          font-size: 12px;
          font-weight: 400;
          color: #fff;
          line-height: 18px;
        }

        @media (min-width: 1200px) {
          .container {
            width: ${PC_VIDEO_THUMBNAIL_WIDTH}px;
            height: ${PC_VIDEO_THUMBNAIL_HEIGHT}px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoItem;
