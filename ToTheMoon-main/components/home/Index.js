import React from "react";
import Hero from "./c/Hero";
import BuildAKit from "./c/BuildAKit";
import StripeTest from "./c/StripeTest";
import About from "./c/About";
import Fade from "react-reveal/Fade";
import HowItWorks from "./c/HowItWorks";
function Index(props) {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* <Hero /> */}
      <div className="pt-52 flex w-full flex-col items-center justify-center">
        {/* <Image alt="EyeGrad" className="mb-4" src={BlackLogo} height={42} /> */}
        <Fade>
          <h1 className="line-clamp-2 text-center text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="inline sm:hidden">Boost</span>
            <span className="hidden sm:inline ">Turbocharge</span> your ratings
            <span className=" bg-gradient-to-tl inline-block from-red-500 via-orange-500 to-amber-500 bg-fixed   bg-clip-text pb-2 text-transparent">
              Rise Above the Rest
            </span>
          </h1>
        </Fade>
        <Fade delay={300}>
          <h4 className="mt-8 w-[48rem] max-w-[95%]  text-center text-xl font-medium md:text-2xl">
            We separate positive from negative reviews, empowering you to
            enhance customer experiences. With expertise in resolving issues and
            amplifying positive feedback, we propel your business forward.
            Cultivate a stellar reputation on Google reviews and foster
            exceptional customer satisfaction with our partnership for growth
            and success.
          </h4>
        </Fade>
        <Fade delay={600}>
          <button
            onClick={() => {
              const element = document.getElementById("GetStarted");
              if (element) {
                // 👇 Will scroll smoothly to the top of the next section
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="my-8 rounded-full bg-contrast-900 p-2 px-4 text-lg text-white "
          >
            Get Started
          </button>
        </Fade>
      </div>

      <div className=" rounded-t-xl min-h-screen flex flex-col justify-center">
        {/* <About /> */}
        <HowItWorks />
        <div id="GetStarted" className="w-full min-h-full flex flex-col max- ">
          <h1 className="text-center  font-semibold mt-16">Get Started</h1>

          <h5 className=" text-center mt-3 font-light">
            50 free rounded stickers if you sign up today.
          </h5>
          <h6 className=" text-center">just $119.99/month</h6>

          <StripeTest />
        </div>
      </div>
    </div>
  );
}

export default Index;
