import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { Fade } from "react-reveal";
// import { QRCode } from "../../../../";
import Lottie from "react-lottie";
import reviews from "@/public/lottie/reviews";
import QRCodeLottie from "@/public/lottie/QRCode";
import starsLottie from "@/public/lottie/stars";
import success from "@/public/lottie/success";

const slides = [
  {
    title: "Scan the barcode",
    lottie: QRCodeLottie,
    description:
      "The customer scans the barcode in your business to give feedback.",
  },
  {
    title: "Rate their experience",
    lottie: starsLottie,
    description:
      "The customer Rates their experience from 1 to 5 stars using To The stars.",
  },
  {
    title: "Leave a review",
    lottie: reviews,
    description:
      "Positive experiences lead to positive Google reviews, while negative experiences require filling out a separate form that doesn't impact your overall reviews.",
  },
  {
    title: "That's it!",
    lottie: success,
    description: "Accelerate your business's reviews to astronomical levels.",
  },
];

function HowItWorks(props) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const [activeSlide, setActiveSlide] = useState(0);

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    console.log(isLeftSwipe);
    if (isLeftSwipe) {
      setActiveSlide((activeSlide + 1) % slides.length);
    }
    // if (isRightSwipe) {
    //   setActiveSlide(a(activeSlide - 1) % slides.length);
    // }
  };
  console.log((activeSlide - 1) % slides.length);
  //     // step 1 is they scan the barcode
  // step 2 is they rate from 1-5
  // forked:
  //     step 3: go to google reviews if 4-5 stars
  //     step 3: go to the form to collect why the user had a bad experience if 1-3 stars

  return (
    <div
      id="LearnMore"
      className="w-full overflow-hidden py-12 md:py-24 justify-center items-center flex-col flex"
    >
      <h1 className=" font-semibold text-center">Your customer journey</h1>
      <div className="flex flex-col justify-center items-center w-full max-w-6xl p-5">
        <div
          onTouchEnd={onTouchEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          className="relative w-96 h-[31rem] mb-6"
        >
          {slides.map((slide, index) => {
            return (
              <div key={index} className="absolute">
                <Fade
                  when={index == activeSlide}
                  right={index == activeSlide ? true : false}
                  left={index == activeSlide ? false : true}
                  unmountOnExit
                  mountOnEnter
                  collapse
                >
                  <div className="rounded-2xl overflow-hidden  w-96 h-[31rem]">
                    <h6 className="font-medium text-center my-3">
                      {slides.length == index + 1
                        ? "complete"
                        : `Step ${index + 1}`}
                    </h6>
                    <div className=" w-full h-72 ">
                      <Lottie
                        options={{
                          loop: slides.length == index + 1 ? false : true,
                          //   autoplay: true,
                          animationData: slide.lottie,
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid meet",
                          },
                        }}
                      />
                    </div>
                    <h6 className="font-medium text-center my-3">
                      {slide.title}
                    </h6>
                    <p className="font-medium text-center px-[5%]">
                      {slide.description}
                    </p>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setActiveSlide((activeSlide + 1) % slides.length);
          }}
        >
          <h5 className=" text-center flex font-medium items-center hover:text-blue-400 transition-all text-blue-500">
            {slides.length == activeSlide + 1 ? "Restart" : "Next"}
            {/* <IoChevronForward className="mb-[-4px]" /> */}
          </h5>
        </button>
      </div>
    </div>
  );
}

export default HowItWorks;
