import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './index.css';
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
        <a className="nav_brand" href="#home">
          {/* <img alt="" src={require("./assets/comma_logo.jpg")} /> */}
          <i className="fa fa-hands"></i>
          AHOD</a>
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

      <div className="jumbotron jumbotron-fluid "id="home">
        <div className="container">
          <h1 className="display-4">AHOD</h1>
          <p className="lead">A web platform that connects students with
            their trusted friends and family to create a strong financial community to address student debt.</p>
        </div>
      </div>

      <div className="container">
        <section id="overview">
              <div>
                <h2 className="titles">WHAT IS IT?</h2>
              </div>
              <div className="content">
                <p>
                AHOD is based on an existing financial system known as <a href="https://www.washingtonpost.com/archive/politics/1995/02/17/traditional-money-pools-buoy-immigrants-hopes/3975295a-fc15-4e91-ae88-5b0571ccdf31/?utm_term=.57d4391afad3"><strong>Ekub</strong></a> in Ethiopia, 
                <a href="https://books.google.com/books?id=rVVSN5HMirYC&pg=PA139&lpg=PA139&dq=bachat+committee&source=bl&ots=GVvn5pIGdO&sig=ACfU3U2dP-amZMdL8KbOvMKKCKEnL0HF9A&hl=en&sa=X&ved=2ahUKEwiv6r-bp_jfAhWGi1QKHTZxAnMQ6AEwD3oECAEQAQ#v=onepage&q=bachat%20committee&f=false"><strong> Bachat </strong></a> 
                 in India and Pakistan, <a href="https://www.washingtonpost.com/archive/local/1991/11/03/for-koreans-keh-is-key-to-success/f729bffa-04f2-4c35-af88-f6914e21f5c9/?utm_term=.b32a30b4bf40"><strong>Keh</strong></a> in Korea and <a href="https://www.cambodiadaily.com/news/when-they-lose-faith-in-banks-some-invest-in-the-tong-tin-24823/"><strong>Tong Tin</strong></a> in Cambodia. 
                This financial system works by creating/joining a group of people who are willing to pay a fixed 
                or adjusted amount of money every week or month in order to collect large sums of money that will 
                be awarded to one randomly selected member of the group. In the meantime, the winner of this month still has to 
                pay his or her share of the fixed amount of money to the group until the current round has ended and a new one begins.
                The money is interest and tax-free money that is collected by the people in that group/community. 
                Thus providing financial support system that eliminates a hassle and inconvenience of a common financial system.</p>
              </div>
            </section>

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


        <section id="contact">
          <h2 className="titles">CONTACT US</h2>
          <div className="content text-left">
            <p>Got a question or suggestion? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p> 
<p>We would like to hear particularly from mentors, testers, and people who are familiar with the traditional financial systems of Ekub, Bachat Committees or Keh and can guide us as we implement a digital version of this financial system. We'd also love to get feedback from developers, designers, and people affiliated with the financial & payment industry.</p>
<p id="use_form">Please use the form below to send us a message.</p>
            <div className="d-flex justify-content-center">
              <Contact />
            </div>
          </div>
        </section>

        <section id="sponsors">
          <h2 className="titles">SPONSORS</h2>
          <div className="content">
            <div className="logo_imgs">
              {/* <img className="uw_logo" alt="uw" src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/98/2014/10/07214216/Signature_Left_Purple_RGB.png" /> */}
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