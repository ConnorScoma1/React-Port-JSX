import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";



class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                {" "}
                React | Redux | AJAX | MongoDB | Firebase | jQuery | Node | JavaScript |
                Bootstrap{" "}
              </p>

              <div className="social-links">
                {/*linkedin */}
                <a
                  href="https://www.linkedin.com/in/connor-scoma-92730331/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*github */}
                <a
                  href="https://github.com/ConnorScoma1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Facebook */}
                <a
                  href="https://www.facebook.com/connor.scoma.5"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;