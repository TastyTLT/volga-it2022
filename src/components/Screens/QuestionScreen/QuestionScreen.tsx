import React from "react";
import { Question } from "../../../types";
import "./QuestionScreen.scss";

function QuestionScreen({ text, answers, skip }: Question) {
  return (
    <div className="screen">
      <div className="screen__body">
        <div className="screen__question">{text}</div>
        <div className="screen__ansawers">
          {answers.map(({ text, image }) => (
            <div className="screen__answer">
              {image && (
                <img src={image} alt="" className="screen__answer-image" />
              )}
              <div className="screen__answer-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="screen__alternative">{skip}</div>
    </div>
  );
}

export default QuestionScreen;
