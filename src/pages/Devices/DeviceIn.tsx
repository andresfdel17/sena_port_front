import { useTrans } from '@hooks/useTrans';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Container, Card, FormControl, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import noImage from "../../assets/img/no_image.jpg";
import { useForm } from '@hooks/useForm';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { privateFetch } from '@services/Axios';
import { AxiosResponse } from 'axios';
import { useAxios } from '@contexts/AxiosContext';
import { useNotify } from '@hooks/useNotify';

export const DeviceIn = () => {
  const [image, setImage] = useState<string | undefined>(noImage);
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [serialValue, setSerialValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { translate, t } = useTrans();
  const { serialize } = useForm();
  const { privateFetch } = useAxios();
  const { notify } = useNotify();
  useEffect(() => {
    document.title = t("new-device");
    // eslint-disable-next-line
  }, []);
  const setImageF = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileData = e.target.files?.[0];
    setImageFile(fileData);
    const file = URL.createObjectURL(fileData as Blob);
    setImage(file ?? noImage);
  }
  const saveDevice = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formatedData = serialize(e.target as HTMLFormElement);
    const formData = {
      ...formatedData,
      image: imageFile
    };
    const { data }: AxiosResponse = await privateFetch.post("/api/devices/saveDevice", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    notify({
      ...data,
      callback: () => {
        if (data.code === 201) {
          (e.target as HTMLFormElement).reset();
          resetStatus();
        }
      }
    });
    setLoading(false);
  }
  const resetStatus = () => {
    setImage(noImage);
    setSerialValue("");
    setImageFile(undefined);
  }
  return (
    <Container fluid className='mt-3'>
      <form onSubmit={saveDevice} autoComplete='off'>
        <Card>
          <Card.Header>{translate("new-device")}</Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col sm={2}>
                <Image src={image} alt="image" />
                <FormControl size="sm" type="file" onChange={setImageF} />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col sm="auto">
                <label>{translate("brand")}</label>
                <FormControl size="sm" type='text' name="brand" required />
              </Col>
              <Col sm="auto">
                <label>{translate("color")}</label>
                <FormControl size="sm" type='text' name="color" required />
              </Col>
              <Col sm="auto">
                <label>{translate("serial")}</label>
                <FormControl size="sm" type='text' name="serial_number" value={serialValue} onChange={e => setSerialValue((e.target as HTMLInputElement).value.toUpperCase())} required />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <label>{translate("details")}</label>
                <FormControl as="textarea" size="sm" type='text' name="details" />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm>
                <Button type="submit" size="sm" disabled={loading}>
                  {
                    loading ? (
                      <>
                        <Spinner animation="grow" variant="warning" />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faSave} /> &nbsp;
                        {translate("save")}
                      </>
                    )
                  }
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </form>
    </Container >
  )
}
