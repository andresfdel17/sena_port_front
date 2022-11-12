import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const useTrans = () => {
    const { t } = useTranslation();
    const translate = (text: string) => {
        return (
            <Trans t={t}>{text}</Trans>
        )
    }
    return {
        t,
        translate
    }
}
