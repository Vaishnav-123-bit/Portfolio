import React from "react";

const Card1 = ({ title, text, imge }) => {
  return (
    <div className="w-[150px]  sm:w-[175px]  max-w-full m-3 p-3 rounded-lg bg-gradient-to-br from-[#202636] via-[#1C2235] to-[#485065] text-white shadow-xl hover:scale-105 hover:shadow-[#1C2235] transition-transform duration-300">
      {/* Image and Title in One Line */}
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-white p-1 rounded-full shadow-md">
          <img src={imge} alt="icon" className="w-[28px] h-[28px] rounded-full" />
        </div>
        <h3 className="text-md font-semibold">{title}</h3>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/40 w-[70%] mx-auto mb-1"></div>

      {/* Description */}
      <p className="text-xs text-center px-1 leading-tight">{text}</p>
    </div>
  );
};

export default Card1;
