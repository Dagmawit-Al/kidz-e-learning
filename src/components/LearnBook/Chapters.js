import React from "react";
import chaptersData from "../../chapters.json";

import Chapter from "../Chapters";

const Chapters = () => {
  return (
    <div>
      <Chapter id={1} chaptersData={chaptersData} />
    </div>
  );
};

export default Chapters;
