import React, { useRef } from "react";
import contact from "/src/assets/contact.jpg";
import { Link } from "react-router-dom";
import { Label, Textarea, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { animate } from "framer-motion";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

function FormComponent() {
  return (
    <div>
      <div className="contact1 lg:container mx-auto mt-14">
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="me">Contact With Me</h1>
        </motion.div>

        <div className="min-card lg:flex lg:gap-5 w-full lg:justify-center my-20 lg:container">
          <div className="card-1 mb-6 lg:w-5/12 justify-center h-9">
            <div className="card-imag flex justify-center items-center overflow-hidden rounded-lg">
              <img
                src={contact}
                className="hover:scale-110 transition-all lg:h-[150px] lg:w-[100%] object-cover "
                alt=""
              />
            </div>
            <div className="card-text">
              <h2 className="font-bold mt-2 drop-shadow-xl">Developer</h2>
              <p>
                Contact me for more information and Get notified when I publish
                something new
              </p>

              <div className="flex flex-col">
                <h4 className="text-left ">
                  Phone:{" "}
                  <span className="span hover:text-red-500 transition-all">
                    <a href="tel: 01008233617">01008233617</a>{" "}
                  </span>
                </h4>
                <h4 className="text-left">
                  Email:{" "}
                  <span className="span hover:text-red-500 transition-all">
                    <a href="mailto:mohamedyoseef@gmail.com">
                      mohamedyoseef@gmail.com
                    </a>{" "}
                  </span>
                </h4>
              </div>
            </div>
            <div className="card-icon">
              <div className=" mx-4 mt-2">
                <ul className="flex gap-8">
                  <Link to="http://linkedin.com/in/mohamed-yoseef-6084a3254">
                    <li className="icon transition-all  hover:-translate-y-2 ">
                      <div className="">
                        <i className="fa-brands fa-linkedin text-2xl " />
                      </div>
                    </li>
                  </Link>
                  <Link to="https://github.com/mohamed-yoseef?tab=repositories">
                    <li className="icon transition-all  hover:-translate-y-2 ">
                      <i className="fa-brands fa-github text-2xl" />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-2 lg:w-6/12 h-full">
            <div className="form">
              <form
               
                className="max-w-sm mx-auto "
              >
                <div className="max-w-md mb-14">
                  <div className="input">
                    <TextInput
                      name="user_name"
                      id="email4"
                      type="email"
                      className="text-white w-full"
                      placeholder="mohamedyoseef002@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="max-w-md">
                  <div className="input">
                    <Textarea
                      name="message"
                      id="comment"
                      placeholder="Your Message..."
                      required
                      rows={10}
                    />
                  </div>
                </div>
                <div className=" w-full">
                  <button type="submit" className="submit w-full my-5">
                    SEND MESSAGE <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
