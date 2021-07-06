import React from "react";
import Avatar from "../assets/Tomas.png";
export default function FunctionComponent() {
  return (
    <div
      className="function-component flex-fill"
      onClick={() => alert("Hi! I'm Tomas")}
    >
      <img src={Avatar} alt="avatar" className="rounded-circle" />
    </div>
  );
}
