import { useTrans } from '@hooks/useTrans';
import { IRegisterModal } from '@interfaces/Login/IRegisterModal';
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { RegisterForm } from './RegisterForm';
export const RegisterModal = (props: IRegisterModal) => {
    const { show, setShow } = props;
    const { translate } = useTrans()
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {translate("register-form")}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RegisterForm />
            </Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={handleClose}>
                    {translate("close")}
                </Button>
                <Button size="sm" variant="success" onClick={handleClose}>
                    {translate("save")}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
