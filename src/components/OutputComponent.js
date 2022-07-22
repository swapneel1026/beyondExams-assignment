import React from "react";
import "../components/OutputComponent.css";
import video from "../ass/Add Subtitles to Video.mov";

const OutputComponent = ({ is }) => {
  return (
    <div className="OutputComponent">
      <video src={video} height="50%" width="100%" controls />
      <div className="livecaption">{is}</div>
    </div>
  );
};

export default OutputComponent;
