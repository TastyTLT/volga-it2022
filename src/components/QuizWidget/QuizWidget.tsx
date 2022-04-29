import React, { useState } from "react";
import questions from "../../questions";
import Header from "../Header/Header";
import EndScreen from "../Screens/EndScreen/EndScreen";
import QuestionScreen from "../Screens/QuestionScreen/QuestionScreen";
import StartScreen from "../Screens/StartScreen/StartScreen";
import "./QuizWidget.scss";

function QuizWidget() {
  const [step, setStep] = useState(0);

  return (
    <div className="quiz-widget">
      <Header step={step} setStep={setStep} />

      {step === 0 && <StartScreen step={step} setStep={setStep} />}
      {step > 0 && step < 11 && (
        <QuestionScreen
          step={step}
          setStep={setStep}
          question={questions[step - 1]}
        />
      )}
      {step === 11 && <EndScreen step={step} setStep={setStep} />}
    </div>
  );
}

export default QuizWidget;
