import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { usePersonalInfo } from '../contexts/PersonalInfoContext';

import styles from '../styles/HeroSection.module.css';

function HeroSection() {
  const personalInfo = usePersonalInfo().data?.[0];
  // console.log(personalInfo)
  return (
    <div>
      <Row className={styles.HeroSmallScreen} xs={1} md={2}>
        <Col className={`align-self-center`} xs={{ order: 2 }} md={{ order: 1 }}>
          <Container className={styles.HeroContainer}>
            <h1>{personalInfo?.name}</h1>
            <p>{personalInfo?.title}</p>
          </Container>
        </Col>
        <Col xs={{ order: 1 }} md={{ order: 2 }}>
          <Container className={styles.HeroImageContainer}>
            <img
              src={personalInfo?.image}
              alt="Luka Black"
              className={styles.HeroImage}
            />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection
