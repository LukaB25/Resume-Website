import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

import { usePersonalInfo } from '../../contexts/PersonalInfoContext';

import styles from '../../styles/Homepage.module.css';
import appStyles from '../../App.module.css';
import Container from 'react-bootstrap/esm/Container';
import ImageAsset from '../../components/ImageAsset';

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

  const everyThirdTechnology = [];
  const everySecondTechnology = [];
  const everyFirstTechnology = [];
  const seenTechnologies = new Set();
  const technologies = personalInfo?.technologies_learned.split(', ');

  if (technologies && technologies.length > 0) {
    technologies.forEach((technology, index) => {
      if (!seenTechnologies.has(technology)) {
        seenTechnologies.add(technology);
        if ((index + 1) % 3 === 0) {
          everyThirdTechnology.push(technology);
        } else if ((index + 1) % 2 === 0) {
          everySecondTechnology.push(technology);
        } else {
          everyFirstTechnology.push(technology);
        }
      }
    });
  }

  if (!personalInfo) {
    return <div className={appStyles.MainHeader}><h1>Loading...</h1></div>;
  }

  return (
      <Row className={`${appStyles.MainContainer}`}>
        <div className={appStyles.MainHeader}>
          <h1>About Me</h1>
        </div>
        {personalInfo && 
        <React.Fragment>
          <Col xs={12} className={`${appStyles.ContentContainer}`}>
            {paragraphs}
          </Col>
          <div className={appStyles.MainHeader}>
            <h1>Diploma</h1>
          </div>
          <Col xs={12} className={`${appStyles.ContentContainer}`}>
            <ImageAsset src={personalInfo.diploma_image} alt="Diploma" />
          </Col>
          <div className={appStyles.MainHeader}>
            <h1 className='d-none d-sm-flex'>Technologies learned</h1>
            <h1 className='d-sm-none'>Technologies</h1>
          </div>
          <Col xs={12} className={`${appStyles.ContentContainer}`}>
            <Row className='justify-content-center ml-3 d-none d-sm-flex'>
              <Col sm={6} md={4}>
                <ul className={styles.List}>
                  {everyFirstTechnology.map((technology, index) => (
                    <li key={index}>
                      {technology === 'HTML' && (<i className="fa-brands fa-html5 fa-fw" />)}
                      {technology === 'CSS' && (<i className="fa-brands fa-css3-alt fa-fw" />)}
                      {technology === 'JavaScript' && (<i className="fa-brands fa-js fa-fw" />)}
                      {technology === 'Python' && (<i className="fa-brands fa-python fa-fw" />)}
                      {technology === 'React' && (<i className="fa-brands fa-react fa-fw" />)}
                      {(technology === 'Bootstrap' || technology === 'React Bootstrap')
                        && (<i className="fa-brands fa-bootstrap fa-fw" />)}
                      {technology === 'Git' && (<i className="fa-brands fa-git fa-fw" />)}
                      {technology === 'GitHub' && (<i className="fa-brands fa-github fa-fw" />)}
                      {technology === 'PostgreSQL' && (<i className="fa-solid fa-database fa-fw" />)}
                      {technology !== 'HTML' &&
                        technology !== 'CSS' &&
                        technology !== 'JavaScript' &&
                        technology !== 'Python' &&
                        technology !== 'React' &&
                        technology !== 'Bootstrap' &&
                        technology !== 'React Bootstrap' &&
                        technology !== 'Git' &&
                        technology !== 'GitHub' &&
                        technology !== 'PostgreSQL' &&
                        <i className="fa-solid fa-circle fa-fw" />}
                      {' '}{technology}
                    </li>
                  ))}
                </ul>
                </Col>
                <Col sm={6} md={4}>
                <ul className={styles.List}>
                  {everySecondTechnology.map((technology, index1) => (
                    <li key={index1}>
                      {technology === 'HTML' && (<i className="fa-brands fa-html5 fa-fw" />)}
                      {technology === 'CSS' && (<i className="fa-brands fa-css3-alt fa-fw" />)}
                      {technology === 'JavaScript' && (<i className="fa-brands fa-js fa-fw" />)}
                      {technology === 'Python' && (<i className="fa-brands fa-python fa-fw" />)}
                      {technology === 'React' && (<i className="fa-brands fa-react fa-fw" />)}
                      {(technology === 'Bootstrap' || technology === 'React Bootstrap')
                        && (<i className="fa-brands fa-bootstrap fa-fw" />)}
                      {technology === 'Git' && (<i className="fa-brands fa-git fa-fw" />)}
                      {technology === 'GitHub' && (<i className="fa-brands fa-github fa-fw" />)}
                      {technology === 'PostgreSQL' && (<i className="fa-solid fa-database fa-fw" />)}
                      {technology !== 'HTML' &&
                        technology !== 'CSS' &&
                        technology !== 'JavaScript' &&
                        technology !== 'Python' &&
                        technology !== 'React' &&
                        technology !== 'Bootstrap' &&
                        technology !== 'React Bootstrap' &&
                        technology !== 'Git' &&
                        technology !== 'GitHub' &&
                        technology !== 'PostgreSQL' &&
                        <i className="fa-solid fa-circle fa-fw" />}
                      {' '}{technology}
                    </li>
                  ))}
                </ul>
                </Col>
                <Col sm={6} md={4}>
                <ul className={styles.List}>
                  {everyThirdTechnology.map((technology, index2) => (
                    <li key={index2}>
                      {technology === 'HTML' && (<i className="fa-brands fa-html5 fa-fw" />)}
                      {technology === 'CSS' && (<i className="fa-brands fa-css3-alt fa-fw" />)}
                      {technology === 'JavaScript' && (<i className="fa-brands fa-js fa-fw" />)}
                      {technology === 'Python' && (<i className="fa-brands fa-python fa-fw" />)}
                      {technology === 'React' && (<i className="fa-brands fa-react fa-fw" />)}
                      {(technology === 'Bootstrap' || technology === 'React Bootstrap')
                        && (<i className="fa-brands fa-bootstrap fa-fw" />)}
                      {technology === 'Git' && (<i className="fa-brands fa-git fa-fw" />)}
                      {technology === 'GitHub' && (<i className="fa-brands fa-github fa-fw" />)}
                      {technology === 'PostgreSQL' && (<i className="fa-solid fa-database fa-fw" />)}
                      {technology !== 'HTML' &&
                        technology !== 'CSS' &&
                        technology !== 'JavaScript' &&
                        technology !== 'Python' &&
                        technology !== 'React' &&
                        technology !== 'Bootstrap' &&
                        technology !== 'React Bootstrap' &&
                        technology !== 'Git' &&
                        technology !== 'GitHub' &&
                        technology !== 'PostgreSQL' &&
                        <i className="fa-solid fa-circle fa-fw" />}
                      {' '}{technology}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Container className='d-sm-none'>
              {personalInfo.technologies_learned}
            </Container>
          </Col>
        </React.Fragment>
        }
      </Row>
  )
}

export default Homepage
