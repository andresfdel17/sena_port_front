import { IFormData } from "@interfaces/hooks";

export const useForm = () => {
    const serialize = (form: HTMLFormElement) => {
        const data = new FormData(form);
        const formData: IFormData = {};
        for (let [name, value] of data) {
            formData[name] = value;
        }
        return formData;
    }
    return {
        serialize
    }
}
