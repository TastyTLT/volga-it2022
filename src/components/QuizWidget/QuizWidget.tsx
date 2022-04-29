import React, { useState } from "react";
import questions from "../../questions";
import Header from "../Header/Header";
import QuestionScreen from "../Screens/QuestionScreen/QuestionScreen";
import StartScreen from "../Screens/StartScreen/StartScreen";
import "./QuizWidget.scss";

function QuizWidget() {
  const [step, setStep] = useState(0);

  return (
    <div className="quiz-widget">
      <Header step={step} setStep={setStep} />

      {step === 0 && <StartScreen step={step} setStep={setStep} />}
      {step > 0 && <QuestionScreen {...questions[step - 1]} />}
    </div>
  );
}

export default QuizWidget;
