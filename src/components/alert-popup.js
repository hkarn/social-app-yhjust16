import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class AlertPopup extends Component {

  

  render() {
    const displayMe = (this.props.displayToggle ? 'block' : 'none');
    const alertStyle = {
      display: displayMe,
      zIndex: '10000',
      position: 'fixed',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%)',
      backgroundColor: 'white',
      padding: '50px',
      borderRadius: '10px',
      color: 'red',
      fontSize: '2em',
      fontWeight: 'bold',
      border: 'black 1px solid'
      
    };
    
    return (
      <div className="alertbox" style={alertStyle}>
        {this.props.alertMessage}
      </div>
    );
  }
}

AlertPopup.propTypes = {
  alertMessage: PropTypes.string,
  displayToggle: PropTypes.bool,
};



export default connect(
  null, 
  null)(AlertPopup);
