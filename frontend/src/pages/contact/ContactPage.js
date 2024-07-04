import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import appStyles from '../../App.module.css';

import ContactForm from './ContactForm';

function ContactPage() {

  return(
    <Row className={appStyles.MainContainer}>
      <div className={`${appStyles.MainHeader}`}>
        <h1>Contact</h1>
      </div>
      <Col xs={12} className={appStyles.ContentContainer}>
        <ContactForm />
      </Col>
    </Row>
  )
}

export default ContactPage;