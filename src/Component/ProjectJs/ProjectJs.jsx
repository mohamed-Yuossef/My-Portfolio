import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "/src/assets/login.jpg";
import events from "/src/assets/events.jpg";
import games from "/src/assets/games.jpg";
import mark from "/src/assets/mark.jpg";
import crud from "/src/assets/crud.png";
import weather from "/src/assets/wither.jpg";
import yummy from "/src/assets/yummy.png";

function ProjectJs() {
  return (
    <>
      <div className="my-32 lg:my-10">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid lg:grid-cols-9 md:grid-cols-6 lg:gap-5 gap-10 items-center justify-center">
            <div className=" col-span-3 max-w-xs ">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="port  border border-slate-600 rounded-md p-1">
                  <div className=" overflow-hidden rounded-md ">
                    {" "}
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={Login}
                      alt
                    />
                  </div>
                  <div className=" my-2 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Login System
                    </h5>
                  
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Login-System/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Login-System">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs ">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port  p-5 border border-slate-600 rounded-md ">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={events}
                      alt="events"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      ُ Egyptian Party
                    </h5>
                  
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/-Egyption-Party/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/-Egyption-Party">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className="col-span-3 max-w-xs ">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
              >
                <div className="port  p-5  border border-slate-600 rounded-md ">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={crud}
                      alt="crud"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      CRUD
                    </h5>
                  
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Crud/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Crud">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port  p-5 border border-slate-600 rounded-md">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={games}
                      alt="games"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      GAMES
                    </h5>
                    
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Game-Over/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Game-Over">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port  p-5  shadow border border-slate-600 rounded-md ">
                  <div className="overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={weather}
                      alt="weather"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Weather App
                    </h5>
                    
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Weather-App/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Weather-App">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs ">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port  p-5  shadow border border-slate-600 rounded-md">
                  <div className=" overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={yummy}
                      alt="yummy"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Yummy
                    </h5>
                   
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Yummy/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Yummy">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
            <div className=" col-span-3 max-w-xs">
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="port  p-5  shadow border border-slate-600 rounded-md">
                  <div className="overflow-hidden rounded-md ">
                    <img
                      className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                      src={mark}
                      alt="mark"
                    />
                  </div>
                  <div className="my-2  ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800">
                      Bookmark
                    </h5>
                  
                  </div>
                  <div className="flex justify-between items-center border border-slate-600 rounded-md mt-1 p-1">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://mohamed-yuossef.github.io/Bookmark-/">
                        <i className="fa-solid fa-link hover:text-red-600 transition-colors"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Bookmark-">
                        <i className="fa-brands fa-github hover:text-red-600 transition-colors"></i>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className=" hover:text-red-800 transition-colors inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg "
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectJs;
