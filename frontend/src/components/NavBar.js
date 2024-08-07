import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Collapse from 'react-bootstrap/Collapse';

import styles from '../styles/NavBar.module.css';

import { usePersonalInfo } from '../contexts/PersonalInfoContext';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

function NavBar() {
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  const [loaded, setLoaded] = useState(false);

  const personalInfo = usePersonalInfo().data?.[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleNavbar = (e) => {
    if (!expanded && e.target.tagName !== 'A' && e.target.tagName !== 'I'){
      setExpanded(!expanded);
    }
    else if (expanded) {
      setExpanded(false);
    
    }
  }
  const copyToClipboard = (text) => {
    try {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied to clipboard`);
    } catch (error) {
      toast.error('Failed to copy text to clipboard')
    }
  };

  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar
      bg="light"
      fixed="left"
      ref={ref}
      expanded={expanded}
      onClick={toggleNavbar}
      className={`${styles.NavBar}
        ${expanded && styles.NavBarExpanded}`}>
      <NavLink to="/">
        <NavbarBrand className={styles.Name}>
          {expanded ? 'Luka Black' : 'LB'}
        </NavbarBrand>
      </NavLink>
      <Collapse in={expanded} onExiting={closeNavbar}>
        <Container fluid className={styles.NavLinksContainer}>
          <Nav className={styles.NavLinks}>
            <NavLink
              exact to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-home fa-fw" /> {expanded && 'Home'}
            </NavLink>
            <NavLink
              to="/education"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-graduation-cap fa-fw"/> {expanded && 'Education'}
            </NavLink>
            <NavLink
              to="/experience"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-briefcase fa-fw" /> {expanded && 'Experience'}
            </NavLink>
            <NavLink
              to="/skills"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-list-alt fa-fw" /> {expanded && 'Skills'}
            </NavLink>
            <NavLink
              to="/projects"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-lightbulb fa-fw" /> {expanded && 'Projects'}
            </NavLink>
            <NavLink
              to="/contact"
              className={styles.NavLink}
              activeClassName={styles.Active}>
                <i className="fas fa-envelope fa-fw" /> {expanded && 'Contact'}
            </NavLink>
            <div className={styles.NavSocialLinks}>
              {expanded && <div className={styles.NavPersonalInfo}>
                <p>{personalInfo?.address}</p>
                {personalInfo?.phone !== null ? (
                  <Nav.Link
                    onClick={() => copyToClipboard(personalInfo?.phone)}
                      className={styles.NavLink}
                    >
                    {personalInfo?.phone}
                  </Nav.Link>
                ) : null}
                {personalInfo?.email !== null ? (
                  <Nav.Link
                    onClick={() => copyToClipboard(personalInfo?.email)}
                      className={styles.NavLink}
                    >
                    {personalInfo?.email}
                  </Nav.Link>
                ) : null}
              </div>}
              {personalInfo?.github_url !== null ? (<Nav.Link
                href={`${personalInfo?.github_url}`}
                target='_blank'
                className={styles.NavLink}>
                  <i className="fab fa-github fa-fw" /> {expanded && 'GitHub'}
              </Nav.Link>) : null}
              {personalInfo?.linkedin_url !== null ? (<Nav.Link
                href={`${personalInfo?.linkedin_url}`}
                target='_blank'
                className={styles.NavLink}>
                  <i className="fab fa-linkedin fa-fw" /> {expanded && 'LinkedIn'}
              </Nav.Link>) : null}
              {personalInfo?.facebook_url !== null ? (<Nav.Link
                href={`${personalInfo?.facebook_url}`}
                target='_blank'
                className={styles.NavLink}>
                  <i className="fab fa-facebook fa-fw" /> {expanded && 'Facebook'}
              </Nav.Link>) : null}
              {personalInfo?.instagram_url !== null ? (<Nav.Link
                href={`${personalInfo?.instagram_url}`}
                target='_blank'
                className={styles.NavLink}>
                  <i className="fab fa-instagram fa-fw" /> {expanded && 'Instagram'}
              </Nav.Link>) : null}
              {loaded && (
                <>
                  {personalInfo?.youtube_url !== null ? (<Nav.Link
                    href={`${personalInfo?.youtube_url}`}
                    target='_blank'
                    className={styles.NavLink}>
                      <i className="fab fa-youtube fa-fw" /> {expanded && 'YouTube'}
                  </Nav.Link>) : null}
                  {personalInfo?.twitter_url !== null ? (<Nav.Link
                    href={`${personalInfo?.twitter_url}`}
                    target='_blank'
                    className={styles.NavLink}>
                      <i className="fa-brands fa-x-twitter fa-fw" /> {expanded && 'Twitter'}
                  </Nav.Link>) : null}
                </>
              )}
            </div>
          </Nav>
        </Container>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
