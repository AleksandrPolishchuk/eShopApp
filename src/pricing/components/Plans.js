import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { SITE_URL } from "src/core/utils";

export default function Plans({ plans }) {
  const [selected, setSelected] = useState("month");
  const plan = plans.find((plan) => plan.interval === selected);

  function togglePlan() {
    const interval = selected === "month" ? "year" : "month";
    setSelected(interval);
  }

  async function onCheckout() {
    const response = await fetch(`${SITE_URL}/api/checkout/${plan.id}`);
    const data = await response.json();
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    await stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="bg-salmon border-right">
      <div className="column-padding centered">
        <div className="callout-wrap">
          <div className="plan">
            <div className="plan-wrap">
              <div className="plan-content">
                <div className="plan-switch">
                  M.
                  <label className="switch">
                    <input onChange={togglePlan} type="checkbox" />
                    <span className="slider" />
                  </label>
                  Y.
                </div>
              </div>
              <h2 className="plan-name">{plans.name}</h2>
              <div>
                J. ${plans.price} / {plans.interval}
              </div>
              <button onClick={onCheckout} className="large-button">
                <div className="large-button-text">B. N.</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
