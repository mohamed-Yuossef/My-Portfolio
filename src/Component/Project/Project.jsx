import React from "react";
import image from "/src/assets/logo.jpg";
import PROJECT1 from "/src/assets/hero img.jpg";
import { Link, Outlet } from "react-router-dom";
function Project() {
  return (
    <>
      <div className="my-36">
        <p className="Visit">Visit my portfolio and send me your comments</p>
        <h1 className="Project">My Portfolio</h1>
      
        <div className="my-20">
        <div className="grid grid-cols-12 gap-3 w-full ">
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
       <div className="port min-hover p-5 col-span-3 max-w-xs bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <div className="">
         <div className=" overflow-hidden rounded-md ">
          <img className="rounded-t-lg w-full h-64 rounded-lg transition-all hover:scale-105 " src={PROJECT1} alt />
          </div>
          <div className="my-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900">
              BakeShop
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Introduction website for a bakery
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 text-lg">
                <Link to="https://mohamed-yoseef.github.io/project-yummy/">
                  <i className="fa-solid fa-link hover:text-red-600"></i>
                </Link>
                <Link to="https://github.com/mohamed-yoseef/project-yummy">
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
        </div>
     
       </div>
        </div>
     
      </div>
    </>
  );
}

export default Project;
