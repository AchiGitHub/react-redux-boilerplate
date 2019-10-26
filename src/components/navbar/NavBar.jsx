import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import './style.scss'


class NavBar extends Component {

  state = {
    isMobile: false,
    showMenu: false,
    userName: ''
  }


  showMobileNav() {
    this.setState({ isMobile: !this.state.isMobile })
  }

  showDropDownMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }


  render() {
    const { isMobile, showMenu } = this.state
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-blue">
          <a id="logo-pro" className="navbar-brand" href="#">
            {/* <img src={require("../../images/logo.png")} style={{ width: 60, height: 49 }} /> */}
          </a>
          {/* <Link className="btn-round" to="/product/channels/all">View All</Link> */}
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            //showMobileNav
            onClick={() => this.showMobileNav()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobile ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/"><i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>

            <ul className="form-inline" style={{ marginBottom: 0 }}>
              <li className={`nav-item dropdown ${showMenu ? "show" : ""}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{ color: '#fff' }} role="button" onClick={this.showDropDownMenu.bind(this)}>
                  <img src={require("../../images/profile.png")} className="profile-img" />
                </a>
                <div className={`dropdown-menu dropdown-menu-right ${showMenu ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <span disabled className="dropdown-item" style={{ fontSize: 12 }}>Validation Code : <span style={{ fontWeight: 'bold' }}>
                    
                  </span></span>
                  <Link className="dropdown-item" style={{ fontSize: 12 }} onClick={() => {
                    localStorage.removeItem("@token")
                    localStorage.clear()
                  }} to="/login">Logout</Link>
                </div>
              </li>

            </ul>

          </div>
        </nav>
      </>
    )
  }
}

export default NavBar
