import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div id="list-page" className="transition-item">
        <Grid>
          <Cell col={4}>
            <div className="LeftSideAnimation">
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                  alt="avatar"
                  style={{ height: "200px" }}
                />
              </div>

              <h2 style={{ padding: "top" }}>Connor Scoma</h2>
              <h4 style={{ color: "grey" }}>Let's Have Coffee & Code</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <ul>
                  <li>Proficient in HTML, JavaScript and CSS</li>
                  <li>Experience with multiple databases</li>
                  <li>Self-motivation with strong analytical abilities</li>
                  <li>Excellent communication skills</li>
                  <li>calability and performance optimization</li>
                </ul>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <h5>Address</h5>
              <p>Brookfield, WI</p>
              <h5>Phone</h5>
              <p>(414) 837-0007</p>
              <h5>E-Mail</h5>
              <p>connorscoma@gmail.com</p>
              <a
                className="resumeAnchor"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ConnorScoma1"
              >
                <h5>GitHub</h5>
              </a>
              <a
                className="resumeAnchor"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/connor-scoma-92730331/"
              >
                <h5>Linkedin</h5>
              </a>

              <a
                className="resumeAnchor"
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1dtRqXBFU3uL0p7evDnIuxpHIAV8Nqz6l/view"
              >
                <h5>
                  Resume
                </h5>
              </a>

              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </div>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education /*School # one */
              startYear="March 2019"
              endYear="September 2019"
              schoolName="UWM Coding Bootcamp"
              schoolDescription="Create beautiful data-driven, interactive client-side web applications. 
              JavaScript isn’t just for the front end. Create well-designed, 
              comprehensively tested server-side JavaScript applications using Node and Express.
              Built a foundation of computer science knowledge and honed my skills as an engineer,"
            />
          


            <Education /*School # one */
              startYear="September 2016"
              endYear="June 2018"
              schoolName="University of Wisconsin"
              schoolDescription="At the University of Wisconsin Colleges, we were taught the most effective
                 way to write our code to make sure whoever is viewing can see it to its most potential. 
                 We learned the importance of validating our code and why it’s important. From my time 
                 at the college, I’ve also gained a lot of knowledge and information about operating 
                 FTPs and Severs (we learned this with our PHP and MySQL courses). "
            />
            <hr style={{ borderTop: "3px solid #fff", width: "75%" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear="present"
              jobName="Freelance Web Development"
              jobDescription="Responsible for designing, coding 
                      and modifying websites, from layout to function and 
                      according to a client's specifications. Strive to create 
                      visually appealing sites that feature user-friendly design 
                      and clear navigation."
            />

            <Experience /*JOB # Two */
              startYear={2016}
              endYear="present"
              jobName="Freelance Graphic Design"
              jobDescription="Create the visual versions of brands, 
              messages and communications. They help people and businesses 
              get their messages across in ways that are memorable, 
              effective, and aesthetically pleasing."
            />

            <hr style={{ borderTop: "3px solid #fff", width: "50%" }} />

            <h2>Top Skills</h2>

            <Skills skill="HTML/CSS" progress={100} />

            <Skills skill="JavaScript" progress={100} />

            <Skills skill="NodeJS" progress={100} />

            <Skills skill="SQL" progress={90} />

            <Skills skill="Express" progress={80} />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
