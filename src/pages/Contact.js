import React from "react"
import PrimaryLayout from "../layout/PrimaryLayout"
import { Form, Button } from "react-bootstrap"
export default () => (
  <PrimaryLayout column="col-12">
    <div className="p-5">
      <h1>Contact</h1>
      <Form>
        <Form.Group controlId="contactForm.email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.supject">
          <Form.Label>supject</Form.Label>
          <Form.Control type="text" placeholder="supject" />
        </Form.Group>

        <Form.Group controlId="contactForm.massage">
          <Form.Label>massage</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactForm.buttom">
          <Button>Supmit</Button>
        </Form.Group>
      </Form>
    </div>
  </PrimaryLayout>
)
