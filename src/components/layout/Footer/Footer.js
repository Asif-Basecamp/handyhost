import React, { Component } from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Flogo from '../../../assets/images/logo.svg';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-main">
          <div className="container">
            <div className="top-ftr">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                  <div className="footer-list">
                    <Typography variant="h5">Company</Typography>
                    <List component="nav">
                      <ListItem>
                        <Link>Press Releases</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Mission</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Strategy</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Works</Link>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className="footer-list">
                    <Typography variant="h5">Learn More</Typography>
                    <List component="nav">
                      <ListItem>
                        <Link>Support</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Customer Service</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Developers</Link>
                      </ListItem>
                      <ListItem>
                        <Link>Ger Started Guide</Link>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <div className="ftr-social">
                    <Typography variant="h5">Follow us</Typography>
                    <List component="nav">
                      <ListItem>
                        <Link>
                          <svg className="icon" viewBox="0 0 46.999 96.713">
                            <use xlinkHref="#facebook"></use>
                          </svg>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link>
                          <svg className="icon" viewBox="0 0 95.308 72.592">
                            <use xlinkHref="#twitter"></use>
                          </svg>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link>
                          <svg className="icon" viewBox="0 0 88.977 80.023">
                            <use xlinkHref="#linkdin"></use>
                          </svg>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link>
                          <svg className="icon" viewBox="0 0 57.307 73.699">
                            <use xlinkHref="#pinterest"></use>
                          </svg>
                        </Link>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="ftr-p2">
              <div className="ftr-p2-block">
                <div className="f2-logo">
                  <img alt="" src={Flogo} />
                </div>
                <div className="copyright">
                  © 2021 HandyHost. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer
