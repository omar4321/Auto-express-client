import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Banner.css';

const Banner = () => {
  return (
    <div id="banner">
      <Container fluid>
        <Row className=" d-flex align-items-center justify-content-center  banner mb-3">
          <Col md={4} className="p-md-5 order-2 order-md-1 ">
            <Fade left duration={2000} distance="40px">
              <h2>
                We Sales Car <br /> Your Favorite Brands
              </h2>
              <p className=" my-4 pr-md-5 ">
                Auto Express you will encounter a light-hearted group of
                individuals who come together collectively to make your time
                with us enjoyable
              </p>
              <Button className="btn-main mb-5" href="#services">
                Get Started
              </Button>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade right duration={2000} distance="40px">
              <Image
                src="https://i.ibb.co/PrKgs9q/flat-car-salesman-with-contract-document-23-2147876285-removebg-preview.png"
                fluid
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
