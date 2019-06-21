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
            <Cell col={6}>
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
                  This is My React Portfolio, You're Currently Looking At My
                  Projects
                </CardText>

                <CardActions border>
                  <a
                    href="http://connorscoma.me"
                    rel="noopener noreferrer"
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

            {/* React Project 2 */}
            <Cell col={6}>
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
                  React YouTube Search is an application that hits the YT API
                  and callsback your search
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/YouTube-Search-App"
                    rel="noopener noreferrer"
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
    } else if (this.state.activeTab === 1) {
      /*==========================================HTML/CSS Projects==========================================*/
      return (
        <div className="projects-grid">
          <Grid className="firstGrid">
            {/* First HTML/CSS Project */}
            <Cell col={6}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpapercave.com/wp/wp2885468.jpg) center / cover"
                  }}
                >
                  Single Page Portfolio
                </CardTitle>

                <CardText>
                  This is a Static One Page Portfolio Site, Pretty Basic Concept
                </CardText>

                <CardActions border>
                  <a
                    href="https://connorscoma1.github.io/SinglePagePortfolio/"
                    rel="noopener noreferrer"
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

            {/* Second HTML/CSS Project */}
            <Cell col={6}>
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
                    rel="noopener noreferrer"
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
          {/* End Of First Row */}
        </div>
      );
    } else if (this.state.activeTab === 2) {
      /*==========================================JavaScript Projects==========================================*/
      return (
        <div className="projects-grid">
          <Grid className="javaScriptProjects">
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
                  The Concpet of This Project Was to Make a Game Using Only JS
                  Logic
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/unit-4-game"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  Liri Bot
                </CardTitle>

                <CardText>
                  This is a Console Bot That Has Similar Charactistics to Siri
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/LIRI-Bot"
                    target="_blank"
                    rel="noopener noreferrer"
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

                <CardText>
                  This Application Calculates Prime Numbers, Only Using
                  JavaScript Logic
                </CardText>

                <CardActions border>
                  <a
                    href="https://code.sololearn.com/W49AfOy8RprQ/#js"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  Node Guessing Game
                </CardTitle>

                <CardText>
                  This is a Node Console Guessing Game, programmed all in
                  JavaScript
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/Node-Word-Guess"
                    target="_blank"
                    rel="noopener noreferrer"
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
            <Cell col={6}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://images7.alphacoders.com/486/486291.jpg) center / cover"
                  }}
                >
                  Bulls // Cows
                </CardTitle>

                <CardText>
                  This is a C++ Console Guessing Game Using C Logic
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/StratagyWordPuzzel-CPP-Console-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button colored>Click To Visit</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            <Cell col={6}>
              <Card shadow={5} style={{ width: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://wallpaperplay.com/walls/full/a/a/b/77626.jpg) center / cover"
                  }}
                >
                  Random Name Generator
                </CardTitle>

                <CardText>
                  This is a Python3 Project Using Random and String to Generate
                  a Random Name
                </CardText>

                <CardActions border>
                  <a
                    href="https://github.com/ConnorScoma1/py-project"
                    target="_blank"
                    rel="noopener noreferrer"
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
          <Tab>Programming</Tab>
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
