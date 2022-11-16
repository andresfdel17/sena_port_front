import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from '@hooks/useForm';
import { useNotify } from '@hooks/useNotify';
import { useTrans } from '@hooks/useTrans';
import { IRegisterModal } from '@interfaces/Login/IRegisterModal';
import { publicFetch } from '@services/Axios';
import React, { FormEvent, useRef, useState } from 'react'
import { Button, Col, FormControl, InputGroup, Modal, Row, Spinner } from 'react-bootstrap'
export const RegisterModal = (props: IRegisterModal) => {
    const { show, setShow } = props;
    const { notify } = useNotify();
    const [Itype, setIType] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const email = useRef<HTMLInputElement>(null);
    const { translate, t } = useTrans();
    const { serialize } = useForm();
    const handleClose = () => setShow(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const formData = serialize(e.target as HTMLFormElement);
        console.log(formData);
        setLoading(false);
    }
    const sendCode = async () => {
        setLoading(true);
        const { current } = email;
        const { data } = await publicFetch.post("/api/login/send-code", {
            email: current?.value
        });
        notify({
            ...data,
        });
        console.log(data);
        setLoading(false);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {translate("register-form")}
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Col sm>
                            <label>{translate("names")}</label>
                            <FormControl size="sm" type="text" name="name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <label>{translate("last-name")}</label>
                            <FormControl size="sm" type="text" name="last_name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <label>{translate("cifnif")}</label>
                            <FormControl size="sm" type="text" name="cifnif" />
                        </Col>

                    </Row>
                    <Row>
                        <Col sm>
                            <label>{translate("file")}</label>
                            <FormControl size="sm" type="text" name="file" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <label>{translate("email")}</label>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl ref={email} type="email" name="email" />
                                <FormControl type="text" name="code" placeholder={t("code")} />
                                <Button disabled={loading} variant="outline-secondary" onClick={sendCode}>
                                    {loading ? (
                                        <Spinner size="sm" animation="grow" variant="info" />
                                    ) : (
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    )}

                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <label>{translate("password")}</label>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl type={!Itype ? 'password' : 'text'} name="password" />
                                <Button variant="outline-secondary" onClick={e => setIType(prev => !prev)}>
                                    <FontAwesomeIcon icon={!Itype ? faEye : faEyeSlash} />
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="secondary" onClick={handleClose}>
                        {translate("close")}
                    </Button>
                    <Button disabled={loading} type='submit' size="sm" variant="primary" onClick={handleClose}>
                        {loading ? (
                            <Spinner size="sm" animation="grow" variant="info" />
                        ) : (translate("save"))}

                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
