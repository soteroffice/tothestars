import React from "react";
import rocketRounded from "@/public/rocketRounded.png";
import { IoChevronForward } from "react-icons/io5";

function About(props) {
  return (
    <div id="LearnMore" className="w-full py-12 md:py-24 justify-center flex">
      <div className="flex flex-col md:flex-row  w-full max-w-6xl p-5 ">
        <div className="w-full justify-center flex items-center md:w-1/2 md:pr-3">
          <img
            alt="logo"
            src={rocketRounded.src}
            className="rounded-xl w-full max-w-md aspect-square"
          />
        </div>
        <div className="w-full md:w-1/2 mt-3 mt:pt-0  justify-center items-center flex flex-col">
          <h3 className="text-center">What is This?</h3>
          <p className="max-w-lg text-center text-shadow-lg mt-1  font-extralight">
            To The Stars Ratings is a business accelerator that uses review
            software to skyrocket ratings and take businesses to new heights.
            Our simple approach uses data analysis and custom-tailored
            strategies to propel companies forward to maximize customer reviews.
            Soar to success with us, and let us help you reach the stars!
          </p>
          <h3 className="text-center mt-6">How You Grow</h3>
          <p className="max-w-lg text-center text-shadow-lg mt-1  font-extralight">
            We separate the positive reviews from the negative reviews and help
            the business resolve the issues with their experience, or help the
            business grow on Google reviews if they had a positive experience.
          </p>
          <div className="flex flex-col sm:flex-row my-6">
            <button
              onClick={() => {
                window.open("/rateme/example", "_blank");
              }}
              className=""
            >
              <h5 className=" text-center mb-2 sm:mb-0 font-light flex items-center hover:text-blue-400 transition-all text-blue-500">
                See Demo
                <IoChevronForward className="mb-[-4px]" />
              </h5>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("GetStarted");
                if (element) {
                  // 👇 Will scroll smoothly to the top of the next section
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="sm:ml-10"
            >
              <h5 className=" text-center flex font-light items-center hover:text-blue-400 transition-all text-blue-500">
                Get Started
                <IoChevronForward className="mb-[-4px]" />
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
