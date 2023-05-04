import { useTrans } from '@hooks/useTrans';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Container, Card, FormControl, Row, Col, Image } from 'react-bootstrap';
import noImage from "../../assets/img/no_image.jpg";

export const DeviceIn = () => {
  const [image, setImage] = useState<string>(noImage);
  const { translate, t } = useTrans();
  useEffect(() => {
    document.title = t("new-device");
    // eslint-disable-next-line
  }, []);
  const setImageF = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

  }
  const saveDevice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);

  }
  return (
    <Container fluid className='mt-3'>
      <form onSubmit={saveDevice}>
        <Card>
          <Card.Header>{translate("new-device")}</Card.Header>
          <Card.Body>
              <Row className="mb-3">
                <Col sm={2}>
                  <Image src={image} alt="image" />
                  <FormControl size="sm" type="file" onChange={setImageF} />
                </Col>
              </Row>
              <Row>
                <Col sm="auto">
                  <label>{translate("brand")}</label>
                  <FormControl size="sm" type='text' name="brand" />
                </Col>
              </Row>
          </Card.Body>
        </Card>
      </form>
    </Container>
  )
}
