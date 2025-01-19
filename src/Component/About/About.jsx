import React from "react";
import image from "/src/assets/logo.jpg";
import { ReactTyped, Typed } from "react-typed";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
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

  //
  return (
    <>
      <div className="container">
        <div className="sm:flex-col lg:grid lg:grid-cols-12 gap-10 mt-3">
          <div className="lg:hidden w-full ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {" "}
              <img className="rounded-xl " src={image} alt="" />
            </motion.div>
          </div>
          <div className=" lg:col-span-8 text-left pt-6 ">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {" "}
              <h3 className="welcome">Welcome to my world</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {" "}
              <h2 className="text-2xl lg:text-4xl font-bold line-clamp-1 spec">
                Hi, I’m
                <span className=" mx-3 text-red-500 lg:text-4xl font-bold">
                  Mohamed Yousef
                </span>
              </h2>{" "}
            </motion.div>

            <h3 className="MyComponent mt-5 text-2xl lg:font-bold lg:text-5xl flex gap-2">
              <span className="text-red-500 "> a </span>
              {MyComponent()}
            </h3>

            <p className="about mt-2 lg:my-10 lg:w-9/12">
              I am Frontend Developer with proficient knowledge in HTML , CSS
              and Javascript , as well as third-party libraries such as jQuery,
              and React js
            </p>

            <div className=" mx-4 mt-10">
              <ul className="flex gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Link to="http://linkedin.com/in/mohamed-yoseef-6084a3254">
                    <li className="icon transition-all  hover:-translate-y-2 ">
                      <div className="">
                        <i className="fa-brands fa-linkedin text-2xl " />
                      </div>
                    </li>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Link to="https://github.com/mohamed-yoseef?tab=repositories">
                    <li className="icon transition-all  hover:-translate-y-2 ">
                      <i className="fa-brands fa-github text-2xl" />
                    </li>
                  </Link>
                </motion.div>
                <button
                  type="button"
                  className="text-white cv hover:-translate-y-3 "
                >
                  <Link to="#">View my Cv</Link>
                  <i className="fa-solid fa-download fa-beat-fade mx-2"></i>
                </button>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {" "}
              <img className="rounded-xl lg:w-full w-1/2" src={image} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
