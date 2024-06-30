import React from 'react';
import { Link } from 'react-router-dom';

import { useProjects } from '../../contexts/ProjectsContext';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import styles from '../../styles/Projects.module.css';
import appStyles from '../../App.module.css';

import ImageAsset from '../../components/ImageAsset';

function ProjectsPage() {
  const projects = useProjects().data;
  console.log('Projects: ', projects)

  if (!projects) {
    return <div className={appStyles.MainHeader}><h1>Loading...</h1></div>;
  }

  return (
    (projects && projects?.length > 0) &&
      <Row className={appStyles.MainContainer}>
        <div className={appStyles.MainHeader}>
          <h1>Projects</h1>
        </div>
        <Carousel className={`${appStyles.ContentContainer} d-sm-flex d-none`}>
          {projects.length > 0 && projects.map((project, index) => (
            <Carousel.Item key={index} interval={20000}>
              <ImageAsset
                className="d-block w-100"
                src={project.image}
                alt={project.title} />
              <Carousel.Caption className={styles.CaptionContainer}>
                <h3 className={styles.Title}>
                  <Link to={`/projects/${project.id}`} className={styles.TitleLink}>
                    {project.title}
                  </Link>
                </h3>
                <p className={styles.Excerpt}>{project.excerpt}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {projects.length > 0 && projects.map((project, index) => (
          <Col
            xs={12}
            key={index}
            className={`${appStyles.ContentContainer} d-sm-none d-block`}>
              <h3 className={`${styles.ProjectTitleSmallScreen} text-center`}>
                <Link to={`/projects/${project.id}`} className={styles.TitleLink}>
                  {project.title}
                </Link>
              </h3>
            <ImageAsset
              className={styles.Image}
              src={project.image}
              alt={project.title}
            />
              <p className={styles.Excerpt}>{project.excerpt}</p>
          </Col>
        ))}
      </Row>
  )
}

export default ProjectsPage
