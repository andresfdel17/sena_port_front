import React from 'react'

export const useForm = () => {
    const serialize = (form: HTMLFormElement) => {
        const data = new FormData(form);
        const formData: any = {};
        for (let [name, value] of data) {
            formData[name] = value;
        }
        return formData;
    }
    return {
        serialize
    }
}
