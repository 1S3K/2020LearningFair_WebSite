import React, { Component } from 'react'

class NavbarButtons extends Component {
  handleClick = () => {
    this.props.onClick(this.props.campi);
  }



  render() {
    const {name, isClicked, isShow, parts, classNum} = this.props.campi;
    return (
      <>
        <button 
          className={"dropdown-btn " + (isClicked ? 'active' : '')}
          onClick = {this.handleClick}
        >
          · {name}
        </button>
        <div className="dropdown-container" style={{ display : (isShow ? 'block' : 'none') }}>
          {parts.map((parts, i) => (

            <a href={"/contents/" + classNum[i]}>· {parts}</a>
          ))}
        </div>
      </>
    );
  }
}

export default NavbarButtons;