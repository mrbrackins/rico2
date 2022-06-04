import React, { Component } from 'react';
import Nav from "../components/nav"
import Section1 from "../components/section1"
import Section2 from "../components/section2"
import Footer from "../components/footer"

export default class App extends Component {
  render() {
    return (
        <div>
            <Nav />
            <Section1 />
            <Section2 />
            <Footer />
      </div>
    );
  }
}
