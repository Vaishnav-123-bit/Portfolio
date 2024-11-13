import React from "react";
import { FaDownload } from "react-icons/fa"; 
// import resume from "../assets/vaishnav tcet resume (2).pdf"
const HireMe = () => {
  const handleDownload = () => {
    // const pdfPath = '';
    const pdfPath = '/vaishnav tcet resume (2).pdf';

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="fixed flex -left-4 bottom-2 sm:left-2 sm:bottom-4 items-center justify-center overflow-hidden z-30">
    <div className="w-48 h-auto flex items-center justify-center relative  border-[#915EFF] rounded-full">
      <button 
        onClick={handleDownload} 
        className="m-2 w-24 h-24 flex flex-col items-center justify-center rounded-full bg-[#915EFF] text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
      >
        <FaDownload className="text-[40px] mb-1" />
        <span className="font-bold text-sm">Resume</span>
      </button>
    </div>
  </div>
  
  );
};

export default HireMe;
