import { IAlert } from '@interfaces/hooks/IAlert';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const useAlert = () => {
    const Alert = (props: IAlert) => {
        const {
            title = process.env.REACT_APP_APP_NAME,
            type = "info",
            text = "Alert",
            callback = () => { },
        } = props;
        return MySwal.fire({
            title: title,
            text: text,
            icon: type,
            timer: 4000,
            timerProgressBar: true,
            didClose: callback,
            showConfirmButton: false,
            heightAuto: false
        });
    }
    return  {
        Alert
    }
}
