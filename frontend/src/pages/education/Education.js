import React from 'react';

import { useEducationInfo } from '../../contexts/EducationInfoContext';
import Course from './Course';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../styles/Education.module.css';
import appStyles from '../../App.module.css';

function Education() {
  const educationInfo = useEducationInfo().data;
  console.log('Education', educationInfo);

  return (
    <>
      <Row className={appStyles.MainContainer}>
        <div className={appStyles.MainHeader}>
          <h1>Education</h1>
        </div>
        {educationInfo && educationInfo.map((education, index) => (
          <Col xs={12} key={index} className={appStyles.ContentContainer}>
            <Container className={styles.EducationContent}>
              <h2 className={styles.Title}>{education.title}</h2>
                <h3 className={styles.Location}>{education.location}</h3>
              <div className={styles.SpecialDisplay}>
                <h3 className={styles.School}>
                {education.school_url ?
                  (<a
                    href={`${education.school_url}`}
                    className={styles.SchoolLink}
                    target='_blank' 
                    rel="noreferrer"> {education.school}</a>
                    ) : (
                    education.school
                  )
                }
                </h3>
                <p className={styles.Date}>
                  {education.start_date} - {education.end_date ? (education.end_date) : 'present'}
                </p>
              </div>
              <p className={styles.Description}>
                {education.description.split('\n').map((paragraph, index) => (
                  <span key={index}> {paragraph} <br /> </span>
                ))}
              </p>
            </Container>
          </Col>
        ))}
      </Row>
      <Course />
    </>
  )
}

export default Education
