import React, { Component } from 'react';
import Contact from "./contact"


export default class Section1 extends Component {
  render() {
    return (
      <div className='section1'>
        <div className='section1_left'>
        <h1 class="aboutus_header">Dui augue lectus in ut at lorem</h1>
        <p class="aboutus_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc.
        <span id="aboutus_highlight"> Semper nam ridiculus duis bibendum risus, arcu arcu.</span> 
        </p>
        <p class="aboutus_paragraph">Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus.
        <span id="aboutus_highlight"> Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris. </span> 
        Elit, scelerisque mauris aenean justo.
        </p>
        <h1>Video</h1>
        </div>
        <div className='section1_right'>
         <Contact />
      </div>
        
      </div>
    );
  }
}