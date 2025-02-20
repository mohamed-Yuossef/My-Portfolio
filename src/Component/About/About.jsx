import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MyLogo from "/src/assets/MyLogo.jpg";
// import icon from "/src/assets/icon.svg";
// import myVideo from "/src/assets/video.mp4";
// import image from "/src/assets/MyLogo.jpg";
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
        <div className="lg:grid lg:grid-flow-col mx-1 lg:relative gap-8 justify-center">
          <div className="item1  lg:sticky lg:top-28 lg:left-0 p-5 py-6 lg:max-h-[500px] shadow-drop-bl lg:col-span-6 flex flex-col items-center justify-center gap-4 md:gap-7">
            <div className="main-image col-span-4 max-h-[250px] max-w-[250px]">
              <img className="flicker-in-1 rounded-full " src={MyLogo} alt="" />
            </div>
            <div className=" m-2 text-center ">
              <h4 className=" text-xl md:text-3xl font-bold myName">
                Mohamed Yousef
              </h4>
              <p className="text-lg">Front End developer</p>
            </div>

            <div className="mt-4">
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
                    <Link to="https://github.com/mohamed-yoseef?tab=repositories">
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
          <div className="lg:col-span-6">
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
                  <h2 className="H2Text mt-10 text-xl md:text-3xl max-w-[450px]">
                    I Develop Skills Regularly to Keep Me Update
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  {" "}
                  <h1 className="my-4 text-2xl">MySkills</h1>{" "}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4 }}
                >
                  {" "}
                  <div className="box">
                    <p>Css</p>
                    <div className="progress-box">
                      <div className="progress-bar">
                        <span className="line-css html-css"></span>
                      </div>
                      <p className="increasing-percentage">95%</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  {" "}
                  <div className="box">
                    <p>JavaScript</p>
                    <div className="progress-box">
                      <div className="progress-bar">
                        <span className="line identifier"></span>
                      </div>
                      <p className="increasing-percentage">90%</p>
                    </div>
                  </div>{" "}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6 }}
                >
                  {" "}
                  <div className="box">
                    <p>React</p>
                    <div className="progress-box">
                      <div className="progress-bar">
                        <span className="line identifier"></span>
                      </div>
                      <p className="increasing-percentage">90%</p>
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
