import React, { useState, setState } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../css/main.css";
import logo from "../image/w-logo-blue-white-bg.png";

const Header = () => {
  const [modal, modalState] = useState(false);
  const [backConnectData, setBackConnectData] = useState({
    initials: "",
    mail: "",
    telephonenumber: "",
    message: "",
  });

  const OpenBackConnectModal = () => {
    handleShow();
  };

  const handleClose = () => modalState(false);
  const handleShow = () => modalState(true);

  return (
    <div className="container">
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Обратная связь</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="initials" name="initial">
              <Form.Label>Ваше ФИО:</Form.Label>
              <Form.Control type="text" placeholder="ФИО" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              name="mail"
            >
              <Form.Label>Mail</Form.Label>
              <Form.Control type="mail" placeholder="Электронная почта" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="telephonenumber"
              name="telephonenumber"
            >
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="text" placeholder="Номер телефона" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message" name="message">
              <Form.Label>Сообщение</Form.Label>
              <Form.Control type="text" placeholder="Сообщение" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="success">
              Отправить
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="logo_img"
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="navbar__text" href="/">
                Главная
              </Nav.Link>
              <Nav.Link className="navbar__text" href="/aboutus">
                О нас
              </Nav.Link>
              <Nav.Link className="navbar__text" href="/gallery">
                Портфолио
              </Nav.Link>
              <Nav.Link className="navbar__text" href="/partners">
                Партнеры
              </Nav.Link>
              <Nav.Link className="navbar__text" href="/contacts">
                Контакты
              </Nav.Link>
            </Nav>
            <Button variant="info" onClick={OpenBackConnectModal}>
              Заказать обратный звонок
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


