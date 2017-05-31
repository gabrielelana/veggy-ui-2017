import React from 'react'

class NavBar extends React.Component {
  render(){
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="#">
            <h2 className="title is-2">Veggy</h2>
          </a>
        </div>
        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="'fa fa-link'" />
            </span>
          </a>  
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar
