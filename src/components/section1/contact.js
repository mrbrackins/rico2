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
        <h1 className="contact_content_title">Dictumst dui egestas.</h1>
        
        <div className='contact_flex_container'>
          <div>
            <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname" value="John" />
          </div>
          <div>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe" />
          </div>
        </div>     
 
 <div className='contact_flex_container'>
          <div>
 <label for="lname">Email Address:</label>
  <input type="text" id="lname" name="lname" value="Doe" />
          </div>
          <div>

   <label for="lname">Phone:</label>
  <input type="text" id="lname" name="lname" value="Doe" />
          </div>
  
        </div>
         <label for="lname">Country:</label>
  <input type="text" id="lname" name="lname" value="Doe" />
        <div className='contact_button'>Hello</div>
        <div className="contact_better_business">
<img src="/better_business.png" />
        </div>
        
      </div>
      </div>
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { sendContactInfo }
)(Contact);
