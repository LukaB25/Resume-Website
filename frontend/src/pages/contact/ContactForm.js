import React from 'react';
import { toast } from 'react-toastify';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import styles from '../../styles/Contact.module.css';

import { usePersonalInfo } from '../../contexts/PersonalInfoContext';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const personalInfo = usePersonalInfo().data?.[0];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
    toast.success('Form has been cleared!');
  };

  const copyToClipboard = (text) => {
    try {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied to clipboard`);
    } catch (error) {
      toast.error('Failed to copy text to clipboard')
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData)
      await axios.post('https://8000-lukab25-resumewebsite-qp04gn2ibi2.ws.codeinstitute-ide.net/api/contact/', {
        name: formData?.name,
        email: formData?.email,
        subject: formData?.subject,
        message: formData?.message,
      })
      await axios.post('https://hooks.zapier.com/hooks/catch/19352901/23mq8rv/',
        new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      toast.success(`Hi ${formData.name}, your message has been sent.`)
      handleClear();
    } catch (error) {
      toast.error(`Hi ${formData.name}, your message didn't send. Please try again.`)
      console.log(error)
    }
    
  }

  return (
    <Container className='d-flex justify-content-center'>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} className='d-flex justify-content-center'>
          <div className={styles.ContactMessage}>
            <h2>Get in Touch</h2>
            <p>I am currently available for employment or hiring, so feel free to reach out.</p>
            <p>You can contact me via:</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className={`${styles.PersonalInfo} d-block d-md-flex justify-content-center text-center`}>
            {personalInfo !== undefined && personalInfo !== null &&
              <React.Fragment>
                <p
                  onClick={() => copyToClipboard(personalInfo?.phone)}
                  className={styles.ClickableText}
                ><i className="fa-solid fa-phone fa-fw" /> {personalInfo?.phone}
                </p>
                <p
                  onClick={() => copyToClipboard(personalInfo?.email)}
                  className={styles.ClickableText}
                >
                  <i className="fa-solid fa-envelope fa-fw" /> {personalInfo?.email}
                </p>
                <p>
                  <i className="fa-solid fa-location-pin fa-fw" /> {personalInfo?.address}
                </p>
              </React.Fragment>
            }
          </div>
        </Col>
        <Col xs={12} className='d-flex justify-content-center'>
          <form onSubmit={handleSubmit} className={`${styles.ContactForm}`}>
            <div className="form-group">
              <label htmlFor="name" className='d-none'>Name:</label>
              <input
                type="text"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className={`${styles.InputBox} form-control`}
                id="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className='d-none'>Email:</label>
              <input
                type="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                className={`${styles.InputBox} form-control`}
                id="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className='d-none'>Subject:</label>
              <select
                className={`${styles.SelectBox} form-control`}
                id="subject"
                onChange={handleChange}
                value={formData.subject}
                required
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Feedback">Feedback</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className='d-none'>Message:</label>
              <textarea
                className={`${styles.InputBox} ${styles.MessageBox} form-control`}
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                id="message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className='text-center'>
              <Button
                variant="primary"
                type="button"
                onClick={handleClear}
                className={`${styles.Button} ${styles.ClearButton} d-inline-flex justify-content-center`}
              >
                <div className={styles.ButtonIcon}><i className="fa-regular fa-trash-can" /></div>
                <div className={styles.ButtonText}>
                  {[...'Clear'].map((letter, index) => (
                    <span key={index} style={{ '--i': index }}>{letter}</span>
                  ))}
                </div>
              </Button>
              <Button
                variant="primary"
                type="submit"
                className={`${styles.Button} ${styles.SendButton} d-inline-flex justify-content-center`}
              >
                <div className={`${styles.ButtonIcon} ${styles.PlaneIcon}`}>
                  <i className="fa-regular fa-paper-plane" />
                  <div className={styles.PlaneContrail}></div>
                </div>
                <div className={styles.ButtonText}>
                  {[...'Send'].map((letter, index) => (
                    <span key={index} style={{ '--i': index }}>{letter}</span>
                  ))}
                </div>
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
