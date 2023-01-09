import React from "react";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-4">
          {/* Cnintiner */}
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check Out some of my recent work</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8">
          <div className="shadow-lg shadow-[#040c16] flex justify-center items-center mx-auto content-div">
            {/* hover Effects */}
            <div>
              <span className="text-4xl font-bold">Coming Soon!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
