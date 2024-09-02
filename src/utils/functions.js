import {
  AWS_DESTINATION_URL,
  CLOUDFRONT_VOD_DESTINATION_PREFIX,
  IMAGE_SERVER,
  NCLOUD_OBJECT_STORAGE_URL,
} from "@/utils/constant";

/**
 * 이미지 url 변환 함수
 * @param url 이미지 주소
 * @param width 리사이즈 너비
 * @param height 리사이즈 높이
 * @param isOriginal 원본 이미지 사용 여부
 */
const convertImage = ({ url, width, height, isOriginal }) => {
  let _url = url;
  if (_url.includes(AWS_DESTINATION_URL)) {
    _url = url.replace(AWS_DESTINATION_URL, CLOUDFRONT_VOD_DESTINATION_PREFIX);
  } else if (_url.includes(NCLOUD_OBJECT_STORAGE_URL)) {
    _url = url.replace(
      NCLOUD_OBJECT_STORAGE_URL,
      `${CLOUDFRONT_VOD_DESTINATION_PREFIX}/backup_ncp`
    );
  } else {
    _url = `${CLOUDFRONT_VOD_DESTINATION_PREFIX}/${url}`;
  }
  if (isOriginal) {
    return _url;
  } else {
    return `${IMAGE_SERVER}?file=${_url}&size=${width}x${height}`;
  }
};

/**
 * 숫자 한자리씩 쪼개서 배열에 담기
 * @param {number} num number
 */
const numberSplit = (num) => {
  const numStr = num.toString().split("");
  const arr = [];
  if (numStr) {
    numStr.forEach((str) => {
      arr.push(+str);
    });
    return arr;
  }
  return [];
};

/**
 * 숫자 세자리 마다 , 표시 적용
 * @param number 변환할 숫자
 */
const numberWithCommas = (number) => {
  if (!number) return 0;
  return number.toLocaleString();
};

/**
 * 만 억 단위 붙이기
 * @param {number} number 변환할 숫자
 */
const numberWithKorUnit = (number) => {
  if (number < 10000) {
    return number;
  } else if (number < 100000) {
    return `${parseInt((number / 10000) * 10) / 10}만`;
  } else if (number < 100000000) {
    return `${parseInt(number / 10000)}만`;
  } else if (number < 1000000000) {
    return `${parseInt((number / 100000000) * 10) / 10}억`;
  } else {
    return `${parseInt(number / 100000000)}억`;
  }
};

export { convertImage, numberSplit, numberWithCommas, numberWithKorUnit };
