import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class About extends Component {
  render() {
    return (

      <div className="about-container">
      <Grid>
        <Cell col={12}>
          <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <CardTitle style={{color: 'Black', height: '176px', background: 'url(http://redpithemes.com/Documentation/assets/img/page_bg/page_bg_01.jpg) center / cover'}}>About Me</CardTitle>

              <CardText>
              Hello, my name is Connor Scoma. <br /> <br />
              I am a Full Stack Web Developer and an entrepreneur. <br /> <br />
              Studied Web Development at the University of Wisconsin Colleges. <br /> <br />
              Feel free to take a look at my latest projects on my portfolio page.<br /> <br />
              The best form of contacting me is on the contact page.<br /> <br />
                </CardText>


          </Card>


        </Cell>
      </Grid>
  </div>
    )

  }
}

export default About;
