export interface Lang {
    translate: (word: string) => string;
    changeLanguage: (language: string) => void;
}