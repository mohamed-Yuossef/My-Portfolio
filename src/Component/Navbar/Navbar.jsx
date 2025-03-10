import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import MyLogo from "/src/assets/Muhamed 1.png";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 shadow-md bg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={MyLogo}
                className="w-12 h-12 rounded-full bg-cover"
                alt=" Logo"
              />
            </motion.div>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white md:hidden"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className={`nav1 items-center justify-between  w-full md:flex md:w-auto md:order-1 transition-all ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <ul
              className={`nav-active flex flex-col p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 `}
            >
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className="NavLink  font-bold block py-1 px-5 "
                    aria-current="page"
                    onClick={handleNavClick}
                  >
                    About
                  </NavLink>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                {" "}
                <li>
                  <NavLink
                    to="myProjects"
                    className="NavLink font-bold block  py-1 px-5 "
                    onClick={handleNavClick}
                  >
                    Projects
                  </NavLink>
                </li>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                {" "}
                <li>
                  <NavLink
                    to="Contact"
                    className="NavLink font-bold block   py-1 px-5 "
                    onClick={handleNavClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </motion.div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
