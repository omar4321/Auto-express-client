import React, { useContext, useEffect, useState } from 'react';
import './AddServices.css';
import { useForm } from 'react-hook-form';
import { Button, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import DashboardSlider from '../DashboardSlider/DashboardSlider';
import DashboardStatus from '../DashbordPageStatus/DashboardStatus';

import Axios from 'axios';

export default function AddServices() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Axios.post('http://localhost:5000/carcollection', data).then((res) => {
      if (res.data.insertedId) {
        alert('added successfully');
        reset();
      }
    });
  };
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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register('name')} placeholder="enter name" />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register('description')} placeholder="description" />
                <input
                  type="number"
                  {...register('price')}
                  placeholder="price"
                />
                <input {...register('img')} placeholder="img-url" />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
}
