import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

export const DeviceIn = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("new-device");
    // eslint-disable-next-line
  },[]);
  return (
    <Container fluid className='mt-3'>
      <Card>
        <Card.Header><Trans t={t}>new-device</Trans></Card.Header>
        <Card.Body>
          <Card.Text>
            <label><Trans t={t}>brand</Trans></label>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
