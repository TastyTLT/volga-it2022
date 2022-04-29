import React from "react";
import image from "../../../assets/present.png";
import { StartScreenProps } from "../../../types";
import "./EndScreen.scss";

function EndScreen({ step, setStep }: StartScreenProps) {
  return (
    <div className="end-screen">
      <img src={image} alt="" className="start-screen__image" />
      <div className="end-screen__title">
        We've found some awesome frames for you!
      </div>
      <div className="end-screen__text">
        Send the results to your email to receive special discounts.
      </div>
      <button className="end-screen__start-button" onClick={() => setStep(0)}>
        Send
      </button>
    </div>
  );
}

export default EndScreen;
