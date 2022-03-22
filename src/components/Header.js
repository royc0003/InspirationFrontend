import React from "react";
// Import Bootstrap
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import styles from "../sass/components/_Header.module.scss";
//Import CSS
import "../sass/components/_Header.scss";
import Logo from "./Logo";



// Header Component
export function Header(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
    const { isAuthenticated } = props.auth;
    const handleLogOut = async() => {
      console.log("logging out");
      await dispatch(logout())

      navigate("/login");
    };

    const authLinks = (
      <Nav id={styles.navMenu}>
        <Nav.Link id={styles.profileLink} as={Link} to="/profilepage">
          My Profile
        </Nav.Link>
        <Button
          className="header-logout"
          onClick={handleLogOut}
          style={{
            fontFamily: "Shadows Into Light",
            color: "#fdfdfd",
            backgroundColor: "#212529",
            fontSize: "25px",
            borderColor: "#fdfdfd",
          }}
        >
          Logout
        </Button>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
