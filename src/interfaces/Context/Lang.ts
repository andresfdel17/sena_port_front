export interface Lang {
    changeLanguage: (language: string) => void;
    translateC: (word: string) => JSX.Element;
}