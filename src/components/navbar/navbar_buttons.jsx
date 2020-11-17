import React, { Component } from 'react';

class NavbarButtons extends Component {
  handleClick = () => {
    this.props.onClick(this.props.campi);
  }

  render() {
    const {name, isClicked, isShow, parts} = this.props.campi;
    return (
      <>
        <button 
          className={"dropdown-btn " + (isClicked ? 'active' : '')}
          onClick = {this.handleClick}
        >
          · {name}
        </button>
        <div className="dropdown-container" style={{ display : (isShow ? 'block' : 'none') }}>
          {/* <a href="#">· {parts}</a> */}
          {parts.map((parts, i) => (
            <a href= {"/contents"} >· {parts}</a>
          ))}
        </div>
      </>
    );
  }
}

export default NavbarButtons;