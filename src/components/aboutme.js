import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import AboutImg from "./Images/AboutImg.jpg";

class About extends Component {
  render() {
    return(
      <Grid style={{height: '100%'}}>
      <Cell className="resume-right-col" col={6} style= {{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 style={{marginTop: '4em'}}>Meet Loae</h2>
      <h4 style={{marginTop: '0px', color: '#e22947'}}>Humanitarian worker & Junior developer</h4>
      <hr style={{borderTop: '3px solid #e22947', marginBottom: '35px', width: '70%'}}/>
      <p style= {{fontSize: '20px'}}>Loae lives in Gaziantep, Turkey. He began his professional career working in humanitarian sector in International and local Non-Governmental Organizations. </p>
      <p style= {{fontSize: '20px'}}>After earning Loae’s Bachelor in Business Administration from Turkey, he entered the humanitarian world to explore his passion for helping people and making an impact in people's lives. </p>
      <p style= {{fontSize: '20px'}}>Loae’s 7 years working in the humanitarian sector was a great experience for him to find out that he loves continuing learning and that he has the needed skills to be a good contributor to the community.  Simply, Loae loves to learn and loves to share what he has learned.</p>
      </Cell>
      <Cell col={6}>
      <img src={AboutImg} alt="Loae Monla Ahmed vector" style= {{width: '100%', marginTop: '50px'}} />
      </Cell>
      </Grid>
    )
  }
}

export default About;
