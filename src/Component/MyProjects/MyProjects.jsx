import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function MyProjects() {
  return (
    <>
      <div className=" active-project grid grid-flow-row-dense grid-cols-4 my-14 relative">
        <div className="toNav col-span-12 lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ul className="flex  lg:gap-6 lg:flex-col  mx-auto w-fit py-4 lg:px-5 ">
              <NavLink to="">
                <li>Html&Css</li>
              </NavLink>
              <NavLink to="projectJs">
                <li>JavaScript</li>
              </NavLink>
              <NavLink to="projectReact">
                <li>React</li>
              </NavLink>
            </ul>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MyProjects;
