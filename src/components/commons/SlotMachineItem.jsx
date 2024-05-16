import React from "react";

const SlotMachineItem = (props) => {
  const { animationDelay, animationName, position } = props;
  return (
    <div className="slot_wrapper">
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_0.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_1.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_2.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_3.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_4.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_5.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_6.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_7.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_8.png"
      />
      <img
        className="slot_item"
        src="https://khanteum.s3.ap-northeast-2.amazonaws.com/image/slotmachine/slot_9.png"
      />
      <style jsx>{`
        .slot_wrapper {
          display: inline-block;
          width: 10%;
          height: 100%;
          transform: translateY(${position * -100}%);
          transition: 1s ease-out;
          animation-name: ${animationName};
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 0.5s;
          animation-delay: ${animationDelay}s;
        }
        .slot_wrapper > .slot_item {
          display: block;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default SlotMachineItem;
