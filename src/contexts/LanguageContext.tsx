import React, { createContext, useContext } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { Lang } from '../interfaces/Context/Lang';
import { Props } from '../interfaces/General';
const LangContext = createContext<Lang | null>(null);
const { Provider } = LangContext;

export const LangProvider = ({ children }: Props) => {
    const { i18n, t } = useTranslation();
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    const translateC = (word: string): JSX.Element => {
        return (<Trans t={t}>{word}</Trans>)
    }
    return (
        <Provider value={{
            changeLanguage,
            translateC
        }}>
            {children}
        </Provider>
    );
}

export const useLang = () => {
    return (useContext(LangContext));
}