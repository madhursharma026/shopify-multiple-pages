import styles from '../../styles/Header.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';


function Header() {
    return (
        <div className={`${styles.headerContainer} fixed-top`} style={{ height: "80px", background: "#002E25" }}>
            <Navbar expand="lg" className='pt-3'>
                <Navbar.Brand>
                    <Link href='/'>
                        <img src="https://www.klarna.com/assets/sites/2/2020/01/13142909/shopify_logo_black.png" alt="" width='121px' height='35px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='pt-1'>
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
        </div>
    )
}

export default Header
