import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import FortuneFoundProjectImg from "./Images/FortuneFoundProjectImg.png";
import BoardProjectImg from "./Images/BoardProjectImg.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 Fortune Found project*/}
          <Card shadow={5} style={{minHeight: '370px', minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${FortuneFoundProjectImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >Fortune Found project</CardTitle>
            {/* url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' */}
            <CardText>
            The project was designed simply to help people help each other. We all know that people always will have extra staff that they don’t need and the same people will also always have staff that they need so this app helps them to exchange these staff and cover those needs.
            </CardText>
            <CardActions border>
            <Button onClick={() => window.open("https://github.com/Luey-A/capstone-istanbul-from_garbage_to_gift")}
                      colored>GitHub</Button>
              <Button onClick={() => window.open("https://garbage2gift.netlify.app/")}
                      colored>Live Demo</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 Borad project*/}
          <Card shadow={5} style={{minHeight: '370px', minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${BoardProjectImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >Board project</CardTitle>
            <CardText>
            Creating a space for friends, colleagues, random people to share their events and connect through this board. Moreover, it is a tool to help the users manage their events through having a card for each task they need to do and set it to complete when it is finished.
            </CardText>
            <CardActions border>
            <Button onClick={() => window.open("https://github.com/Luey-A/Board-Project")}
                      colored>GitHub</Button>
              <Button onClick={() => window.open("")}
                      colored>Live Demo</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 Movie project*/}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Movie project</CardTitle>
            <CardText>
            A website to show the latest movies that provides information about each movie and help the user to choose the movie they would like and have a nice movie night at home.
            </CardText>
            <CardActions border>
            <Button onClick={() => window.open("https://github.com/Luey-A/recoded-mad-libz")}
                      colored>GitHub</Button>
              <Button onClick={() => window.open("")}
                      colored>Live Demo</Button>
              {/* <Button colored>Live Demo</Button> */}
            {/* </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}

          {/* Project 4 Mad libs project*/}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Mad libs project</CardTitle>
            <CardText>
            Easy and fun game to play through filling empty words in sentences. Write a story and watch it become funny.
            </CardText>
            <CardActions border>
            <Button onClick={() => window.open("https://github.com/Luey-A/recoded-mad-libz")}
                      colored>GitHub</Button>
              <Button onClick={() => window.open("")}
                      colored>Live Demo</Button>
              {/* <Button colored>Live Demo</Button> */}
            {/* </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>


      )
    // } else if(this.state.activeTab === 1) {
    //   return (
    //     <div><h1>This is Angular</h1></div>
    //   )
    // } else if(this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is VueJS</h1></div>
    //   )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
