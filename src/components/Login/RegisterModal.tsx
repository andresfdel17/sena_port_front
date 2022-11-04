import { IRegisterModal } from '@interfaces/Login/IRegisterModal';
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const RegisterModal = (props: IRegisterModal) => {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button size="sm" variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
