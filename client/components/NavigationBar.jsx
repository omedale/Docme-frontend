import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ApiCall from './../util/ApiCalls';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    const token = ApiCall.getToken();
    ApiCall.verifyToken(token).then((res) => {
      if (res.data.message === 'Valid Token') {
        this.setState({ isAuthenticated: true });
      }
    })
    .catch(() => {
      this.logOut()
    })
  }

    /**
   * Sign Out user
   * @method signOut
   * @return {void} - sign out user
   */
  logOut() {
    ApiCall.logUserOut();
    this.props.history.push('/login');
    return true;
  }
  /**
   * Renders the routes
   * @returns {void}
   * @memberof App
   */
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li className="dropdowncolor">Profile</li>
          <li className="dropdowncolor" onClick={() => this.logOut()}>Log Out</li>
        </ul>
        <nav>
          <div className="nav-wrapper mainbg">
            <a href="#!" className="brand-logo fontcolor">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/"> Home</Link></li>
              <li><Link to="/document">Create Document</Link></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Account<i className="material-icons right">arrow_drop_down</i></a></li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;