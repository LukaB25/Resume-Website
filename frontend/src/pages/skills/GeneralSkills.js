import React from "react";

import { useGeneralSkills } from "../../contexts/SkillsContext";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../styles/Skills.module.css';
import appStyles from '../../App.module.css';

function GeneralSkills() {
  const generalSkills = useGeneralSkills().generalSkills;
  // console.log('General Skills: ', generalSkills);

  const everyThirdSkill = [];
  const everySecondSkill = [];
  const everyFirstSkill = [];

  const skillNames = generalSkills && generalSkills.map(skill => skill.skill_name);

  (skillNames && skillNames.length > 0) &&
    skillNames.forEach((skill, index) => {
    if ((index + 1) % 3 === 0) {
      everyThirdSkill.push(skill);
    } else if ((index + 1) % 2 === 0) {
      everySecondSkill.push(skill);
    } else {
      everyFirstSkill.push(skill);
    }
  })

  return (
    <React.Fragment>
      {generalSkills && generalSkills.length > 0 &&
        <Row className={appStyles.MainContainer}>
          <div className={appStyles.MainHeader}>
            <h1>General Skills</h1>
          </div>
          <Col xs={12} className={appStyles.ContentContainer}>
            <Container className={styles.SkillList}>
              <Row className="justify-content-center text-center">
                <Col sm={6} md={4} className="d-none d-sm-block">
                  <ul className="list-unstyled">
                    {everyFirstSkill.map((skill, index) => (
                      <li key={index} className={styles.SkillList}>{skill}</li>
                    ))}
                  </ul>
                </Col>
                <Col sm={{ order: 3}} md={{ order: 2 }} className="d-none d-sm-block">
                  <ul className="list-unstyled">
                    {everySecondSkill.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </Col>
                <Col sm={{ order: 2 }} md={{ order: 3 }} className="d-none d-sm-block">
                  <ul className="list-unstyled">
                    {everyThirdSkill.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </Col>
                <Col className="d-sm-none text-justify">
                  {skillNames.join(', ')}.
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      }
    </React.Fragment>
  )
}

export default GeneralSkills;