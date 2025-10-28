import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function MyProjects() {
  return (
    <>
      <div className="active-project grid grid-flow-row-dense grid-cols-4 my-14 ">
        <div className="toNav col-span-12 lg:col-span-1">
          <ul className="flex gap-2 lg:gap-6 lg:flex-col  mx-auto w-fit py-4 lg:px-5 ">
            {/* <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <li>
                <NavLink to="" end >Html&Css</NavLink>
              </li>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <li>
                <NavLink to="">JavaScript</NavLink>
              </li>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 2.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <li>
                <NavLink to="projectReact">React</NavLink>
              </li>
            </motion.div>
          </ul>
        </div>
        <div className="grid col-span-full w-[100%] lg:col-span-3 mx-auto overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MyProjects;
