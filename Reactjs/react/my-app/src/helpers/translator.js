import { languages } from "languages/languages";

export function translator(currentLanguage) {
    return (value) => languages[value][currentLanguage];
} 