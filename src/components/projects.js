import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

                    /*==========================================React Projects==========================================*/
  toggleCategories() {
    if(this.state.activeTab === 0){
      return(

        <div className="projects-grid">
        <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://mobinteg.com/wp-content/uploads/2015/03/news_img-1.png) center / cover'}}>
            Connor Scoma Portfolio Site
            </CardTitle>

            <CardText>
                Connor Scoma current Front-End Web Developer portfolio site.
                This portfolio is entirely made from Node.js and React.JS . You are currently Viewing this Site.
            </CardText>

            <CardActions border>
            <a href="http://connorscoma.me" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){         /*==========================================HTML/CSS Projects==========================================*/
      return(

      <div className="projects-grid">
        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
            Chris & Tanya Wedding Site
            </CardTitle>

            <CardText>
                This Site was made for guest to RSVP to the Chris Scoma and Tanya Anderson Wedding.
            </CardText>

            <CardActions border>
            <a href="https://connorscoma1.github.io/" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
            Tunafy
            </CardTitle>

            <CardText>
                Search Engine for Music Pull Data From Multiple API's
            </CardText>

            <CardActions border>
            <a href="https://github.com/rcliffd/projectweek1" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
            First Web Dev Portfolio Out of College
            </CardTitle>

            <CardText>
                This is a Basic HTML/CSS portfolio website with some JQuery.
            </CardText>

            <CardActions border>
            <a href="https://connorscoma1.github.io/port1/" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
            HTML/CSS Portfolio with some JavaScript
            </CardTitle>

            <CardText>
                This is My second most current portfolio site, it is a single page application to improve load performace.
                 This app was created in mind of mobilzation.
            </CardText>

            <CardActions border>
            <a href="http://connorscoma.me/" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

      </div>
      )
    } else if(this.state.activeTab === 2) {        /*==========================================JavaScript Projects==========================================*/
      return(
      <div className="projects-grid">

      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover'}}>
              API/AJAX Giphy
          </CardTitle>

          <CardText>
              This application Prepends a Bunch of Gifs
          </CardText>

          <CardActions border>
          <a href="https://github.com/ConnorScoma1/Giphy-Viewer" target="_blank">
            <Button colored>Click To Visit</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover'}}>
              Trivia Game jQuery
          </CardTitle>

          <CardText>
              This Site was built with mostly JS and Jquery it is a fun Trivia Game
          </CardText>

          <CardActions border>
          <a href="https://github.com/ConnorScoma1/TriviaGame" target="_blank">
            <Button colored>Click To Visit</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover'}}>
              Trivia Game jQuery
          </CardTitle>

          <CardText>
              This Site was built with mostly JS and Jquery it is a fun Trivia Game
          </CardText>

          <CardActions border>
          <a href="https://github.com/ConnorScoma1/TriviaGame" target="_blank">
            <Button colored>Click To Visit</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>

    

        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover'}}>
                Prime Number Calculator JS App
            </CardTitle>

            <CardText>
                This Application Calculates Prime Numbers.
            </CardText>

            <CardActions border>
            <a href="https://code.sololearn.com/W49AfOy8RprQ/#js" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>


      <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover'}}>
                JS Portfolio Website
            </CardTitle>

            <CardText>
                This is one of my JavaScript Portfolio Websites it is not completely finshed.
            </CardText>

            <CardActions border>
            <a href="https://connorscoma1.github.io/jsport/#" target="_blank">
              <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>

      </div>
      )
    } else if(this.state.activeTab === 3) {          /*==========================================C++ Projects==========================================*/
      return(
        <div className="c-content">
          <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images7.alphacoders.com/486/486291.jpg) center / cover'}}>
                    Console Puzzle Game
                </CardTitle>

                <CardText>
                    This is the first C++ Game Ive Build from the Ground-up using C++, and the windows command console.
                </CardText>

                <CardActions border>
                <a href="https://github.com/ConnorScoma1/StratagyWordPuzzel-CPP-Console-game" target="_blank">
                  <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
      )
    }

  }



  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>C++ Script</Tab>
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
