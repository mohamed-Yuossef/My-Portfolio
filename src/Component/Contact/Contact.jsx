import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon2 from "/src/assets/icon2.png";
import { Textarea, TextInput } from "flowbite-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
const ContactForm = () => {
  const notify = () => toast.success("Sent successfully! 'Thank you '");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_el4df69", // ضع معرف الخدمة
        "template_yd4d6gc", // ضع معرف القالب
        form.current,
        "gK_Vocvj0IX6W5p4f" // ضع المفتاح العام
      )
      .then(
        (result) => {
          console.log("تم الإرسال بنجاح", result.text);
        },
        (error) => {
          console.log("خطأ في الإرسال", error.text);
        }
      );
  };

  return (
    <>
      <div>
        <div className="contact1 lg:container mx-auto mt-14">
          <div className="min-card lg:flex lg:gap-5 w-full lg:justify-center my-20 lg:container">
            <div className=" mb-6 lg:w-4/12">
              <h2 className="Contact text-2xl">Contact Info</h2>
              <ul className="my-10">
                <motion.div
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li className="flex items-center gap-3">
                    <div className="icon-box">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="right">
                      <h4 className="text-slate-500">MAIL US</h4>
                      <Link to=" mohamedyoseef@gmail.com">
                        <h5> mohamedyoseef002@gmail.com</h5>
                        <h5> myossef199820@gmail.com</h5>
                      </Link>
                    </div>
                  </li>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li className="flex items-center gap-3 mt-16">
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="right">
                      <h4 className="text-slate-500">Contact Us</h4>

                      <Link className="block" to="tel: 01008233617">
                        +20 01008233617
                      </Link>
                      <a href="tel: 01008233617">+20 01505939305</a>
                    </div>
                  </li>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <li className="flex items-center gap-3 mt-16">
                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="right">
                      <h4 className="text-slate-400">Location</h4>

                      <h5>6th Of October</h5>
                    </div>
                  </li>
                </motion.div>
              </ul>
              <div>
                <h2 className="text-xl">Social Info</h2>
                <ul className="flex items-center gap-5 pt-5">
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
                      <Link to="https://github.com/mohamed-yoseef?tab=repositories">
                        <div className="bounce social-icon    w-16 h-16">
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
                      delay: 2,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <li>
                      <Link to="https://www.instagram.com/mohamed__yoseef?igsh=MTF4OWpldmdubDNuaA%3D%3D&utm_source=qr">
                        <div className="bounce social-icon w-16 h-16">
                          <i className="fa-brands fa-instagram bounce-out-top"></i>
                        </div>
                      </Link>
                    </li>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 2.8,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <li>
                      <Link to="http://linkedin.com/in/mohamed-yoseef-6084a3254">
                        <div className="bounce social-icon w-16 h-16">
                          <i className="fa-brands fa-linkedin bounce-out-top"></i>
                        </div>
                      </Link>
                    </li>
                  </motion.div>
                </ul>
              </div>
            </div>

            <div className="card-2 lg:w-6/12 h-full overflow-hidden">
              <div className="flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h1 className="me p-4 mx-3">
                    Let’s work <span className="text-red-600">together.</span>
                  </h1>
                </motion.div>
                <img className="px-7 mb-5" src={icon2} alt="icon2" />
              </div>

              <div className="form">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="max-w-sm mx-auto "
                >
                  <div className="max-w-xl mb-14">
                    <div className="input">
                      <TextInput
                        name="user_name"
                        id="email4"
                        type="text"
                        className="text-white w-full"
                        placeholder="Your Name..."
                        required
                      />
                    </div>
                  </div>
                  <div className="max-w-xl mb-14">
                    <div className="input">
                      <TextInput
                        name="user_email"
                        id="email4"
                        type="email"
                        className="text-white w-full"
                        placeholder="Your Email..."
                        required
                      />
                    </div>
                  </div>
                  <div className="max-w-lg">
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
                    <button
                    onClick={notify}
                      type="submit"
                      className="bounce-top submit w-full my-5"
                    >
                      SEND MESSAGE <i className="fa-regular fa-paper-plane"></i>
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
