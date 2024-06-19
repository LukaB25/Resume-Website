import React from 'react';

import { useCourseInfo } from '../../contexts/CourseInfoContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../../styles/Education.module.css';
import appStyles from '../../App.module.css';

function Course() {
  const courseInfo = useCourseInfo().data;
  console.log(courseInfo);

  return(
    (courseInfo && courseInfo.length > 0) ? (
      <Row className={appStyles.MainContainer}>
        <div className={appStyles.MainHeader}>
          <h1>Courses</h1>
        </div>
        {courseInfo && courseInfo.map((course, index) => (
          <Col xs={12} key={index} className={styles.EducationContainer}>
            <Container className={styles.EducationContent}>
              <h2 className={styles.Title}>{course.title}</h2>
              <div className={styles.SpecialDisplay}>
                <h3 className={styles.CourseName}>
                  {course.website ?
                    (<a
                      href={`${course.website}`}
                      className={styles.SchoolLink}
                      target='_blank' 
                      rel="noreferrer"> {course.course_name}</a>
                      ) : (
                      course.course_name
                    )
                  }
                </h3>
                <p className={styles.Date}>{course.start_date} - {course.end_date ? (course.end_date) : 'present'}</p>
              </div>
              <p className={styles.Description}>
                {course.description.split('\n').map((paragraph, index) => (
                  <span key={index}> {paragraph} <br /> </span>
                ))}
              </p>
            </Container>
          </Col>
        ))}
      </Row>
    ) : null
  )
}

export default Course
