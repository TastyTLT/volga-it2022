import { Question } from "./types";

const questions: Question[] = [
  {
    text: "You are looking for",
    answers: [
      {
        image: "/images/screen-1/woman.png",
        text: "Women's Styles",
      },
      {
        image: "/images/screen-1/man.png",
        text: "Men's Styles",
      },
    ],
    skip: "I'd like to see both",
  },
];

export default questions;
