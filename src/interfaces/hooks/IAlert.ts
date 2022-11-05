import { SweetAlertIcon } from "sweetalert2";

export interface IAlert {
    title: string;
    type: SweetAlertIcon;
    text: string;
    callback: any
}