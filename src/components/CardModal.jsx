import React from "react";
import { technologies } from "../constants";
import Card1 from "./Card1";
import TechnologyIcons from "./TechnologyIcons";

const CardModal = () => {
  return (
    <>

    {/* <TechnologyIcons/> */}
      <div className="flex flex-wrap justify-center gap-5">
        {technologies.map((technology) => (
 
            <Card1
              text={technology.description}
              title={technology.name}
              imge={technology.icon}
            />
       
        ))}
      </div>
    </>
  );
};

export default CardModal;
