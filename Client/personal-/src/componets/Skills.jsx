import React from "react";
import HTML from "../assents/html.png";
import CSS from "../assents/css.png";
import JavaScript from "../assents/css.png";
import ReactImg from "../assents/react.png";
import Node from "../assents/node.png";
import GitHub from "../assents/github.png";
import Tailwind from "../assents/tailwind.png";
import Mongo from "../assents/mongo.png";

const Skills = () => {
  return (
    <div name="skills"  className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Conntainer */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technoglogies I've Worked with :</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Node} alt="Node icon" />
                <p className="my-4">Node JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
                <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
                <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
                <p className="my-4">Mongo DB</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
