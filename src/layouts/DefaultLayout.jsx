import React from 'react';
import { Link } from 'react-router-dom'

const DefaultLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <nav className="navbar nav_bar fixed-top" >
            {/* <img src={require("./../images/logo.png")} style={{ width: 70, height: 56 }} /> */}
            <ul className="navbar-nav mr-auto">
                <Link className="nav-link" to="/" style={{ color: '#dd9513', fontStyle: 'italic', paddingBottom: 5, marginLeft: 5 }}>BoilerPlate</Link>
            </ul>

          </nav>
          <div className="content_div">
            <ViewComponent />
          </div>
        </>
      )
    }
  }
};

export default DefaultLayout;

