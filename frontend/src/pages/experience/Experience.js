import React from 'react';

import { useExperienceInfo } from '../../contexts/ExperienceInfoContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../styles/Experience.module.css';
import appStyles from '../../App.module.css';

function Experience() {
  const experienceInfo = useExperienceInfo().data;
  console.log(experienceInfo);

  if (!experienceInfo) {
    return <div className={appStyles.MainHeader}><h1>Loading...</h1></div>;
  }

  return (
    (experienceInfo && experienceInfo.length !== 0) &&
    <Row className={appStyles.MainContainer}>
      <div  className={appStyles.MainHeader}>
        <h1>Work Experience</h1>
      </div>
      {experienceInfo && experienceInfo.map((experience, index) => (
        <Col xs={12} key={index} className={appStyles.ContentContainer}>
        <Container className={styles.ExperienceContent}>
          <h2 className={styles.Title}>{experience.job_title}</h2>
          <h3 className={styles.Location}>{experience.location}</h3>
          <div className={styles.SpecialDisplay}>
            <h3 className={styles.Company}>{experience.company_name}</h3>
            <p className={styles.Date}>
              {experience.start_date} - {experience.end_date ?
              (experience.end_date) : 'present'}
            </p>
          </div>
          <p className={styles.Description}>
            {experience.description.split('\n').map((paragraph, index1) => (
            <span key={index1}> {paragraph} <br /> </span>
            ))}
          </p>
          {experience.skills_gained && (
              <h3 className={styles.SkillSets}>Skills:</h3>
          )}
          {experience.skills_gained && experience.skills_gained.length > 0 ?
          experience.skills_gained.split(',').map((skill, index2) => (
            <React.Fragment key={index2}>
                <span className={styles.Skill}>{skill}</span>
                {index2 < experience.skills_gained.length - 1 && <span className={styles.Divider}> | </span>}
              </React.Fragment>
          )) : null}
            {experience.achievements && (
                <h3 className={styles.SkillSets}>Achievements:</h3>
            )}
            {experience.achievements && experience.achievements.length > 0 ?
          experience.achievements.split(';').map((achievement, index3) => (
              <div key={index3}>
                <span className={styles.Divider}>-</span>
                <span className={styles.Achievement}>{achievement}</span>
              </div>
          )) : null}

        </Container>
      </Col>
      ))}
        
    </Row>
  )
};

export default Experience