import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
  render() {
    return (
      <div id="list-page" className="transition-item">

        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="avatar"
                style={{height: '200px'}}
                />
            </div>

              <h2 style={{padding: 'top'}}>Connor Scoma</h2>
                <h4 style={{color: 'grey'}}>Programer</h4>
                  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <p>
                        Hi, I’m Connor, I’ve been developing code for
                        a very long time; studied Web Devolvement (Computer Science)
                        at the University of Wisconsin Colleges. My portfolio site is
                        filled with previously built websites along with my graphics
                        created in Photoshop.
                    </p>
                  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                      <p>Brookfield, WI</p>
                    <h5>Phone</h5>
                      <p>(414) 837-0007</p>
                    <h5>E-Mail</h5>
                      <p>connorscoma@gmail.com</p>
                  

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />

          </Cell>



          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

              <Education                   /*School # one */
                startYear={2016}
                endYear={2018}
                schoolName="University of Wisconsin Colleges"
                schoolDescription="At the University of Wisconsin Colleges, we were taught the most effective way to write our code to
                make sure whoever is viewing can see it to its most potential. We learned the importance of validating
                our code and why it’s important. From my time at the college I’ve also gains a lot of knowledge and
                information about operating FTPs and Severs (we learned this with our PHP and MySQL courses). "
              />
                <hr style={{borderTop: '3px solid #fff' , width: '75%'}}/>

                <h2>Experience</h2>
                    <Experience
                      startYear={2017}
                      endYear="present"
                      jobName="Freelance Web Development"
                      jobDescription="I would be producing the website usually starting
                      from the mobile site first and occasionally checking the site through the w3c validator to make sure
                      the HTML has a strong foundation before adding styling and JavaScript."
                    />


                    <Experience          /*JOB # Two */
                      startYear={2016}
                      endYear="present"
                      jobName="Freelance Graphic Design"
                      jobDescription="I mostly focused on Logo design and realist photomanipulation. With logo design I spent hours sketching
out logos for clients that would be both unique and represent them. After the sketching process I would
recreate the design in Illustrator so I could have a SVG of the logo. With the SVG I could create 4k and
even 8k realist promotions for my clients. "
                    />

                    <hr style={{borderTop: '3px solid #fff' , width: '50%'}}/>

                    <h2>Skills</h2>

                      <Skills
                        skill="HTML/CSS"
                        progress={100}
                      />

                      <Skills
                        skill="React"
                        progress={90}
                      />

                      <Skills
                        skill="JavaScript"
                        progress={80}
                      />

                      <Skills
                        skill="C#"
                        progress={70}
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
