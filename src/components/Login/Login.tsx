
import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import "./Login.css";
import { LoginForm } from './LoginForm';
import { LoginImg } from './LoginImg';
import { Logo } from './Logo';

export const Login = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (event: any): void => {
    i18n.changeLanguage(event.target.value);
  }
  useEffect(() => {
    document.title = t("login");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="collapse d-flex flex-column flex-md-row align-items-center p-3 px-md-4 purple shadow-sm">
        <h5 style={{ fontSize: "3rem" }} className=" mt-0 mb-0 text-light text-center mb-0 align-middle">
          <Logo width='100px' />
        </h5>
      </div>
      <Row className="h-100">
        <Col className="purple left">
          <Row style={{ height: "100%" }}>
            <Col className='my-auto'>
              <h5 style={{ fontSize: "3rem" }} className="mt-0 mb-0 text-light text-center mb-0 align-middle">
                <Logo width='200px' />
              </h5>
            </Col>
          </Row>
        </Col>
        <Col md className="right">
          <div className="container h-100">
            <Row className="align-items-center h-100 justify-content-center">
              <Col sm="auto">
                <Card className="shadow border-0 mx-auto">
                  <Card.Header className='p-4'>
                    <h5 className='text-light text-center mb-0 align-middle'>
                      <Logo width='50px' />
                    </h5>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <h5 className="text-grey text-center mt-0 font-weight-bold">
                      <Trans t={t}>login-user-name</Trans>
                    </h5>
                    <p className="text-center text-muted"></p>
                    <Row className="mb-3 text-center">
                      <LoginImg />
                    </Row>
                    <LoginForm />
                    <Row className="mt-2">
                      <Col>
                        <select value={i18n.language} className="form-select form-select-sm" onChange={changeLang}>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                        </select>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}