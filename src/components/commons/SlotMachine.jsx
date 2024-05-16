import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import useCommon from "@/utils/hooks/useCommon";
import { numberSplit } from "@/utils/functions";
import SlotMachineItem from "@/components/commons/SlotMachineItem";

const SlotMachine = () => {
  const [animationNames, setAnimationNames] = useState([]);
  const [positions, setPositions] = useState([]);
  const [slotHeight, setSlotHeight] = useState(0);

  const slotItemsRef = useRef();

  const { data, isLoading } = useCommon("/push/all");

  /**
   * 슬롯머신 데이터 셋업
   * @param {number} totalPush
   */
  const setUpSlotData = (totalPush) => {
    // 슬롯머신 숫자판 자릿수
    const SLOT_SIZE = 10;
    const _animationNames = Array(SLOT_SIZE).fill("rolling");
    if (totalPush) {
      const _positions = numberSplit(totalPush);
      const _leftPositions = Array(SLOT_SIZE - _positions.length).fill(0);
      setPositions([..._leftPositions, ..._positions]);
    } else {
      const _positions = Array(SLOT_SIZE).fill(0);
      setPositions(_positions);
    }
    setAnimationNames(_animationNames);
  };

  useEffect(() => {
    if (data?.push) {
      setUpSlotData(data.push);
    }
  }, [data]);

  /**
   * 순차적으로 애니메이션 rolling -> none 처리 핸들러
   * @param {number} idx
   * @param {number} timing
   */
  const handleAnimationName = (idx, timing) => {
    setTimeout(() => {
      setAnimationNames((arr) => {
        const prevArr = arr.filter((_, i) => i < idx);
        const nextArr = arr.filter((_, i) => i > idx);
        return [...prevArr, "none", ...nextArr];
      });
    }, [timing]);
  };

  useEffect(() => {
    positions.forEach((_, idx) => {
      handleAnimationName(positions.length - 1 - idx, 1000 + idx * 150);
    });
  }, [positions]);

  useEffect(() => {
    if (slotItemsRef && slotItemsRef.current) {
      setSlotHeight(slotItemsRef.current.offsetHeight);
    }
  }, [slotItemsRef]);

  return (
    <div className="container">
      <Image
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot-machine-bg.png"
        alt="khanteum_slot_machine_bg"
        fill
      />
      <div className="slot_items" ref={slotItemsRef}>
        {positions.map((position, i) => (
          <SlotMachineItem
            key={i}
            animationDelay={((positions.length - i) * 10) / 1000}
            animationName={animationNames[i]}
            position={position}
          />
        ))}
      </div>
      <style jsx>{`
        .container {
          position: relative;
          width: 170px;
          height: 27px;
        }
        .slot_items {
          position: absolute;
          left: 11.75%;
          top: 15.7%;
          width: 86%;
          height: ${slotHeight === 0 ? "70.37%" : slotHeight + "px"};
          white-space: nowrap;
          overflow: hidden;
        }
        @media (min-width: 320px) {
          .container {
            width: 207px;
            height: 33px;
          }
        }
        @media (min-width: 768px) {
          .container {
            width: 345px;
            height: 55px;
          }
        }
      `}</style>
    </div>
  );
};

export default SlotMachine;
