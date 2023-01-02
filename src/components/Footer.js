import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo_attuale.png";

import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
              <a href="https://www.instagram.com/attuale.digital/" target="_blank"><img src={navIcon3} rel="" alt="Icon" /></a>
            </div>
            <p>Realizzato da Attuale. Tutti i diritti riservati</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}