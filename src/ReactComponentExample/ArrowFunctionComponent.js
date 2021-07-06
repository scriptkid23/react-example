import React from "react";
import Avatar from "../assets/image.png";

const ArrowFunctionComponent = () => {
  return (
    <div
      className="anonymous-function-component flex-fill"
      onClick={() => alert("Hi! I'm Lily")}
    >
      <img src={Avatar} alt="avatar" className="rounded-circle" />
    </div>
  );
};
export default ArrowFunctionComponent;
