import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Collapse from 'react-bootstrap/Collapse';

import styles from '../styles/NavBar.module.css';


function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar
      bg="light"
      fixed="left"
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
              <NavLink
                to="/" target='_blank'
                className={styles.NavLink}>
                  <i className="fab fa-github fa-fw" /> {expanded && 'GitHub'}
              </NavLink>
              <NavLink
                to="/"
                className={styles.NavLink}>
                  <i className="fab fa-linkedin fa-fw" /> {expanded && 'LinkedIn'}
              </NavLink>
              <NavLink
                to="/"
                className={styles.NavLink}>
                  <i className="fab fa-facebook fa-fw" /> {expanded && 'Facebook'}
              </NavLink>
              <NavLink
                to="/"
                className={styles.NavLink}>
                  <i className="fab fa-instagram fa-fw" /> {expanded && 'Instagram'}
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
