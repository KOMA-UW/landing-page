import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './index.css';
// import {Card, CardTitle, Row, Col, Navbar, NavItem, CardPanel} from 'react-materialize';
import Contact from "./Contact"


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.danger,
  }
});

function LandingPage(props) {
  const classes = props;
  return (
    <div className={classes.root}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <a className="navbar-brand " href="#page-top">
          {/* <img alt="" src={require("./assets/comma_logo.jpg")} /> */}
          <i className="fas fa-hands"></i>
          AllHandsOnDeck</a>
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link " href="#overview">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">AHOD</h1>
          <p className="lead">A web platform that connects students with
            their trusted friends and family to create a strong financial community to address student debt.</p>
        </div>
      </div>

      <div className="container">
        {/* <section id="overview">
              <div>
                <h2 className="titles">WHAT IS IT?</h2>
              </div>
              <div className="content">
                <p>Content goes here..</p>
              </div>
            </section> */}

        <section id="team">

          <div className="titles">
            <h2>MEET THE TEAM</h2>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <img className="bd-placeholder-img rounded-circle" alt="" src="https://www.gravatar.com/avatar/329c17c44c22a447870f4a44dc058b4d?s=1000" width="100" height="100" focusable="false" role="img" aria-label="Placeholder: 140x140" /><title>Placeholder</title>
              <h5>Kidus Sendeke</h5>
              <p>Senior, Informatics</p>
              <a href="mailto:kiduss@uw.edu">kiduss@uw.edu</a><br />
              <a href="https://www.linkedin.com/in/kidus-sendeke/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="col-lg-3">
              <img className="bd-placeholder-img rounded-circle" alt="" src="https://www.gravatar.com/avatar/50afbe369dcb2cd4ff4dee5c5e2efca1?s=1000" width="100" height="100" role="img" aria-label="Placeholder: 140x140" /><title>Placeholder</title>
              <h5>Omar Azeemi</h5>
              <p>Senior, Informatics</p>
              <a href="mailto:oazeemi@gmail.com">oazeemi@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/omar-azeemi/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="col-lg-3">
              <img className="bd-placeholder-img rounded-circle" alt="" src="https://www.gravatar.com/avatar/e2de7dff621ccfad3a32c5112984583d?s=1000" width="100" height="100" role="img" aria-label="Placeholder: 140x140" /><title>Placeholder</title>
              <h5>Muatasim Qazi</h5>
              <p>Senior, Informatics</p>
              <a href="mailto:mqazi@uw.edu">mqazi@uw.edu</a><br />
              <a href="https://www.linkedin.com/in/muatasimqazi/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="col-lg-3">
              <img className="bd-placeholder-img rounded-circle" alt="" src="https://www.gravatar.com/avatar/5d08ebbe27f488c85e54e869b4894926?s=1000" width="100" height="100" role="img" aria-label="Placeholder: 140x140" /><title>Placeholder</title>
              <h5>Alexis Lim</h5>
              <p>Senior, Informatics</p>
              <a href="mailto:alexisl@uw.edu">alexisl@uw.edu</a><br />
              <a href="https://www.linkedin.com/in/calexlim/"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </section>


        <section className="contact">
          <h2 className="titles">Contact Us</h2>
          <div className="content">
            <p>Got a question or suggestion? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="d-flex justify-content-center">
              <Contact />
            </div>
          </div>
        </section>

        <section>
          <h2 className="titles">SPONSORS</h2>
          <div className="content">
            <div className="logo_imgs">
              <img className="uw_logo" alt="uw" src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/98/2014/10/07214216/Signature_Left_Purple_RGB.png" />
              {/* <img className="uw_logo"  alt="uw" src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/98/2014/10/07214218/Signature_Left_Gold_RGB.png"/>  */}
              <img className="ischool_logo" alt="ischool" src={require('./assets/iSchoolPrimary_RGB_Purple.png')} />
            </div>
          </div>
        </section>

        <footer className="page-footer fixed-bottom font-small">
          <div className="footer-copyright text-center py-3"><p>© 2019 Copyright</p>
            <a href="https://github.com/orgs/KOMA-UW/dashboard"> KOMA Inc.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);