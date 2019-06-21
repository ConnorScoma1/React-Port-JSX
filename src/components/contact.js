import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <div className="leftSideContactPage">
              <h2>Connor Scoma</h2>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
              <p
                className="contact-text"
                style={{ width: "75%", margin: "auto", paddingTop: "1em" }}
              >
                Feel Free to contact me directly via cell or email, email is
                perfered. However if you call and I fall to answer the phone
                please leave your name and a message and I will try to call you
                back ASAP. <br /> <br />
                <hr />
                <br />
                Cell:{" "}
                <a href="tel:414-837-0007" target="_blank" rel="noopener noreferrer">
                  {" "}
                  (414) 837-0007
                </a>
                <br />
                E-Mail: connorscoma@gmail.com
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="rightSideContactPage">
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (414) 837-0007
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    connorscoma@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                    @connorscom3031
                  </ListItemContent>
                </ListItem>
              </List>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
