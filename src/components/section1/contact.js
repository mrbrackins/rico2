import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendContactInfo } from '../../actions';

class Contact extends Component {
  renderList() {
   
      return (
        <div className="item" key={'yo'}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.sendContactInfo('yo')}
            >
              Select
            </button>
          </div>
          <div className="content">{'yo title'}</div>
        </div>
      );
   
  }

  render() {
    return <div className='container'>
       
        <div className='contact_header'>
        </div>
        <div className='contact_content'>
            <h1>Some Content?</h1>
        </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { sendContactInfo }
)(Contact);
