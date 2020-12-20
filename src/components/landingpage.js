import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import LMAImg from "./Images/LMAImg.jpg";


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={LMAImg}
              alt="Loae Monla Ahmed"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Junior developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/loae-monla-ahmed-a28710a9/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Luey-A" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/Loae.M.Ahmed/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UC7hPh2GOhtiu2UZS0TRmeAQ/featured?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
