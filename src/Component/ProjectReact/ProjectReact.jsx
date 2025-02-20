import React from "react";
import PROJECT1 from "/src/assets/hero img.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShopShow from "/src/assets/ShopShow.jpg"
function ProjectReact() {
  return (
    <>
      <div className="my-32 lg:my-10">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid justify-center items-center">
            <div className=" port min-hover p-5 col-span-3 max-w-md bg-white border-gray-200 rounded-lg shadow-lg ">
              <div className="">
                <div className=" overflow-hidden rounded-md ">
                  <img
                    className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 "
                    src={ShopShow}
                    alt="ShopShow"
                  />
                </div>
                <div className="my-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">
                    FreshCart
                  </h5>
                  <p className="mb-3 font-normal text-gray-500 ">
                    An e-commerce website for shopping in different categories
                    and brands , you can select the product you like in a list
                    and you can add it in cart and purchase visa card and view
                    all orders
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://fresh-cart-five-roan.vercel.app/login">
                        <i className="fa-solid fa-link hover:text-blue-700"></i>
                      </Link>
                      <Link to="https://www.linkedin.com/posts/mohamed-yoseef-6084a3254_frontend-route-ecommerce-activity-7241067783906611201-gy0M?utm_source=share&utm_medium=member_desktop">
                        <i class="fa-brands fa-linkedin-in hover:text-blue-700"></i>
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
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectReact;
