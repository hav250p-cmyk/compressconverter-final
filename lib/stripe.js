import Stripe from "stripe";
import { env } from "./env.js";

export const stripe = env.stripeSecretKey
  ? new Stripe(env.stripeSecretKey, {
      apiVersion: "2024-06-20"
    })
  : null;

export async function createCheckoutSession(customerEmail) {
  if (!stripe) {
    throw new Error("Stripe não configurado. Defina STRIPE_SECRET_KEY.");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: customerEmail,
    line_items: [
      {
        price: env.stripePriceIdUnlimited,
        quantity: 1
      }
    ],
    success_url: `${env.appUrl}/dashboard?success=true`,
    cancel_url: `${env.appUrl}/pricing?canceled=true`
  });

  return session;
}
