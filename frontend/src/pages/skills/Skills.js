import React from "react";

import { useTechnicalSkills } from "../../contexts/SkillsContext";

import GeneralSkills from "./GeneralSkills";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from '../../styles/Skills.module.css';
import appStyles from '../../App.module.css';

function Skills() {
  const technicalSkills = useTechnicalSkills().technicalSkills;
  // console.log(technicalSkills);

  const languageSkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'language');
  const frameworkSkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'framework');
  const librarySkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'libraries');
  const versionControlSkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'version_control');
  const databaseSkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'database');
  const methodologySkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'methodologies');
  const otherSkills = technicalSkills && technicalSkills.filter(skill => skill.category === 'other');

  const getVariant = (skill_label) => {
    if (skill_label === 'Begginer') {
      return 'info';
    } else if (skill_label === 'Intermediate') {
      return 'success';
    } else if (skill_label === 'Advanced') {
      return 'danger';
    }
  }


  if (!technicalSkills) {
    return <div className={appStyles.MainHeader}><h1>Loading...</h1></div>;
  }

  return (
    <React.Fragment>
      {technicalSkills && technicalSkills.length > 0 &&
        <Row className={appStyles.MainContainer}>
          <div className={appStyles.MainHeader}>
            <h1>Technical Skills</h1>
          </div>
          {(languageSkills && languageSkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Languages</h2>
              {languageSkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                  <ProgressBar
                    animated
                    now={skill.skill_level}
                    variant={getVariant(skill.skill_label)}
                    label={(
                        <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                    )}
                    className={styles.ProgressBar}
                  />
                </Container>
              ))}
            </Col>
            )}
            {(frameworkSkills && frameworkSkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Frameworks</h2>
              {frameworkSkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                <ProgressBar
                  animated
                  now={skill.skill_level}
                  variant={getVariant(skill.skill_label)}
                  label={(
                      <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                  )}
                  className={styles.ProgressBar} />
                </Container>
              ))}
            </Col>
            )}
            {(librarySkills && librarySkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Libraries</h2>
              {librarySkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                <ProgressBar
                  animated
                  now={skill.skill_level}
                  variant={getVariant(skill.skill_label)}
                  label={(
                      <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                  )}
                  className={styles.ProgressBar} />
                </Container>
              ))}
            </Col>
            )}
            {(databaseSkills && databaseSkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Databases</h2>
              {databaseSkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                  <ProgressBar
                    animated
                    now={skill.skill_level}
                    variant={getVariant(skill.skill_label)}
                    label={(
                      <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                    )}
                    className={styles.ProgressBar}
                  />
                </Container>
              ))}
            </Col>
            )}
            {(versionControlSkills && versionControlSkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Version Control</h2>
              {versionControlSkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                  <ProgressBar
                    animated
                    now={skill.skill_level}
                    variant={getVariant(skill.skill_label)}
                    label={(
                        <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                    )}
                    className={styles.ProgressBar}
                  />
                </Container>
              ))}
            </Col>
            )}
            {(methodologySkills && methodologySkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Methodologies</h2>
              {methodologySkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                  <ProgressBar
                    animated
                    now={skill.skill_level}
                    variant={getVariant(skill.skill_label)}
                    label={(
                        <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                    )}
                    className={styles.ProgressBar}
                  />
                </Container>
              ))}
            </Col>
            )}
            {(otherSkills && otherSkills.length > 0) && (
            <Col xs={12} className={appStyles.ContentContainer}>
              <h2 className={styles.Title}>Other</h2>
              {otherSkills.map((skill, index) => (
                <Container
                  key={index}
                >
                  <span className={`${styles.SkillName} d-md-none`}>{skill.skill_name}</span>
                  <ProgressBar
                    animated
                    now={skill.skill_level}
                    variant={getVariant(skill.skill_label)}
                    label={(
                        <span className='d-none d-md-inline'>{skill.skill_name} - {skill.skill_label}</span>
                    )}
                    className={styles.ProgressBar}
                  />
                </Container>
              ))}
            </Col>
            )}
        </Row>
      }
      <GeneralSkills />
  </React.Fragment>
  )
}

export default Skills;