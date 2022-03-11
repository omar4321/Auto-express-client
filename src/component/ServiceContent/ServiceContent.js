import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ServiceContent = (props) => {
  const { img, name, description, price, _id } = props.service || {};
  return (
    <>
      <Col md={4} className=" mb-5 text-center service-detail">
        <Fade bottom duration={2500} distance="40px">
          <Card className="border-0 py-4">
            <Card.Img
              variant="top"
              height="300"
              src={img}
              className="rounded-2"
              // style={{ objectFit: 'contain' }}
            />
            <Card.Body className="">
              <Card.Title as="h5" className="">
                {name}
              </Card.Title>
              <Card.Text className="p-0 m-0" as="p">
                {description}
              </Card.Text>
              <div>
                <h5 className="mb-3"> Price: ${price}</h5>
                <Link to={`/booking/${_id}`}>
                  <button className="btn btn-success"> Buy now</button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Fade>
      </Col>
    </>
  );
};

export default ServiceContent;
