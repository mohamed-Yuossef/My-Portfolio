import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MyLogo from "/src/assets/Muhamed 3.png";
import TechMarquee from "../TechMarquee/TechMarquee";

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
        <div className="lg:grid lg:grid-flow-col items-start mx-1 lg:relative gap-8 justify-center mt-12">
          <div className="item1  lg:fixed z-50 lg:top-0 lg:left-0 bottom-0 m-[30px] md:px-[30px]  shadow-drop-bl lg:col-span-6 flex flex-col items-center justify-center gap-4 md:gap-7">
            <div className="main-image col-span-4 max-h-[280px] max-w-[280px]">
              <img className="flicker-in-1 rounded-full " src={MyLogo} alt="" />
            </div>
            <div className=" m-2 text-center ">
              <h4 className=" text-xl md:text-3xl font-bold myName">
                Mohamed Youssef
              </h4>
              <p className="text-lg">Front End developer</p>
            </div>

            <div className="my-7">
              <ul className="flex justify-center gap-3 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li>
                    <Link to="https://github.com/mohamed-Yuossef">
                      <div className="bounce social-icon  w-11 h-11  md:w-14 md:h-14">
                        <i className="fa-brands fa-github text-2xl bounce-out-top" />
                      </div>
                    </Link>
                  </li>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li>
                    <Link to="http://linkedin.com/in/mohamed-yoseef-6084a3254">
                      <div className="bounce social-icon w-11 h-11  md:w-14 md:h-14">
                        <i className="fa-brands fa-linkedin bounce-out-top"></i>
                      </div>
                    </Link>
                  </li>
                </motion.div>
                {/*  */}
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li>
                    <Link to="https://www.instagram.com/mohamed__yoseef?igsh=MTF4OWpldmdubDNuaA%3D%3D&utm_source=qr">
                      <div className="bounce social-icon  w-11 h-11  md:w-14 md:h-14">
                        <i className="fa-brands fa-instagram bounce-out-top "></i>
                      </div>
                    </Link>
                  </li>
                </motion.div>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-6 overflow-hidden lg:ml-[30%]">
            <div className="">
              <div className=" lg:col-span-6 text-left pt-6 md:px-9">
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
                  <h2 className="text-2xl lg:text-4xl font-bold line-clamp-1 spec ">
                    Hi, I’m
                    <span className=" mx-3 text-red-500 lg:text-4xl font-bold myName">
                      Mohamed Yousef
                    </span>
                  </h2>{" "}
                </motion.div>

                <h3 className="MyComponent mt-5 text-xl lg:font-bold lg:text-3xl flex gap-2">
                  <span className="text-red-500 "> a </span>
                  {MyComponent()}
                </h3>

                <p className="about mt-2 lg:my-5 lg:w-9/12">
                  I am Frontend Developer with proficient knowledge in HTML ,
                  CSS and Javascript , as well as third-party libraries such as
                  jQuery, and React js
                </p>
              </div>
              {/* <div className="hidden lg:flex lg:col-span-5 bounce-top">
                <DotLottieReact
                  className=""
                  src="https://lottie.host/2393ab28-039f-4e51-a7ad-8d1131cd9e9b/ftpWOjdom6.lottie"
                  loop
                  autoplay
                />
              </div> */}
            </div>
            <div className="">
              <div className="col-span-5 md:col-span-6  pt-6 md:px-9">
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >
                  <h2 className="H2Text mt-5 text-xl md:text-3xl max-w-[450px]">
                    I Develop Skills Regularly to Keep Me Update
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  {" "}
                  <h1 className="my-4 text-2xl">MySkills</h1>
                  <div className="flex justify-center px-4">
                    <TechMarquee />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  <div>
                    {" "}
                    <div className="box">
                      <p>HTML</p>
                      <div className="progress-box">
                        <div className="progress-bar">
                          <span className="line-css html-css"></span>
                        </div>
                        <p className="increasing-percentage">95%</p>
                      </div>
                    </div>{" "}
                    <div className="box">
                      <p>Css</p>
                      <div className="progress-box">
                        <div className="progress-bar">
                          <span className="line-css html-css"></span>
                        </div>
                        <p className="increasing-percentage">95%</p>
                      </div>
                    </div>
                    <div className="box">
                      <p>JavaScript</p>
                      <div className="progress-box">
                        <div className="progress-bar">
                          <span className="line identifier"></span>
                        </div>
                        <p className="increasing-percentage">90%</p>
                      </div>
                    </div>{" "}
                    <div className="box">
                      <p>React</p>
                      <div className="progress-box">
                        <div className="progress-bar">
                          <span className="line identifier"></span>
                        </div>
                        <p className="increasing-percentage">90%</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
