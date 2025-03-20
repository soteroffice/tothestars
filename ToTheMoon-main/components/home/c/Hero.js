import React, { useRef, useState, useEffect } from "react";
import toTheMoonArt from "@/public/toTheMoon.png";
import { TiStar } from "react-icons/ti";
import { Toolbar } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Fade } from "react-reveal";
import { IoChevronForward } from "react-icons/io5";
import Lottie from "react-lottie";
import reviewReviews from "@/public/reviewReviews";
import gsap from "gsap";
import Music from "./BackgroundNightSound";
// const BgToolTip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     //   backgroundColor: "white",
//     backgroundColor: "rgba(255,255,255,0)",
//     backdropFilter: "blur(10px)",
//     boxShadow: theme.shadows[5],
//     paddingLeft: 0,
//     paddingRight: 0,
//     borderRadius: "0.75rem",
//   },
//   [`& .${tooltipClasses.arrow}`]: {
//     color: "rgba(0,0,0,.3)",
//   },
// }));

function Hero(props) {
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [playMusic, setPlayMusic] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const heroRef = useRef();

  useEffect(() => {
    if (heroRef.current) {
      setHeight(heroRef.current.offsetHeight);
      setWidth(heroRef.current.offsetWidth);
    }
  }, [heroRef.current]);

  return (
    <div
      ref={heroRef}
      className="w-full relative flex min-h-[85vh]  textShadow text-white"
    >
      <div className=" inset-0 absolute">
        <Starscape width={width} height={height} />
      </div>
      <div className="z-10  flex flex-col items-center mt-5 md:mt-32 w-full h-full p-2">
        <Fade top>
          <h1 className="text-center font-semibold">To The Stars Ratings</h1>
          <h3 className=" text-center mt-3 font-light">Reach The Stars.</h3>
        </Fade>
        <Fade>
          <div className="flex  my-6">
            <button
              onClick={() => {
                // if (playMusic) setPlayMusic(false);
                // else setPlayMusic(true);
                const element = document.getElementById("LearnMore");
                if (element) {
                  // 👇 Will scroll smoothly to the top of the next section
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className=""
            >
              <h4 className="text-center mb-0 font-light flex items-center hover:text-blue-400 transition-all text-blue-500">
                Learn more
                <IoChevronForward className="mb-[-4px]" />
              </h4>
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("GetStarted");
                if (element) {
                  // 👇 Will scroll smoothly to the top of the next section
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="ml-10"
            >
              <h4 className=" text-center flex items-center hover:text-blue-400 transition-all text-blue-500">
                Get Started
                <IoChevronForward className="mb-[-4px]" />
              </h4>
            </button>
          </div>
        </Fade>
        <Fade delay={700} cascade>
          <div className="text-6xl sm:text-8xl lg:text-9xl flex flex-row">
            <TiStar className=" text-amber-300  hover:scale-110 transition-all" />
            <TiStar className=" text-amber-300  hover:scale-110 transition-all" />
            <TiStar className=" text-amber-300  hover:scale-110 transition-all" />
            <TiStar className=" text-amber-300  hover:scale-110 transition-all" />
            <TiStar className=" text-amber-300  hover:scale-110 transition-all" />
          </div>
        </Fade>
        <Fade delay={1000}>
          <Lottie
            options={{
              loop: true,
              //   autoplay: true,
              animationData: reviewReviews,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={300}
            width={300}
          />
        </Fade>
        {/* <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <BgToolTip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              title={
                <>
                  <div className="p-2">
                    <button
                      className="p-2 w-full backdrop-blur-md rounded-lg font-semibold bg-black/30"
                      onClick={() =>
                        (window.location = "mailto:tothemoonratings@gmail.com")
                      }
                    >
                      Email
                    </button>
                    <button
                      className="p-2 w-full  mt-2 backdrop-blur-md rounded-lg font-semibold bg-black/30"
                      onClick={() => (window.location = "sms:1-385-283-1186")}
                    >
                      Text
                    </button>
                  </div>
                </>
              }
            >
              <button
                className="p-2 w-48 mt-5 backdrop-blur-md rounded-lg font-semibold bg-white/10"
                onClick={handleTooltipOpen}
              >
                Contact Us
              </button>
            </BgToolTip>
          </div>
        </ClickAwayListener>
        <button
          className="p-2 w-48 mt-5 backdrop-blur-md rounded-lg  text-primary-100 font-semibold bg-black/20"
          onClick={() => {
            window.location.assign("/rateme/example");
          }}
        >
          See Example
        </button> */}
      </div>
      {playMusic && <Music />}
    </div>
  );
}

export default Hero;

const Starscape = ({
  densityRatio = 0.7,
  sizeLimit = 5,
  defaultAlpha = 0.2,
  scaleLimit = 2,
  proximityRatio = 0.2,
  height,
  width,
}) => {
  const canvasRef = React.useRef(null);
  const contextRef = React.useRef(null);
  const starsRef = React.useRef(null);
  const vminRef = React.useRef(null);
  const scaleMapperRef = React.useRef(null);
  const alphaMapperRef = React.useRef(null);
  const canvas = canvasRef.current;

  React.useEffect(() => {
    if (height && width) {
      contextRef.current = canvasRef.current.getContext("2d");
      const LOAD = () => {
        vminRef.current = Math.min(height, width);
        const STAR_COUNT = Math.floor(vminRef.current * densityRatio);
        scaleMapperRef.current = gsap.utils.mapRange(
          0,
          vminRef.current * proximityRatio,
          scaleLimit,
          1
        );
        alphaMapperRef.current = gsap.utils.mapRange(
          0,
          vminRef.current * proximityRatio,
          1,
          defaultAlpha
        );
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
          x: gsap.utils.random(0, width, 1),
          y: gsap.utils.random(0, height, 1),
          size: gsap.utils.random(1, sizeLimit, 1),
          scale: 1,
          alpha: gsap.utils.random(0.1, defaultAlpha, 0.1),
        }));
      };
      const RENDER = () => {
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        starsRef.current.forEach((star) => {
          contextRef.current.fillStyle = `hsla(0, 100%, 100%, ${star.alpha})`;
          contextRef.current.beginPath();
          contextRef.current.arc(
            star.x,
            star.y,
            (star.size / 2) * star.scale,
            0,
            Math.PI * 2
          );
          contextRef.current.fill();
        });
      };

      const UPDATE = ({ x, y }) => {
        y = y + window.scrollY;
        starsRef.current.forEach((STAR) => {
          const DISTANCE = Math.sqrt(
            Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2)
          );
          gsap.to(STAR, {
            scale: scaleMapperRef.current(
              Math.min(DISTANCE, vminRef.current * proximityRatio)
            ),
            alpha: alphaMapperRef.current(
              Math.min(DISTANCE, vminRef.current * proximityRatio)
            ),
          });
        });
      };
      const EXIT = () => {
        gsap.to(starsRef.current, {
          scale: 1,
          alpha: defaultAlpha,
        });
      };
      LOAD();
      gsap.ticker.fps(24);
      gsap.ticker.add(RENDER);

      // Set up event handling
      canvas.addEventListener("resize", LOAD);
      document.addEventListener("mousemove", UPDATE);
      document.addEventListener("onTouchMove", UPDATE);

      canvas.addEventListener("mouseleave", EXIT);
      return () => {
        canvas.removeEventListener("resize", LOAD);
        document.removeEventListener("mousemove", UPDATE);
        document.removeEventListener("onTouchMove", UPDATE);

        canvas.removeEventListener("mouseleave", EXIT);
        gsap.ticker.remove(RENDER);
      };
    }
  }, [height, width]);

  return (
    <canvas
      className="absolute h-full w-full inset-0 "
      ref={canvasRef}
    ></canvas>
  );
};
