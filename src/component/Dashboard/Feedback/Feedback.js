import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import DashboardSlider from '../DashboardSlider/DashboardSlider';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';

export default function Feedback() {
  document.body.style.backgroundColor = '#e5e5e5';
  const { user } = useAuth();
  const { displayName, photoURL, email } = user;
  const [feedback, setFeedback] = useState({
    img: photoURL,
    name: displayName,
    designationAndCompanyName: '',
    feedback: '',
  });
  const feedbackData = (e) => {
    if (e.target.name === 'Designation') {
      setFeedback({ ...feedback, designationAndCompanyName: e.target.value });
    } else if (e.target.name === 'Feedback') {
      setFeedback({ ...feedback, feedback: e.target.value });
    } else if (e.target.name === 'Name') {
      setFeedback({ ...feedback, name: e.target.value });
    }
  };
  const submitFeedback = (e) => {
    const designationInput = document.querySelector('.designation');
    const feedbackInput = document.querySelector('.feedback');
    e.preventDefault();
    Axios.post('http://localhost:5000/sendClientFeedback', feedback)
      .then(() => {
        alert('Done');
        designationInput.value = '';
        feedbackInput.value = '';
      })
      .catch(() => {});
  };
  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9">
            <Row>
              <DashboardStatus pageName={{ name: 'Feedback' }} />
              <Form onSubmit={submitFeedback} style={{ height: '86vh' }}>
                <Row>
                  <div className="col-md-10 col-lg-12 my-1 mx-5">
                    <FormGroup>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        defaultValue={displayName}
                        onChange={feedbackData}
                        required
                        type="text"
                        className="text"
                        name="Name"
                        placeholder="Enter name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label> Designation ,Company’s name</Form.Label>
                      <Form.Control
                        required
                        onChange={feedbackData}
                        type="text"
                        className="designation "
                        name="Designation"
                        placeholder="Enter Designation , Company’s name "
                      />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Your Feedback</Form.Label>
                      <textarea
                        required
                        onChange={feedbackData}
                        className="form-control feedback"
                        name="Feedback"
                        placeholder="Enter Feedback"
                        rows="3"
                      ></textarea>
                    </FormGroup>

                    <Button type="submit" className="mt-5 px-5 commonBtn ">
                      Submit
                    </Button>
                  </div>
                </Row>
              </Form>
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}
