import React from "react";
import image from "../../../assets/start-screen.png";
import { StartScreenProps } from "../../../types";
import "./StartScreen.scss";

function StartScreen({ step, setStep }: StartScreenProps) {
  return (
    <div className="start-screen">
      <img src={image} alt="" className="start-screen__image" />
      <div className="start-screen__title">Let’s find your perfect pair!</div>
      <div className="start-screen__text">
        Take the quiz to easily discover your perfect fit from thousands of //
        styles
      </div>
      <button
        className="start-screen__start-button"
        onClick={() => setStep((currentStep) => currentStep + 1)}
      >
        Start Now
      </button>
    </div>
  );
}

export default StartScreen;
