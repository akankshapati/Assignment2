import React from 'react'
import { Col, Container, NavLink, Row} from 'react-bootstrap';
import './Footer.css'
import Trafalgar from '../header/Navbar/Trafalgar'

const Footer = () => {
  return (
    <div className="footer">
        <Container>
            <Row className="text-white">
                
                <Col xs={12} sm={6} md={3} lg={6}>
                    <div className="single-footer-widget">
                        <div className="widget-title">
                            <h2><Trafalgar /></h2>
                        </div>
                        <div className="widget-content">
                                <span>Trafalgar provides progressive, and affordable healthcare, 
                                    accessible on mobile and online for everyone
                                </span>
                                <div className="footer-copy-right">
                                 <span className='mb-0'>&copy; Trafalgar PTY LTD 2020 All Rights Reserved</span>
                                 </div>
                         </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} lg={2}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Company</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">testimonials</NavLink>
                                <NavLink className="footer-link">Find a Doctor</NavLink>
                                <NavLink className="footer-link">Services</NavLink>
                                <NavLink className="footer-link">Our Apps</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Region</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">India</NavLink>
                                <NavLink className="footer-link">Indoniasa</NavLink>
                                <NavLink className="footer-link">Honkonk</NavLink>
                                <NavLink className="footer-link">Canada</NavLink>
                                <NavLink className="footer-link">Singapoar</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={2}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Help Center</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Help Center</NavLink>
                                <NavLink className="footer-link">Meet the Team</NavLink>
                                <NavLink className="footer-link">Contact Support</NavLink>
                                <NavLink className="footer-link">Instructions</NavLink>
                                <NavLink className="footer-link">How it works</NavLink>
                            </div>
                        </div>
                    </Col>
            </Row>
        </Container>
        </div>
  )
}

export default Footer
