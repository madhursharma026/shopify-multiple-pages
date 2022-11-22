import styles from '../../styles/Header.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={`${styles.headerContainer} fixed-top`} style={{ height: "80px", background: "#002E25" }}>
            <Navbar expand="lg" className='pt-3'>
                <Navbar.Brand>
                    <Link href='/'>
                        <img src="https://www.klarna.com/assets/sites/2/2020/01/13142909/shopify_logo_black.png" alt="" width='121px' height='35px' />
                    </Link>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                <Button className={`${styles.navbarAfterLGScrn}`} onClick={handleShow} style={{ background: 'transparent', border: "0", color: "White" }}>
                    <FaBars />
                </Button>


                <Navbar.Collapse id="navbarScroll" className={`pt-1 ${styles.navbarBeforeLGScrn}`}>
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent" }} className={`${styles.navbarDropdown}`}>
                                Start
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent" }} className={`${styles.navbarDropdown}`}>
                                Sell
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent" }} className={`${styles.navbarDropdown}`}>
                                Market
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent" }} className={`${styles.navbarDropdown}`}>
                                Manage
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Link href="/Pricing" className={`${styles.navbarLink} pt-1 px-lg-3`}>Pricing</Link>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent" }} className={`${styles.navbarDropdown}`}>
                                Learn
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link href="/Login" className={`${styles.navbarLink} pt-1 px-lg-3`} style={{ color: "#ccdad6", textDecoration: 'none' }}>Log in</Link>
                        <button type="button" className={`btn p-2 ${styles.navbarBtn}`} style={{ marginTop: "-5px", border: "2px solid #008060" }}><b>Start free trial</b></button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: "100%" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link href='/'>
                            <img src="https://www.klarna.com/assets/sites/2/2020/01/13142909/shopify_logo_black.png" alt="" width='121px' height='35px' />
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ borderTop: "1px solid black" }}>
                    <select className='form-select w-100' style={{ border: "0", fontWeight: "600", fontSize: "20px" }}>
                        <option>Start</option>
                        <option value="">Link 1</option>
                        <option value="">Link 2</option>
                        <option value="">Link 3</option>
                    </select>
                    <select className='form-select w-100' style={{ border: "0", fontWeight: "600", fontSize: "20px" }}>
                        <option>Sell</option>
                        <option value="">Link 1</option>
                        <option value="">Link 2</option>
                        <option value="">Link 3</option>
                    </select>
                    <select className='form-select w-100' style={{ border: "0", fontWeight: "600", fontSize: "20px" }}>
                        <option>Market</option>
                        <option value="">Link 1</option>
                        <option value="">Link 2</option>
                        <option value="">Link 3</option>
                    </select>
                    <select className='form-select w-100' style={{ border: "0", fontWeight: "600", fontSize: "20px" }}>
                        <option>Manage</option>
                        <option value="">Link 1</option>
                        <option value="">Link 2</option>
                        <option value="">Link 3</option>
                    </select>
                    <hr />
                    <Link href="/Pricing" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Pricing</Link><br />
                    <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Learn</Link>
                    <Link href="/Login" type="button" className={`btn mt-3 p-2 btn-outline-success w-100`} style={{ marginTop: "-5px", border: "2px solid #008060" }}><b>Login</b></Link>
                    <button type="button" className={`btn mt-3 p-2 ${styles.navbarBtn} w-100`} style={{ marginTop: "-5px", border: "2px solid #008060" }}><b>Start free trial</b></button>
                <hr />
                <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>About</Link><br />
                <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Careers</Link><br />
                <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Press and Media</Link><br />
                <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Shopify Plus</Link><br />
                <Link href="/" className={`pt-1 px-lg-3 text-black`} style={{textDecoration:"none", fontWeight:'600', fontSize:"20px"}}>Sitemap</Link><br />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header
