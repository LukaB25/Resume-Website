import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

import { usePersonalInfo } from '../../contexts/PersonalInfoContext';

import styles from '../../styles/Homepage.module.css';
function Homepage() {
  const personalInfo = usePersonalInfo().data?.[0];

  const splitParagraphs = personalInfo?.summary.split('\n');
  const paragraphs = splitParagraphs?.map((paragraph, index) => {
    return (
      <Col key={index} className={styles.SummaryParagraph}>{paragraph}</Col>
    )
  });
  return (
      <Row className={`${styles.SummaryContainer} ${styles.SummarySmallScreen}`}>
          {paragraphs}
      </Row>
  )
}

export default Homepage
