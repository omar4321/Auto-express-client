import React from 'react';
import Navber from '../../component/Home/Navber/Navber';
import Banner from '../../component/Home/Banner/Banner';
import About from '../../component/Home/About/About';
import Contact from '../../component/Home/Contact/Contact';
import Fotter from '../../component/Home/Footer/Fotter';
import Services from '../../component/Services/Services';
import DashboardSlider from '../../component/Dashboard/DashboardSlider/DashboardSlider';
import MakeAdmin from '../../component/Dashboard/MakeAdmin/MakeAdmin';
import AddServices from '../../component/Dashboard/AddServices/AddServices';
import AllFeedback from '../../component/AllFeedback/AllFeedback';

const Home = () => {
  return (
    <div id="home">
      <Navber />
      <Banner />
      <About />
      <Services />
      <AllFeedback></AllFeedback>
      <Contact />
      <Fotter />
      <MakeAdmin></MakeAdmin>
      <AddServices></AddServices>
    </div>
  );
};

export default Home;
