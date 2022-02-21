import React from "react";
// Import Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../sass/components/_Header.module.scss";
//Import CSS
import "../sass/components/_Header.scss";
import Logo from "./Logo";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// Header Component
export class Header extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav id={styles.navMenu}>
        <Nav.Link as={Link} to="/login">
          Logout
        </Nav.Link>
      </Nav>
    );

    const guestLinks = (
      <Nav id={styles.navMenu}>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>

        <Nav.Link as={Link} to="/signup">
          Sign Up
        </Nav.Link>
      </Nav>
    );

    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
