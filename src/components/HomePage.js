import React, { PureComponent } from 'react';
import Menu from '../containers/MenuContainer';
import Banner from './Banner';
import TypicalTutors from './TypicalTutors';

import './App.css';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="bg-light container">
        <Menu page="home" />
        <Banner />
        <TypicalTutors />
      </div>
    );
  }
}

export default HomePage;
