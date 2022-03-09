import React from 'react';
import './MakeAdmin.css';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import DashboardSlider from '../DashboardSlider/DashboardSlider';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';

export default function MakeAdmin() {
  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9 p-0">
            <DashboardStatus />
            <Form className="makeAdminForm" style={{ height: '67vh' }}>
              <FormGroup className="px-5 my-5">
                <Form.Label>Email</Form.Label>
                <div className="d-flex emailContainer justify-content-center align-items-center">
                  <Form.Control
                    required
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
