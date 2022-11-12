import { Loader } from '@components/Loader/Loader';
import { useAuth } from '@contexts/AuthProvider';
import { faCode, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from '@hooks/useForm';
import { useNotify } from '@hooks/useNotify';
import { publicFetch } from '@services/Axios';
import React, { FormEvent, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { RegisterModal } from './RegisterModal';

export const LoginForm = () => {
  const { t } = useTranslation();
  const { Login } = useAuth();
  const { serialize } = useForm();
  const { notify } = useNotify();
  const [loading, setloading] = useState<boolean>(false);
  const [registerModal, setShowRModal] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setloading(true);
    const formData = serialize(e.target as HTMLFormElement);
    const { data } = await publicFetch.post("/api/login/login", formData);
    notify({
      ...data,
      callback: () => { if (data.code === 200) Login(data) }
    });
    setloading(false);
  }
  return loading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="form-froup p-1">
        <label htmlFor="username text-muted">
          <h6 className='text-grey'>
            <FontAwesomeIcon icon={faUser} />
            <Trans t={t}>login-user-name</Trans>
          </h6 >
        </label>
        <input type="text" name="username" required className='form-control mb-2' />
        <div className="invalid-feedback"><Trans t={t}>login-user-place</Trans></div>
        <div id="TwoFA" style={{ display: "none" }}>
          <label htmlFor="code text-muted">
            <h6 className="text-grey">
              <FontAwesomeIcon icon={faCode} />&nbsp;
              <Trans t={t}>auth-code</Trans>
            </h6>
          </label>
          <input name="code" type="text" className="form-control" />
          <div className="invalid-feedback"></div>
        </div>
        <label htmlFor="password" className="mt-4">
          <h6 className="text-grey">
            <FontAwesomeIcon icon={faKey} />&nbsp;
            <Trans t={t}>login-password</Trans>
          </h6>
        </label>
        <input name="password" required id="password" type="password" className="form-control" />
        <div className="invalid-feedback"><Trans t={t}>login-pass-place</Trans></div>
      </div >
      <Row className="mb-2">
        <Col sm className="ml-2">
          <Link to="/login/forgotpass">
            <Trans t={t}>forgot-password</Trans>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col sm="auto" className="mb-2">
          <Button variant="primary" size="sm" type="button" onClick={() => setShowRModal(true)}>
            <Trans t={t}>to-register</Trans>
          </Button>
        </Col>
        <Col sm="auto">
          <Button variant="primary" size="sm" type="submit">
            <Trans t={t}>log-in</Trans>
          </Button>
        </Col>
      </Row>
      <RegisterModal show={registerModal} setShow={setShowRModal} />
    </form >
  )
}