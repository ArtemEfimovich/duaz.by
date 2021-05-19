import React from 'react';
import s from './Navbar.module.css'
import {Col, Container, Nav, Row} from "react-bootstrap";
import { Body } from '../Body/Body';

const Navbar = () => {
    return (
        <div  className={s.container}>
            <Container>
                <Row className="justify-content-left">
                    <Col xs='auto'>
                            <Nav.Link href="#rentals">Аренда/Прокат</Nav.Link>
                            <Nav.Link href="#services">Услуги</Nav.Link>
                            <Nav.Link href="#catalog">Каталог</Nav.Link>
                    </Col>
                    <Col md="auto">
                        <Body/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Navbar;
