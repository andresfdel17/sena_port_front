import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Lang } from '../interfaces/Context/Lang';
import { Props } from '../interfaces/General';
const LangContext = createContext<Lang | null>(null);
const { Provider } = LangContext;

export const LangProvider = ({ children }: Props) => {
    const { i18n, t } = useTranslation();
    const translate = (word: string): string => {
        return t(word);
    }
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <Provider value={{
            translate,
            changeLanguage
        }}>
            {children}
        </Provider>
    );
}

export default function useLang() {
    return useContext(LangContext);
}