import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  /*==========================================React Projects==========================================*/
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid className="reactProjectGrid">
          <Cell col={4}>
            <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://mobinteg.com/wp-content/uploads/2015/03/news_img-1.png) center / cover"
                }}
              >
                React Portfolio
              </CardTitle>

              <CardText>
                This is My React Portfolio
              </CardText>

              <CardActions border>
                <a href="#" target="_blank">
                  <Button colored>Click To Visit</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          {/* React Project 2 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://mobinteg.com/wp-content/uploads/2015/03/news_img-1.png) center / cover"
                }}
              >
                React YouTube API Search
              </CardTitle>

              <CardText>
                React YouTube Search is an application that hits the YT API and callsback your search
              </CardText>

              <CardActions border>
                <a href="https://github.com/ConnorScoma1/YouTube-Search-App" target="_blank">
                  <Button colored>Click To Visit</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          {/* React Project 3 */}
          <Cell col={4}>
            <Card shadow={5} style={{ minwidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://mobinteg.com/wp-content/uploads/2015/03/news_img-1.png) center / cover"
                }}
              >
                React Book Search
              </CardTitle>

              <CardText>
                React Book Search is a Simple Application using React/Redux
              </CardText>

              <CardActions border>
                <a href="https://github.com/ConnorScoma1/Book-selector" target="_blank">
                  <Button colored>Click To Visit</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          </Grid>
        </div>
        
      );
    } else if (this.state.activeTab === 1) {
      /*==========================================HTML/CSS Projects==========================================*/
      return (
        <div className="projects-grid">
          <Grid className="firstGrid">
            {/* First HTML/CSS Project */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2885468.jpg) center / cover"
                  }}
                >
                  First Portfolio Bootcamp
                </CardTitle>

                <CardText>
                  This Site was made for guest to RSVP to the Chris Scoma and
                  Tanya Anderson Wedding.
                </CardText>

                <CardActions border>
                  <a href="https://connorscoma1.github.io/" target="_blank">
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Second HTML/CSS Project */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2885468.jpg) center / cover"
                  }}
                >
                  Tunafy
                </CardTitle>

                <CardText>
                  Search Engine for Music Pull Data From Multiple API's
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/rcliffd/projectweek1"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Thrid HTML/CSS Project */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2885468.jpg) center / cover"
                  }}
                >
                  First Web Dev Portfolio Out of College
                </CardTitle>

                <CardText>
                  This is a Basic HTML/CSS portfolio website with some JQuery.
                </CardText>

                <CardActions border>
                  <a
                    href="https://connorscoma1.github.io/port1/"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/*Fourth HTML/CSS Project  */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2885468.jpg) center / cover"
                  }}
                >
                  HTML/CSS Portfolio with some JavaScript
                </CardTitle>

                <CardText>
                  Single page application to improve load performace.
                </CardText>

                <CardActions border>
                  <a href="https://connorscoma1.github.io/portfolio/" target="_blank">
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          {/* End Of First Row */}
        </div>
      );
    } else if (this.state.activeTab === 2) {
      /*==========================================JavaScript Projects==========================================*/
      return (
        <div className="projects-grid">
          <Grid className="javaScriptProjects">
            {/* Project 1 */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover"
                  }}
                >
                  API/AJAX Giphy
                </CardTitle>

                <CardText>This application Prepends a Bunch of Gifs</CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/Giphy-Viewer"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Project 2 */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover"
                  }}
                >
                  Gem Collector
                </CardTitle>

                <CardText>
                  Collect All the Gems
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/unit-4-game"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Project 3 */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover"
                  }}
                >
                  Trivia Game jQuery
                </CardTitle>

                <CardText>
                  This Site was built with mostly JS and Jquery it is a fun
                  Trivia Game
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/TriviaGame"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Project 4 */}
            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover"
                  }}
                >
                  Prime Number Calculator JS App
                </CardTitle>

                <CardText>This Application Calculates Prime Numbers.</CardText>

                <CardActions border>
                  <a
                    href="https://code.sololearn.com/W49AfOy8RprQ/#js"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            {/* Project 5 */}

            <Cell col={3}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2465927.jpg) center / cover"
                  }}
                >
                  JS Portfolio Website
                </CardTitle>

                <CardText>
                  This is one of my JavaScript Portfolio Websites it is not
                  completely finshed.
                </CardText>

                <CardActions border>
                  <a
                    href="https://connorscoma1.github.io/jsport/#"
                    target="_blank"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      /*==========================================C++ Projects==========================================*/
      return (
        <div className="c-content">
        <Grid className="cPlusPlusProjects">

        {/* C++ Project 1 */}
          <Cell col={12}>
          <Card shadow={5} style={{ width: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images7.alphacoders.com/486/486291.jpg) center / cover"
              }}
            >
              Console Puzzle Game
            </CardTitle>

            <CardText>
              This is the first C++ Game Ive Build from the Ground-up using C++,
              and the windows command console.
            </CardText>

            <CardActions border>
              <a
                href="https://github.com/ConnorScoma1/StratagyWordPuzzel-CPP-Console-game"
                target="_blank"
              >
                <Button colored>Click To Visit</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
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
    );
  }
}

export default Projects;
