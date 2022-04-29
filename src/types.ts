export interface HeaderProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface Question {
  text: string;
  answers: Answer[];
  skip?: string;
}

export interface Answer {
  text?: string;
  image?: string;
}

export interface StartScreenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface QuestionScreenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  question: Question;
}
