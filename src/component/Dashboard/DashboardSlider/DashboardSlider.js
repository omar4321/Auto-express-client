import React, { useEffect, useState } from 'react';
import './DashboardSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import {
  faComment,
  faHdd,
  faPlus,
  faShoppingCart,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Row } from 'react-bootstrap';

const DashboardSlider = () => {
  const { user } = useAuth();
  const [isAdminHere, setIsAdminHere] = useState();
  //   console.clear();
  //   console.log(user?.email);
  useEffect(() => {
    Axios.get(`http://localhost:5000/getAdminInfo?email=` + user?.email).then(
      (res) => {
        const adminData = res.data;
        setIsAdminHere({ adminData });
      }
    );
  }, [user]);
  console.log(isAdminHere);
  return (
    <>
      <div
        style={{ height: '100vh', backgroundColor: '#fff', marginTop: '-16px' }}
        className="slider"
      >
        <div className="col-md-12 pl-5 mt-3 sliderContainer">
          <Row>
            <div className=" col-md-12 mx-4 mt-4 ">
              <Link to="/">
                <h3>
                  <span className="logo-1"> Auto </span>{' '}
                  <span className="logo-2">Xpress</span>{' '}
                </h3>
              </Link>
            </div>
            <div className="col-md-12 sliderMenuContainer my-1">
              <ul className="my-1">
                {isAdminHere?.adminData.length > 0 ? (
                  <>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/allServiceList">
                        <FontAwesomeIcon icon={faHdd} className="mr-3" />
                        All Services
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/addService">
                        <FontAwesomeIcon icon={faPlus} className="mr-3" />
                        Add Services
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                        Make Admin
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/serviceList">
                        <FontAwesomeIcon icon={faHdd} className="mr-3" />
                        Service List
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/order">
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="mr-3"
                        />
                        Order
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/order">
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="mr-3"
                        />
                        Order
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/serviceList">
                        <FontAwesomeIcon icon={faHdd} className="mr-3" />
                        Service List
                      </Link>
                    </li>
                    <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                      <Link to="/feedback">
                        <FontAwesomeIcon icon={faComment} className="mr-3" />
                        Feedback
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </Row>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Return to Home</button>
        </Link>
      </div>
    </>
  );
};

export default DashboardSlider;
