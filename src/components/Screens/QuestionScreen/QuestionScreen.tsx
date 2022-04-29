import React from "react";
import { Question, QuestionScreenProps } from "../../../types";
import "./QuestionScreen.scss";

function QuestionScreen({ question, step, setStep }: QuestionScreenProps) {
  const { text, answers, skip } = question;

  const answersClassname =
    answers.length > 3
      ? "screen__answers screen__answers_many"
      : "screen__answers";

  const answerClassname =
    answers.length === 3
      ? "screen__answer screen__answer_three"
      : answers.length > 3
      ? "screen__answer screen__answer_many"
      : "screen__answer";

  return (
    <div className="screen">
      <div className="screen__body">
        <div className="screen__question">{text}</div>
        <div className={answersClassname}>
          {answers.map(({ text, image }) => (
            <div
              className={answerClassname}
              onClick={() => setStep((currentStep) => currentStep + 1)}
            >
              {image && (
                <img src={image} alt="" className="screen__answer-image" />
              )}
              {text && <div className="screen__answer-text">{text}</div>}
            </div>
          ))}
        </div>
      </div>
      <div
        className="screen__alternative"
        onClick={() => setStep((currentStep) => currentStep + 1)}
      >
        {skip}
      </div>
    </div>
  );
}

export default QuestionScreen;
