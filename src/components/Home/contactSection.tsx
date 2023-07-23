'use client'

import  React, { useRef,useState } from 'react';
import Image from "next/image";
import emailjs from '@emailjs/browser';

const items = [
  { id: 1, icon: "/assets/Icons/smartphone.svg", name: "+8801731-008075" },
  {
    id: 2,
    icon: "/assets/Icons/envelope.svg",
    name: "info@sensohearingdhaka.com",
  },
  {
    id: 3,
    icon: "/assets/Icons/home.svg",
    name: "152/2A-2, Rowshan Tower,(2nd Floor), Green Road Signal,Panthpath, Dhaka-1205, Bangladesh",
  },
];

export default function Contact() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44hjp62', 'template_us9x1vt', form.current, 'UguCX_V3vyUhCTclT')
      .then((result) => {
          form.current.reset();

          setIsFormSubmitted(true);
          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contact" className="bg-gray-100 py-20">
      {/* contact form  */}

      <div className="overflow-hidden">
        <div className="max-w-6xl mx-auto min-h-[682px] relative">
          <div className="relative z-[5] grid gap-5 grid-cols-1 md:grid-cols-2 rounded-lg bg-white text-center shadow">
            <div className="flex flex-col p-4 lg:px-10 lg:pt-10 lg:pb-20">
              <div className="flex items-center">
                <div className="bg-red-700 w-14 h-[3px]"></div>
                <span className="text-theme_blue mx-2 lg:mx-5 text-md lg:text-lg">Say hi,</span>
                <img src="/assets/Icons/Contact/waving.svg" alt="" className="w-5 lg:w-10 animate-bounce" />
              </div>
              <div className="text-start text-xl md:text-5xl font-semibold leading-snug md:leading-none my-2 lg:my-10">
                <p>
                  Let’s <span className="text-red-700">talk</span> about your
                  <span className="text-red-700"> Problem!</span>
                </p>
              </div>
              <div className="text-start text-sm lg:text-xl">
                <p className="text-[#8f8f8f]">
                  We’d love to connect with you to talk about your Problems and
                  possible circumstance!
                </p>
              </div>

              <ul
                role="list"
                className="mt-5 lg:mt-7	text-base lg:text-xl">
                {items.map((item) => (
                  <li key={item.id} className="flex py-2 lg:py-4 items-start">
                    <img src={item.icon} alt="icon" className="mr-5 lg:mr-10 w-5 lg:w-7" />
                    <p className="text-start text-sm lg:text-base">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact form  */}
            <div className="lg:py-10 px-6 sm:px-10 xl:p-12">    
              {isFormSubmitted === true ? <div  className='bg-green-600  text-white rounded-md py-2 flex justify-center items-center'><span>Mail Sent </span>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-4 w-5 h-5 !font-extrabold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
              </span>
            </div> : null}
        
              <form ref={form} onSubmit={sendEmail} method="POST" className="lg:mt-6">
                <div className="lg:my-8">
                  <div className="lg:mt-1 relative">
                    <input
                      type="text"
                      name="user_name"
                      id="first-name"
                      placeholder="Name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                      required
                    />
                    <img
                      className="absolute top-3 right-3"
                      src="/assets/Icons/Contact/user.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="my-8">
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      placeholder="Email"
                      type="email"
                      name="user_email"
                      autoComplete="email"
                      className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                      required
                    />
                    <img
                      className="absolute top-3 right-3"
                      src="/assets/Icons/Contact/mail.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="my-8">
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                      aria-describedby="phone-optional"
                      required
                    />

                    <img
                      className="absolute top-3 right-3"
                      src="/assets/Icons/Contact/phone.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="my-8">
                  <div className="mt-1 relative">
                    <textarea
                      id="message"
                      placeholder="Tell us what you want to know"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm bg-[#F6F6F6]"
                      aria-describedby="message-max"
                      defaultValue={""}
                      required
                    />

                    <img
                      className="absolute top-3 right-3"
                      src="/assets/Icons/Contact/speech.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:flex sm:justify-start ">
                  <button
                    type="submit"
                    className="inline-flex mb-4 lg:mb-0 items-center px-6 py-2 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[#CA0505] absolute rounded-[31px] h-[621px] bottom-5 left-32 w-[91%] z-[3]"></div>

          <div className="bg-red-800 absolute rounded-[31px] h-[621px] bottom-1 left-[200px] w-[84%] z-[2]"></div>
        </div>
      </div>
    </div>
  );
};
