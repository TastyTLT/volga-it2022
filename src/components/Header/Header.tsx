import React from "react";
import "./Header.scss";
import logo from "../../assets/start-screen-logo.png";
import { HeaderProps } from "../../types";

function Header({ step, setStep }: HeaderProps) {
  return (
    <div className="header">
      {step === 0 && <img src={logo} alt="" className="header__logo" />}
      {step > 0 && (
        <button
          className="header__button-step"
          onClick={() => setStep((currentStep) => currentStep - 1)}
        >{`<`}</button>
      )}

      {step > 0 && <div className="header__step">{`${step} / 10`}</div>}
      {step === 0 && (
        <button
          className="header__button-step"
          onClick={() => setStep((currentStep) => currentStep + 1)}
        >{`>`}</button>
      )}

      {step > 0 && (
        <button className="header__button-close" onClick={() => setStep(0)}>
          x
        </button>
      )}
    </div>
  );
}

export default Header;
