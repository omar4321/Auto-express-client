import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './component/Home/About/About';
import Banner from './component/Home/Banner/Banner';
import Contact from './component/Home/Contact/Contact';
import Login from './component/Home/Login/Login/Login';
import Reg from './component/Home/Login/Login/Reg';
import PrivateRoute from './component/Home/Login/PrivateRoute/PrivateRoute';
import Services from './component/Services/Services';
import NotFound from './component/Home/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './pages/Home/Home';

import Booking from './component/Booking/Booking';
import DashboardSlider from './component/Dashboard/DashboardSlider/DashboardSlider';
import MakeAdmin from './component/Dashboard/MakeAdmin/MakeAdmin';
import AddServices from './component/Dashboard/AddServices/AddServices';
import Feedback from './component/Dashboard/Feedback/Feedback';
import AllFeedback from './pages/AllFeedback/AllFeedback';
import { createContext, useState } from 'react';
export const MessageContext = createContext();
function App() {
  const [message, setMessage] = useState({
    error: '',
    success: '',
  });
  return (
    <div className="App">
      <AuthProvider>
        <MessageContext.Provider value={{ message, setMessage }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/Banner">
                <Banner></Banner>
              </Route>
              <Route exact path="/About">
                <About></About>
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/allClientFeedback">
                <AllFeedback />
              </Route>
              <PrivateRoute path="/dashboard">
                <DashboardSlider></DashboardSlider>
              </PrivateRoute>
              <PrivateRoute path="/addService">
                <AddServices />
              </PrivateRoute>
              <PrivateRoute path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path="/feedback">
                <Feedback />
              </PrivateRoute>
              <Route exact path="/login">
                {' '}
                <Login></Login>{' '}
              </Route>
              <Route exact path="/reg">
                {' '}
                <Reg> </Reg>
              </Route>
              <PrivateRoute exact path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route exact path="/*">
                <NotFound> </NotFound>
              </Route>
            </Switch>
          </Router>
        </MessageContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
