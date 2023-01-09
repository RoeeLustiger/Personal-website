import React from "react";
import myPohoto from "../assents/myphoto.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. My name is Roee Lustiger, Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building Web App! <br />
              There are 3 hings that makes me happy:
              <ul>
                <li> 1.Solve problems with skills and new Technologies</li>
                <li>2.Looking how i can imrove myselfe every single day</li>
                <li> 3.Work in a team and learn from different people</li>
              </ul>
            </p>
            <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={myPohoto} alt="myPohoto" />
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
