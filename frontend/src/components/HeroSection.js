import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { usePersonalInfo } from '../contexts/PersonalInfoContext';

import styles from '../styles/HeroSection.module.css';
import appStyles from '../App.module.css'

function HeroSection() {
  const personalInfo = usePersonalInfo().data?.[0];
  return (
    <div>
      <Row className={styles.HeroSmallScreen} xs={1} md={2}>
        <Col className={`align-self-center`} xs={{ order: 2 }} md={{ order: 1 }}>
          <Container className={styles.HeroContainer}>
            <h1>{personalInfo?.name}</h1>
            <p>{personalInfo?.title}</p>
            <div className={`${styles.HeroButtons} text-center`}>
              <Button
                href="/Luka_Black_CV.pdf"
                download="Luka_Black_CV.pdf"
                variant="primary"
                className={styles.DownloadButton}
              >
                <span className='d-none d-sm-flex d-md-none d-lg-flex'><i className="fa-solid fa-file-arrow-down fa-fw" /> Download CV</span>
                <span className='d-flex d-sm-none d-md-flex d-lg-none'><i className="fa-solid fa-file-arrow-down fa-fw" />cv</span>
              </Button>
              <Link to='/contact' className={`${styles.ContactLink} btn`}>
                <span className='d-none d-sm-flex d-md-none  d-lg-flex'><i className="fa-solid fa-message fa-fw" /> Contact me</span>
                <span className='d-flex d-sm-none d-md-flex d-lg-none'><i className="fa-solid fa-message fa-fw" />me</span>
              </Link>
            </div>
          </Container>
        </Col>
        <Col xs={{ order: 1 }} md={{ order: 2 }}>
          <Container className={`${styles.HeroImageContainer} ${appStyles.ContentContainer}`}>
            <img
              src={personalInfo?.image}
              alt="Luka Black"
              className={styles.HeroImage}
            />
          </Container>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ marginTop: '7.5rem' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection
