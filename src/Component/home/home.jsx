import React from "react";
import image from "/src/assets/logo.jpg";
import { ReactTyped } from "react-typed";
export default function Home() {
  const MyComponent = () => (
    <div className="">
      <ReactTyped
        strings={["Front-End Developer"]}
        typeSpeed={70}
        backSpeed={70}
        startDelay={500}
        backDelay={800}
        loop
      />
    </div>
  );
  //
  return (
    <div className="mt-20">
      home
      <div className="main-div  md:grid lg:grid-cols-12 gap-5">
        <div className="item1  my-10 md:col-span-6 flex items-center px-4 gap-4 md:gap-7">
          <div className="main-image w-44 col-span-3">
            <img
              className="rounded-tl-2xl rounded-br-2xl w-full "
              src={image}
              alt=""
            />
          </div>
          <div className="text flex-1 ">
            <h3 className="welcome ">Welcome to my world</h3>
            <div className="">
            <h4 className=" font-bold text-xl line-clamp-1 spec">
              Hi, I’m
            </h4>
            <h4 className=" mx-3 text-2xl text-red-500  font-bold">
                Mohamed Yousef
              </h4>
            </div>
            <h3 className="MyComponent mt-4 lg:font-bold text-xl text-slate-500">
              {/* {MyComponent()} */}
              Front-End Developer
            </h3>
          </div>
        </div>
        <div className="item1 my-10 md:col-span-3">
          <div className="text">
            <h1> Hi, I’m Mohamed </h1>
            <h5>Front-End Developer</h5>
          </div>
        </div>
        <div className="item1 my-10 md:col-span-3">
      
          <div className="text">
            <h1> Hi, I’m Mohamed </h1>
            <h5>Front-End Developer</h5>
          </div>
        </div>
        <div className="item1 my-10 md:col-span-4">
      
          <div className="text">
            <h1> Hi, I’m Mohamed </h1>
            <h5>Front-End Developer</h5>
          </div>
        </div>
        <div className="item1 md:col-span-4">
    
          <div className="text">
            <h1> Hi, I’m Mohamed </h1>
            <h5>Front-End Developer</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
