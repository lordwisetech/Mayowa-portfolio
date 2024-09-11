import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import resume from '../assets/mayowaResume.pdf';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
           
            <Col md={6} xl={7}>
              <h1>Thank you for visiting my PORTFOLIO</h1>
              <a href={resume} download>
      <button className="btn btn-outline-primary btn-lg">
        <span>Download CV</span>
      </button>
    </a> 
            </Col>
          </Row>
        </div>
      </Col>
  )
}
