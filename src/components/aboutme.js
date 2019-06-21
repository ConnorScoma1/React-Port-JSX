import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
  render() {
    return (

      <div className="about-container">
      <Grid>
        <Cell col={12}>
          
          <div className="leftSideAboutPage">
          <h2>About Me</h2>
          
          </div>
          </Cell>

          <Cell col={3}>
            <div className="leftSideAboutPage">
            <img 
              src = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/13087288_10208265140899150_7003936357299384521_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-2.xx&oh=ca030da768048c8339f170ae9d1294c6&oe=5D51DB50"
              alt = "avatar-logo-img"
              style = {{height: '300px'}}
            />
          </div>
          </Cell> 

          <Cell col={9}>
            <div className = "rightSideAboutPage" >
            <h3 id="aboutMeTextAnimation">
            Hello, my name is Connor Scoma. <br /> 
            I am a Software/Web Developer looking for challenging problems to solve. <br />
            My background is in Fullstack Web development, <br />
            however, I have an insatiable curiosity for deep learning – specifically <br />
            applications and their potential to change the technology landscape. <br />
            </h3>

            <br />

            <h4 id="aboutMeTextAnimation">
           
             I am passionate about building excellent applications that will improve day to day lives.<br />
             I specialize in creating web apps for clients, all <br />
             of my work is produced locally. What would you do <br />
             if you had a Web expert available at your fingertips?<br />
            
            </h4>

          <br />
            <h3 id="aboutMeTextAnimation">
            Don’t Worry When You Are Not Recognized, <br />but Strive to Be Worthy of Recognition
            </h3>
            </div>
          </Cell>

          
          
          {/* <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
            <CardTitle style={{color: 'Black', height: '176px', background: 'url(http://redpithemes.com/Documentation/assets/img/page_bg/page_bg_01.jpg) center / cover'}}>About Me</CardTitle>

              <CardText>
              Hello, my name is Connor Scoma. <br /> <br />
              I am a Full Stack Web Developer and an entrepreneur. <br /> <br />
              Studied Web Development at the University of Wisconsin Colleges. <br /> <br />
              Feel free to take a look at my latest projects on my portfolio page.<br /> <br />
              The best form of contacting me is on the contact page.<br /> <br />
                </CardText>


          </Card> */}
      </Grid>
  </div>
    )

  }
}

export default About;
