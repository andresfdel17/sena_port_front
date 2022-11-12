import React, { FormEvent } from 'react'
import { Col, FormControl, Row } from 'react-bootstrap'

export const RegisterForm = () => {
  const handleSubmit = (e: FormEvent) => {

  }
  return (
    <form onSubmit={handleSubmit}>
        <Row>
          <Col sm>
            <label>Nombres</label>
            <FormControl size="sm" type="text" />
          </Col>
        </Row>
    </form>
  )
}
