import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShopShow from "/src/assets/ShopShow.jpg";
import myStore from "/src/assets/Home-6-Slider-2.png";
function ProjectReact() {
  return (
    <>
      <div className="my-32 lg:my-10">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid lg:grid-cols-9 md:grid-cols-6 lg:gap-5 gap-10 items-center justify-center">
            <div className=" port col-span-4   p-5  bg-white border-gray-200 rounded-lg shadow-lg ">
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
                    Fresh Cart
                  </h5>
                  <p className="mb-3 font-normal text-gray-500 ">
                    An e-commerce website for shopping in different categories
                    and brands , you can select the product you like in a list
                    and you can add it in cart and purchase visa card and view
                    all orders
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://fresh-cart-5jic.vercel.app/register">
                        <i className="fa-solid fa-link hover:text-blue-700"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/Fresh-Cart">
                        <i className="fa-brands fa-linkedin-in hover:text-blue-700"></i>
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
            <div className=" port col-span-4  p-5  bg-white border-gray-200 rounded-lg shadow-lg ">
              <div className="">
                <div className=" overflow-hidden rounded-md ">
                  <img
                    className="rounded-t-lg w-full h-64 object-center rounded-lg transition-all hover:scale-105 "
                    src={myStore}
                    alt="myStore"
                  />
                </div>
                <div className="my-2">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">
                    My Store
                  </h5>
                  <p className="mb-3 font-normal text-gray-500 ">
                    An e-commerce website for shopping in different categories
                    and brands , you can select the product you like in a list
                    and you can add it in cart and purchase visa card and view
                    all orders
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-lg">
                      <Link to="https://my-store-d4qx.vercel.app/">
                        <i className="fa-solid fa-link hover:text-blue-700"></i>
                      </Link>
                      <Link to="https://github.com/mohamed-Yuossef/My-Store">
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
