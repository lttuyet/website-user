import React, { PureComponent } from 'react';
import Menu from '../../containers/MenuContainer';
import Banner from './Banner';
import TypicalTutors from './TypicalTutors';

import '../App.css';
import Footer from '../layout/Footer';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="bg-light container-fluid">
        <Menu page="home" />
        <Banner />
        <TypicalTutors />
        <Footer/>
      </div>
    );
  }
}

export default HomePage;