import React from "react";
import PROJECT1 from "/src/assets/hero img.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import coffee from "/src/assets/coffman.jpg";
import chefs from "/src/assets/chefs-3.jpg";
import fokir from "/src/assets/hero img.jpg";
import DevFolio from "/src/assets/hero-bg.jpg";
import Daniels from "/src/assets/hero.jpg";
// import  from "/src/assets/hero-bg.jpg";

function ProjectCss() {
  return (
    <>
      <div className="my-32 lg:my-10">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid lg:grid-cols-9 md:grid-cols-6  lg:gap-5 gap-y-10 items-center justify-center">
            <div className="col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className=" port min-hover p-1 gap-3 hover max-w-xs rounded-lg shadow ">
                  <div className=" overflow-hidden rounded-md ">
                    
                    <img
                      className="rounded-t-lg w-full object-fill h-64 rounded-lg transition-all hover:scale-101 "
                      src={coffee}
                      alt
                    />
                  </div>
                  <div className="my-2 ">
                    <h5 className=" mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Family Bakery
                    </h5>
                    <p className="hoverColor mb-3 font-normal text-gray-500 ">
                      Introduction website for a bakery
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 text-lg">
                        <Link to="https://bake-shop-ruddy.vercel.app/">
                          <i className="fa-solid fa-link hover:text-red-600"></i>
                        </Link>
                        <Link to="https://github.com/mohamed-Yuossef/Bake-Shop">
                          <i className="fa-brands fa-github hover:text-red-600"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className=" hover:text-red-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="port min-hover p-5 rounded-lg shadow">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={chefs}
                      alt
                    />
                  </div>
                  <div className="my-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Mealify
                    </h5>
                    <p className="mb-3 text-gray-700 dark:text-gray-400">
                      A ui website is personal project
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 text-lg">
                        <Link to="https://mohamed-yuossef.github.io/mealify/">
                          <i className="fa-solid fa-link hover:text-red-600"></i>
                        </Link>
                        <Link to="https://github.com/mohamed-Yuossef/mealify">
                          <i className="fa-brands fa-github hover:text-red-600"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className=" hover:text-red-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port min-hover p-5  rounded-lg shadow">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={fokir}
                      alt
                    />
                  </div>
                  <div className="my-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Fokir
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A ui website is personal project
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 text-lg">
                        <Link to="https://mohamed-yuossef.github.io/Fokir/">
                          <i className="fa-solid fa-link hover:text-red-600"></i>
                        </Link>
                        <Link to="https://github.com/mohamed-Yuossef/Fokir">
                          <i className="fa-brands fa-github hover:text-red-600"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className=" hover:text-red-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-span-3 max-w-xs">
              <motion.div
               initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port min-hover p-5  rounded-lg shadow">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={Daniels}
                      alt="Daniels"
                    />
                  </div>
                  <div className="my-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Daniels
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A ui website is personal project
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 text-lg">
                        <Link to="https://mohamed-yuossef.github.io/Daniels/">
                          <i className="fa-solid fa-link hover:text-red-600"></i>
                        </Link>
                        <Link to="https://github.com/mohamed-Yuossef/Daniels">
                          <i className="fa-brands fa-github hover:text-red-600"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className=" hover:text-red-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-span-3 max-w-xs ">
              <motion.div
              initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port rounded-lg shadow  p-5  min-hover">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={DevFolio}
                      alt="DevFolio"
                    />
                  </div>
                  <div className="my-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      BakeShop
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      A ui website is personal project
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3 text-lg">
                        <Link to="https://mohamed-yuossef.github.io/devFolio/">
                          <i className="fa-solid fa-link hover:text-red-600"></i>
                        </Link>
                        <Link to="https://github.com/mohamed-Yuossef/devFolio">
                          <i className="fa-brands fa-github hover:text-red-600"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className=" hover:text-red-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
                        >
                          Read more
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>{" "}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectCss;
