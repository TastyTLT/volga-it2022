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

  {
    text: "What type of glasses are you looking for?",
    answers: [
      {
        image: "/images/screen-2/eyeglasses.png",
        text: "Eyeglasses",
      },
      {
        image: "/images/screen-2/sunglasses.png",
        text: "Sunglasses",
      },
    ],
    skip: "I'd like to see both",
  },

  {
    text: "Do you need vision correction?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    skip: "Skip",
  },

  {
    text: "What’s your current frame size?",
    answers: [
      {
        text: "Small 42-48 mm",
      },
      {
        text: "Medium 49-53 mm",
      },
      {
        text: "Large 54-58 mm",
      },
    ],
    skip: "I don’t know",
  },

  {
    text: "Would you like to protect your eyes from light emanating from screens?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
  },

  {
    text: "Every face shape has a perfect fit. What’s yours?",
    answers: [
      {
        image: "/images/screen-6/oval.svg",
        text: "I have a long face",
      },
      {
        image: "/images/screen-6/round.svg",
        text: "I have a round face",
      },
      {
        image: "/images/screen-6/oval.svg",
        text: "In between",
      },
    ],
    skip: "I don’t know",
  },

  {
    text: "How would you define your facial features?",
    answers: [
      {
        text: "Sharp",
      },
      {
        text: "Rounded",
      },
      {
        text: "In between",
      },
    ],
    skip: "I don’t know",
  },

  {
    text: "Which frame style are you looking for?",
    answers: [
      {
        image: "/images/screen-8/rectangle.png",
        text: "Rectangle",
      },
      {
        image: "/images/screen-8/browline.png",
        text: "Browline",
      },
      {
        image: "/images/screen-8/wayframe.png",
        text: "Wayframe",
      },
      {
        image: "/images/screen-8/round.png",
        text: "Round",
      },
      {
        image: "/images/screen-8/catEye.png",
        text: "Cat Eye",
      },
      {
        image: "/images/screen-8/rimless.png",
        text: "Rimless",
      },
    ],
  },

  {
    text: "Are you looking for any particular eyewear brands?",
    answers: [
      {
        text: "Yes, I have some in mind",
      },
      {
        text: "No, brand isn't important",
      },
    ],
  },

  {
    text: "Choose your favorite brands",
    answers: [
      {
        image: "/images/screen-10/1.png",
      },
      {
        image: "/images/screen-10/2.png",
      },
      {
        image: "/images/screen-10/3.png",
      },
      {
        image: "/images/screen-10/4.png",
      },
      {
        image: "/images/screen-10/5.png",
      },
      {
        image: "/images/screen-10/6.png",
      },
    ],
  },
];

export default questions;
