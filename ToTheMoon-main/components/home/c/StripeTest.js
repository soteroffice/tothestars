import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { Tooltip } from "@mui/material";
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function PreviewPage() {
  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);

  const [name, setName] = useState("");
  const [alertName, setAlertName] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [alertPhoneNumber, setAlertPhoneNumber] = useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { success, canceled } = router.query;

  function validateForm() {
    var emailValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!emailValid) {
      setAlertEmail(true);
      return;
    }
    if (name.trim() == "") {
      setAlertName(true);
      return;
    }
    return "good";
  }

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout_sessions", {
      data: {
        email: email,
        name: name,
        phoneNumber: phoneNumber,
      },
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <div className="w-full flex justify-center mb-60 mt-10">
      <div
        className="w-full  max-w-3xl  flex flex-col items-center justify-center"
        // action="/api/checkout_sessions"
        // method="POST"
      >
        <h7 className="w-[93%] mt-3 text-slate-600">Business Name</h7>

        <Tooltip arrow open={alertName} title="must add business name">
          <input
            value={name}
            onFocus={() => setAlertName(false)}
            onInput={(e) => setName(e.target.value)}
            type="text"
            placeholder="business name"
            className="p-2 bg-slate-100 focus:bg-slate-200 transition-all rounded-xl focus:outline-0 w-[95%]"
          />
        </Tooltip>
        <h7 className="w-[93%] mt-3 text-slate-600">Email</h7>

        <Tooltip arrow open={alertEmail} title="email format invalid">
          <input
            value={email}
            onFocus={() => setAlertEmail(false)}
            onInput={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="rose@example.com"
            className="p-2 bg-slate-100 focus:bg-slate-200 transition-all rounded-xl focus:outline-0 w-[95%]"
          />
        </Tooltip>
        {/* <h7 className="w-[93%] mt-3 text-slate-600">phone</h7>
        <Tooltip arrow open={alertPhoneNumber} title="phone number invalid">
          <input
            value={phoneNumber}
            onFocus={() => setAlertPhoneNumber(false)}
            onInput={(e) => setPhoneNumber(e.target.value)}
            placeholder="000-000-0000"
            className="p-2 bg-slate-100 focus:bg-slate-200 transition-all rounded-xl focus:outline-0 w-[95%]"
          />
        </Tooltip> */}

        <button
          className="bg-blue-500 hover:bg-blue-400 max-w-[95%] transition-all w-60 mt-6 p-3 rounded-xl m-auto text-white"
          onClick={() => {
            if (validateForm() == "good" && !loading) {
              createCheckOutSession();
            }
          }}
        >
          {loading ? "loading" : "Subscribe"}
        </button>
        <h7 className="max-w-[95%] w-96 text-center mt-6 m-auto text-slate-600">
          We will be in contact with you within the next 24 hours to provide you
          with the link to your rating page. As a gesture of appreciation, we
          will also be sending you 50 free stickers to help you get started!
        </h7>
      </div>
    </div>
  );
}
