import React, { Component } from "react";
import { connect } from "react-redux";
import { sendContactInfo } from "../../actions";
import Review from "./review";

class Contact extends Component {
  renderList() {
    return (
      <div className="item" key={"yo"}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.sendContactInfo("yo")}
          >
            Select
          </button>
        </div>
        <div className="content">{"yo title"}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="contact_header"></div>
        <div className="contact_content">
          <div className="contact_content_container">
            <div className="contact_content_title">
              <h1>Dictumst dui egestas.</h1>
            </div>

            <div className="contact_flex_container">
              <div className="right-margin">
                <label for="fname">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value=""
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label for="lname">Last name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value=""
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="contact_flex_container">
              <div className="right-margin">
                <label for="lname">Email Address:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value=""
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label for="lname">Phone:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value=""
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="contact_flex_container__full">
              <label for="lname">Country:</label>
              <input type="text" id="lname" name="lname" value="" />
            </div>
            <div className="contact_flex_container__full">
              <div className="contact_button_container">
                <div className="contact_button">Et nibh lacus elit.</div>
              </div>
            </div>
            <div className="contact_better_business">
              <img src="/better_business.png" />
            </div>
            <Review />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { sendContactInfo })(Contact);
