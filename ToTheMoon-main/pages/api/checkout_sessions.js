const cors = require("cors")({ origin: true });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { data } = req.body;

  const session = await stripe.checkout.sessions.create({
    subscription_data: {
      items: [
        {
          plan: "price_1MzvXlES3hWiu0wM6bxXYvab",
        },
      ],
    },
    mode: "subscription",
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    metadata: {
      email: data.email,
      phoneNumber: data?.phoneNumber,
      businessName: data.name,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
