import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import LMAImg from "./Images/LMAImg.jpg";


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={LMAImg}
                alt="Loae Monla Ahmed"
                style={{height: 'auto'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Loae Monla Ahmed</h2>
            <h4 style={{color: 'grey'}}>Junior developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Junior front-end web developer with a passion for learning new things and implementing what I have learned to teach and help people. With experience in React, JavaScript, Object Oriented Programming, CSS, and HTML. I am a positive and supportive member of any team and I bring strong skills in team building and project management from my experience in working in different teams throughout my 6 years of working in humanitarian aid. Whilst having the ability and confidence to work independently and under high pressure. I have strong communication and language skills, with fluency in Arabic, English and Turkish. I am a very organized and structured person, who continuously strives to develop his professional skills, and improve his work performance.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Değirmiçem mah. Özgürlük cad. Şebnem apart No:4/9</p>
            <h5>Phone</h5>
            <p>+90 536 437 4843</p>
            <h5>Email</h5>
            <p>lueymnla@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Kilis 7 Aralık University"
              schoolDescription="4 years Business Administration bachelor"
               />

               <Education
                 startYear={2011}
                 endYear={2012}
                 schoolName="Ankara Gazi Tömer"
                 schoolDescription="Turkish Language"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={"Current"}
              jobName="Program Officer – Food Security and Livelihoods department"
              jobDescription="Ihsan for Relief and Development/ Gaziantep/ Turkey"
              />

              <Experience
                startYear={2017}
                endYear={2017}
                jobName="Program Manager - Mental Health and Psychosocial Support department"
                jobDescription="International Medical Corps/ Gaziantep/ Turkey"
                />

              <Experience
                startYear={2014}
                endYear={2017}
                jobName="Program Officer - Mental Health and Psychosocial Support department"
                jobDescription="International Medical Corps/ Gaziantep/ Turkey"
                />
                
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
              <Skills
                skill="React"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={75}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
