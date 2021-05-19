import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import s from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <div>
            <div><Navbar>
                <Navbar.Brand href="#home">Duaz.by</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className={s.navbarHeader}>
                            Work time:<br/>
                            mo-fr 09-20<br/>
                            sat- sun 10-15<br/>
                            phone +37529 ... .. ..<br/>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div>
                <Navbar >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#catalog">Каталог</Nav.Link>
                        <Nav.Link href="#services">Услуги</Nav.Link>
                        <Nav.Link href="#contacts">Контакты</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Поиск..." className="mr-sm-2" />
                        <Button variant="outline-primary">Поиск</Button>
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}


export default Header;