import React, { useState } from 'react';
import './AddServices.css';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import DashboardSlider from '../DashboardSlider/DashboardSlider';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';

export default function AddServices() {
  document.body.style.backgroundColor = '#e5e5e5';
  const [files, setFiles] = useState([]);
  const [service, setService] = useState({
    title: '',
    description: '',
  });

  return (
    <div>
      <Row>
        <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
          <DashboardSlider />
        </div>
        <div className="col-md-8 col-sm-7 col-lg-9">
          <Row className="addServicesForm">
            <DashboardStatus pageName={{ name: 'AddService' }} />
            <div
              className="col-md-12 my-5 dashboardContainer"
              style={{ backgroundColor: '#e5e5e5' }}
            >
              <Form className="addServiceForm my-5">
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Service Title</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        className="title"
                        style={{ height: '45px' }}
                        name="title"
                        placeholder="Enter title"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Description</Form.Label>
                      <textarea
                        required
                        className="form-control description"
                        name="description"
                        placeholder="Enter description"
                        rows="3"
                      ></textarea>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Icon</Form.Label>
                      <FilePond
                        files={files}
                        required={true}
                        allowFileEncode={true}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        maxFiles={3}
                        name="files"
                        labelIdle="Drag & Drop your photo"
                      />
                    </FormGroup>
                  </div>
                  <div className=" addServiceBtn mt-5 pr-5 col-sm-12 d-flex align-items-center justify-content-end">
                    <Button className="commonBtn" type="submit">
                      Add Service
                    </Button>
                  </div>
                </Row>
              </Form>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
}
