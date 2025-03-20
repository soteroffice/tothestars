import React from "react";
import { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import Fade from "react-reveal/Fade";
import { IoArrowBack } from "react-icons/io5";
import * as gtag from "@/lib/gtag";

function Index({ businessData = {} }) {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(null);
  const [screen, setScreen] = useState("init");

  const stars = [1, 2, 3, 4, 5];

  const bgFadeClass = `absolute -inset-1 bg-gradient-to-br to-white rounded-lg blur opacity-25 
      ${
        // businessData?.color == "blue"
        //   ? "from-blue-400"
        //   : businessData?.color == "red"
        //   ? "from-red-400"
        //   : businessData?.color == "orange"
        //   ? "from-orange-400"
        //   : businessData?.color == "yellow"
        //   ? "from-yellow-400"
        //   : businessData?.color == "green"
        //   ? "from-green-400"
        //   : businessData?.color == "purple"
        //   ? "from-purple-400"
        //   : businessData?.color == "brown"
        //   ? "from-amber-400"
        //   : "from-white"
        "from-white"
      }
      `;

  useEffect(() => {
    console.log(businessData);
    if (businessData != {}) {
      if (businessData == false) {
        alert("Sorry, this page does not exist.");
        window.location.assign("/");
      }
    }
  }, [businessData]);

  function toGoogleReviews() {
    setScreen("thankYou");
    window.location.assign(businessData.googleReviewUrl);
  }

  function showStar(index) {
    if (hoverRating != null) {
      if (hoverRating >= index) {
        return true;
      }
    }
    if (currentRating >= index) {
      return true;
    }
    return false;
  }
  if (businessData != {}) {
    return (
      <div className="w-full overflow-hidden min-h-screen bg-white relative">
        <div className={bgFadeClass}></div>
        {screen == "init" && (
          <Fade when={screen == "init"} collapse unmountOnExit mountOnEnter>
            <div className="absolute w-full items-center flex flex-col">
              <Fade>
                <img
                  className=" rounded-2xl object-cover h-44 w-44 mt-6  lg:mt-16"
                  alt="business logo"
                  src={businessData.logoUrl}
                />

                <h1 className="text-center mb-2 mt-3">{businessData?.name}</h1>
                <h5 className="text-slate-500 text-center">
                  Thank you for visiting us!
                </h5>
              </Fade>
              <Fade cascade delay={200}>
                <div className="w-full flex justify-center">
                  {stars.map((index) => {
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => {
                          setHoverRating(index);
                        }}
                        onMouseLeave={() => {
                          setHoverRating(null);
                        }}
                        onClick={() => {
                          setCurrentRating(index);
                          gtag.event({
                            action: `star rating: ${index}`,
                            category: `${businessData?.id}`,
                            label: `${businessData?.name}`,
                            value: `${index}`,
                          });
                          if (index >= 4) {
                            toGoogleReviews();
                          } else {
                            setScreen("form");
                          }
                        }}
                        className="text-6xl sm:text-8xl lg:text-9xl"
                      >
                        {showStar(index) ? (
                          <TiStar className=" text-amber-400 hover:scale-110 transition-all" />
                        ) : (
                          <TiStar className=" text-amber-100 hover:scale-110 transition-all" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </Fade>
              <Fade cascade delay={500}>
                <h6 className="text-slate-500 mt-2 text-center">
                  Please let us know how we did.
                </h6>
              </Fade>
            </div>
          </Fade>
        )}
        <Fade when={screen == "form"} collapse>
          <div className="w-full min-h-full flex flex-col">
            <div className="flex justify-center ">
              <div className=" flex relative w-full max-w-2xl">
                <button
                  onClick={() => setScreen("init")}
                  className="text-slate-500 mt-7  absolute left-5 hover:bg-slate-50 p-2 rounded-xl"
                >
                  <IoArrowBack />
                </button>
              </div>
            </div>
            {businessData.googleFormsUrl && (
              <iframe
                src={businessData.googleFormsUrl}
                className="w-full pt-20 h-[600vh]"
                onError={(e) => console.log(e)}
              >
                Loading…
              </iframe>
            )}
          </div>
        </Fade>
        <Fade when={screen == "thankYou"} collapse>
          <div className="w-full h-screen flex flex-col justify-center items-center   ">
            <h1 className="text-center mb-2 mt-3">
              Thank you for your feedback!
            </h1>
            <h5 className="text-slate-500 text-center">
              please leave us a review on Google.
            </h5>
          </div>
        </Fade>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Index;
