import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import DocumentPage from './DocumentPage';
import *  as documentActions from '../actions/documentAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <NavigationBar history={this.props.history} />
        </div>
        <DocumentPage />
      </div>
    );
  }
}

export default Home;