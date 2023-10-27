import { useState } from "react";

export default function Plans({ plans }) {
  const [selected, setSelected] = useState("month");
  const plan = plans.find((plan) => plan.interval === selected);

  function togglePlan() {
    const interval = selected === "month" ? "year" : "month";
    setSelected(interval);
    console.log(interval);
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
              <button className="large-button">
                <div className="large-button-text">B. N.</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
