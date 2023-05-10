import { INotify } from '@interfaces/hooks/IuseNotify'
import { useTranslation } from 'react-i18next';
import { useAlert } from './useAlert'

export const useNotify = () => {
    const { Alert } = useAlert();
    const { t } = useTranslation();
    const notify = (data: INotify): void => {
        switch (data.code) {
            case 201:
            case 200:
                Alert({
                    title: t("success"),
                    text: t(data.text),
                    type: "success",
                    callback: data.callback
                });
                break;
            default:
                Alert({
                    title: t("warning"),
                    text: t(data.text),
                    type: "warning",
                    callback: data.callback
                });
                break;
        }
    }
    return {
        notify
    }
}
