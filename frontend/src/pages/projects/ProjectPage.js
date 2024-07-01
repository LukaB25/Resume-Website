import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useProjects } from '../../contexts/ProjectsContext';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../styles/Projects.module.css';
import appStyles from '../../App.module.css';
import ImageAsset from '../../components/ImageAsset';
import Container from 'react-bootstrap/esm/Container';

function ProjectPage() {
  const { id } = useParams();
  const { fetchProjectData, project } = useProjects();
  const prevIdRef = useRef(null);


  const everySecondTechnology = [];
  const everyFirstTechnology = [];
  const technologies = project?.technologies.split(', ');

  (technologies && technologies.length > 0) &&
    technologies.forEach((technology, index2) => {
    if ((index2 + 1) % 2 === 0) {
      everySecondTechnology.push(technology);
    } else {
      everyFirstTechnology.push(technology);
    }
  })

  useEffect(() => {
    if (id !== prevIdRef.current) {
      fetchProjectData(id);
      prevIdRef.current = id;
    }
  }, [fetchProjectData, id]);

  console.log('Project: ', project);

  if (!project) {
    return <div className={appStyles.MainHeader}><h1>Loading...</h1></div>;
  }

  return (
    (project && project.length !== 0) && 
    <Row className={appStyles.MainContainer}>
      <div className={appStyles.MainHeader}>
        <h1>{project.title}</h1>
      </div>
      <Col xs={12} className={appStyles.ContentContainer}>
        <ImageAsset src={project?.image} alt={`${project?.title} website`} />
        <Container>
          <div className={`d-none d-md-flex justify-content-between ${styles.ProjectInfo}`}>
            <h3>
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className={styles.ProjectLinks}
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
            </h3>
            {project.school_project === true ? (
              <React.Fragment>
              <h3 className='mt-2'>Bootcamp project</h3>
              <h3 className='mt-2'>Grade: {project.grade}</h3>
              </React.Fragment>
            ) : <h3 className='mt-2'>Personal project</h3>
            }
            <h3>
              <a
                href={project.live_site_url}
                target="_blank"
                rel="noreferrer"
                className={styles.ProjectLinks}
              >
                <i className="fa-solid fa-globe" /> Live page
              </a>
            </h3>
          </div>
          <div className={`d-flex d-md-none justify-content-between ${styles.ProjectInfo}`}>
            <h3>
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className={styles.ProjectLinks}
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
            </h3>
            <h3>
              <a
                href={project.live_site_url}
                target="_blank"
                rel="noreferrer"
                className={styles.ProjectLinks}
              >
                <i className="fa-solid fa-globe" /> Live page
              </a>
            </h3>
          </div>
          <div className={`${'d-flex' && ('text-center')} d-md-none ${styles.ProjectInfo}`}>
            {project.school_project === true ? (
              <React.Fragment>
              <h3 className='mb-3'>Bootcamp project</h3>
              <h3>Grade: {project.grade}</h3>
              </React.Fragment>
            ) : <h3>Personal project</h3>
            }
          </div>
          <Row>
          <Col md={9} className={styles.Description}>
            <h3 className='text-center mb-5'>About the Project:</h3>
            {project.description.split('\n').map((paragraph, index) => (
              <span key={index}> {paragraph} <br /> </span>
            ))}
          </Col>
          <Col md={3} className={`${styles.Technologies} d-none d-md-block`}>
            <h3 className='text-center mb-5'>Technologies used:</h3>
            <ul className={`${styles.TechnologiesList}`}>
            {project.technologies.split(', ').map((technology, index1) => (
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
                  <br /> </li>
            ))}
            </ul>
          </Col>
          <Col md={3} className={`${styles.Technologies} d-md-none`}>
            <h3 className='text-center mb-5'>Technologies used:</h3>
            <Row>
              <Col xs={6}>
                <ul className={styles.TechnologiesList}>
                {everyFirstTechnology.map((technology, index3) => (
                  <li key={index3}>
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
                      <br />
                  </li>
                ))}
                </ul>
              </Col>
              <Col xs={6}>
                <ul className={styles.TechnologiesList}>
                {everySecondTechnology.map((technology, index4) => (
                  <li key={index4}>
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
                      <br />
                  </li>
                ))}
                </ul>
              </Col>
            </Row>
          </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

export default ProjectPage;
