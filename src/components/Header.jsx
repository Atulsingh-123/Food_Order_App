import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import CloseIcon from '@mui/icons-material/Close';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import Image from 'react-bootstrap/Image'
import Images from './newlogo.png'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import addtocart from './addtocart.png'
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';

function Header() {

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(getData)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Navbar expand="lg" style={{ backgroundColor: "orange" }}>
            <Container fluid>
                <NavLink to="/">
                    <Image src={Images} alt="Logo" style={{ maxHeight: '50px' }} ></Image>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/' className=' pl-7' style={{ color: "black", textDecoration: "none", text: "light" }}>Home</NavLink>
                        <NavLink to="/offers" className=' pl-7' style={{ color: "black", textDecoration: "none", text: "light" }} >Offers</NavLink>
                    </Nav>
                    <input style={{
                        padding: "10px 200px 10px 20px",
                        borderRadius: " 20px",
                        border: " none",
                        marginTop: "10px"
                    }} type='text' placeholder='Search here' />

                    <div style={{ padding: " 0px 32px 0px 0px", display: "flex" }}>
                        <div style={{ margin: " 10px 35px 10px 10px", marginRight: "20px", color: 'white' }}>
                            <NavDropdown className='pl-7' title="Profile" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="pl-8">
                                    <NavLink to="login">Login</NavLink>

                                    {/* <NavLink className='text-decoration-none text-light pl-8' style={{ color: "black" }} to="/login">
                                        login
                                    </NavLink> */}

                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    LogOut
                                </NavDropdown.Item>
                            </NavDropdown></div>
                        <div style={{ paddingTop: "10px" }}>
                            <Badge badgeContent={getData.length} color="primary"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <div>
                                    <  LocalMallSharpIcon style={{ color: 'black', backgroundColor: "oragered", cursor: "pointer" }} /><span style={{ color: "black", cursor: "pointer" }}>Cart</span>
                                </div>
                                {/* <NavLink to="cart" className='text-decoration-none text-light pl-7'> </NavLink> */}

                            </Badge>
                        </div>
                    </div>

                </Navbar.Collapse>
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    getData.length ?
                        <div className='addtocart_style1' style={{ width: "24rem", padding: "10px" }}>

                            <table>
                                <thead>
                                    <tr style={{ justifyContent: "space-between" }}>
                                        <th>Photo</th>
                                        <th>Item details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.map((e) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgsrc} style={{ width: "5rem", height: "srem" }} />
                                                            </NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{e.title}</p>
                                                            <p>Price : {e.sname}</p>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <div className='addtocart_style'>
                            <CloseIcon className='closeIcon'
                                onClick={handleClose} />
                            <p>Your Cart is Empty</p>
                            <img style={{ height: "80px", width: "80px", padding: "10px" }} src={addtocart} alt='img' />
                        </div>
                }

            </Menu>
        </Navbar>
    );
}

export default Header;