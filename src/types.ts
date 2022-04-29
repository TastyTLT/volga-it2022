export interface HeaderProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface Question {
  text: string;
  answers: Answer[];
  skip: null | string;
}

export interface Answer {
  text: string;
  image?: string;
}

export interface StartScreenProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
