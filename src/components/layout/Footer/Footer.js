import React, { Component } from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Flogo from '../../../assets/images/logo.svg';
import youtube from '../../../assets/images/svg/youtube.svg';

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
                    <Typography variant="h5">HandyOSS Reference Software</Typography>
                    <List component="nav">
                      <ListItem>
                        <Link href="https://github.com/HandyOSS/HandyHost" target="_blank"><use xlinkHref="#pinterest">HandyHost</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://github.com/HandyOSS/HandyBrowser" target="_blank"><use xlinkHref="#pinterest">HandyBrowser</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://github.com/HandyOSS/HandyMiner-Goldshell-GUI" target="_blank"><use xlinkHref="#pinterest">HandyMiner GUI</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://github.com/HandyOSS/HandyStratum" target="_blank"><use xlinkHref="#pinterest">HandyStratum</use></Link>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className="footer-list">
                    <Typography variant="h5">Dweb Resources</Typography>
                    <List component="nav">
                      <ListItem>
                      <Link href="https://learnhns.com/" target="_blank"><use xlinkHref="#pinterest">LearnHNS</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://www.theshake.xyz/" target="_blank"><use xlinkHref="#pinterest">The Shake</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://learn.namebase.io/" target="_blank"><use xlinkHref="#pinterest">Namebase Learn</use></Link>
                      </ListItem>
                      <ListItem>
                      <Link href="https://handshake.org/" target="_blank"><use xlinkHref="#pinterest">Handshake.org</use></Link>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <div className="ftr-social">
                    <Typography variant="h5">Follow us</Typography>
                    <List component="nav">
                      <ListItem>
                        <Link href="https://www.youtube.com/channel/UCo9mpJA4MHAf_iZYHDieADQ" target="_blank">
                          <img className="icon" style={{width:"30px"}} src={youtube} />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="https://twitter.com/hnsoss" target="_blank">
                          <svg className="icon" viewBox="0 0 95.308 72.592">
                            <use xlinkHref="#twitter"></use>
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
                  ?? 2021 HandyOSS. All rights reserved.
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
