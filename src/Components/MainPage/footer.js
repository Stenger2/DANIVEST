import React from 'react'
import { Nav } from "react-bootstrap";
import logo from "../../image/w-logo-blue-white-bg.png";



function footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="cooperate_cell px-4">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3">
                                <img
                                    src={logo}
                                    alt='logo'
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <h3>Карта сайта</h3>
                                <ul>
                                    <li>
                                        <Nav.Link href="/">
                                            Главная
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="/aboutus">
                                            О нас
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="/gallery">
                                            Портфолио
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="/partners">
                                            Партнеры
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="/contacts">
                                            Контакты
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3">
                                <h3>Связь</h3>
                                <ul>
                                    <li>
                                        <Nav.Link href="tel: +375 (29) 330-34-34">
                                            +375 (29) 330-34-34
                                        </Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="mailto:woodbudby@gmail.com">
                                            woodbudby@gmail.com
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
