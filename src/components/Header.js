import React from "react";
import { Link } from "react-router-dom";

// Import Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

//Import CSS
import "../sass/components/_Header.scss";
import styles from "../sass/components/_Header.module.scss";

// Header Component
export default class Header extends React.Component {
  render() {
    const signOutHandler = async () => {
      console.log("Signing");
    };
    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="xl"
        bg="dark"
        variant="dark"
      >
        <Container fluid>
          <Link to="/">
            <Navbar.Brand className={styles.friends}>
              <span className="friends-start">
                F<span className="friends-red">.</span>R
                <span className="friends-blue">.</span>I
                <span className="friends-yellow">.</span>E
                <span className="friends-red">.</span>N
                <span className="friends-yellow">.</span>D
                <span className="friends-blue">.</span>S
              </span>
              <span className="friends-end">tagram</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/login"> Login </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/signup">Signup</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      // <div>
      //   <h1>
      //     <Link className="friends" to="/"></Link>
      //   </h1>
      //   {/* Passes down props from main to the first child */}
      //   {/* {React.cloneElement(this.props.children, this.props)}; */}
      // </div>
    );
  }
}
