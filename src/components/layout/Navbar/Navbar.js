import React, { Component } from 'react';
import './Navbar.scss';
import Link from '@material-ui/core/Link';

import Logo from '../../../assets/images/logo.svg';

class LeftMenu extends Component { 
  state = { isActive: true };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const isActive = this.state.isActive;
    return (
      <React.Fragment>
        <header className="header-main" data-aos="fade-down">
          <div className="container">
            <nav className="header-nav">
              <div className={isActive ? "header-logo" : "header-logo show"}>
                <Link>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <Link className={isActive ? "hamburger" : "hamburger show"} onClick={this.handleToggle}>
                <span className="hline"></span>
                <span className="hline"></span>
                <span className="hline"></span>
              </Link>
              <div className={isActive ? "header-menu dn-mob" : "header-menu"}>
                <Link className="menu-item" target="_blank" href="https://twitter.com/hnsoss">
                  HandyOSS Twitter
                </Link>
                <Link  className="demo-item" target="_blank" href="https://github.com/HandyOSS/HandyHost">
                  STAR US ON GITHUB
                </Link>
              </div>
            </nav>
          </div>
        </header>
      </React.Fragment>
    )
  }
}


export default LeftMenu
