import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

import { usePersonalInfo } from '../../contexts/PersonalInfoContext';

import styles from '../../styles/Homepage.module.css';
import appStyles from '../../App.module.css';
import Container from 'react-bootstrap/esm/Container';

function Homepage() {
  const personalInfo = usePersonalInfo().data?.[0];

  const splitParagraphs = personalInfo?.summary.split('\n');
  const paragraphs = splitParagraphs?.map((paragraph, index) => {
    return (
        <Container key={index} className={styles.SummaryParagraph}>
          {paragraph}
        </Container>
    )
  });
  return (
      <Row className={`${appStyles.MainContainer}`}>
        <div className={appStyles.MainHeader}>
          <h1>About Me</h1>
        </div>
        <Col className={`${styles.SummaryContainer}`}>
          {paragraphs}
        </Col>
      </Row>
  )
}

export default Homepage
