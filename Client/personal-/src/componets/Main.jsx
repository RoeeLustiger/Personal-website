import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Main = () => {
  const handleClickToWork = () => {
    <Link to="work" smooth={true} duration={500}></Link>;
  };

  return (
    <div name="main" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-4xl font-bold">Hi, My name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Roee Lustiger
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Full Stack developer with a passion to code and build responsive Web
          Applications and to new technologies! I'm focused on FrontEnd
          Development with SEO expriense
        </p>
        <div>
          <button
            onClick={handleClickToWork}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
