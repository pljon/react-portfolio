import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorkItems";

const Works = () => {
  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
            return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
