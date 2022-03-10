import React, { useState } from 'react';
import './MakeAdmin.css';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import DashboardSlider from '../DashboardSlider/DashboardSlider';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';
import Axios from 'axios';

export default function MakeAdmin() {
  const [email, setEmail] = useState({
    email: '',
  });
  const emailData = (e) => {
    if (e.target.name === 'Email') {
      setEmail({ ...email, email: e.target.value });
    }
  };

  const emailSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/addAdmin', email)
      .then(() => {
        alert('Make admin Successfully');
      })
      .catch(() => {
        alert('Can not make admin. Please Try again later');
      });
  };

  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9 p-0">
            <DashboardStatus />
            <Form
              onSubmit={emailSubmit}
              className="makeAdminForm"
              style={{ height: '67vh' }}
            >
              <FormGroup className="px-5 my-5">
                <Form.Label>Email</Form.Label>
                <div className="d-flex emailContainer justify-content-center align-items-center">
                  <Form.Control
                    required
                    onChange={emailData}
                    type="email"
                    className=" email"
                    name="Email"
                    placeholder="Enter email"
                  />
                  <Button type="submit" className="mx-3 adminBtn commonBtn">
                    Make Admin
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </div>
        </Row>
      </div>
    </>
  );
}
