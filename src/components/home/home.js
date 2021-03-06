import React, { Component } from 'react';
import "./home.scss";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Particles from 'react-particles-js';
import Brand1 from '../../assets/images/brand1.png';
import Brand2 from '../../assets/images/brand2.png';
import Brand3 from '../../assets/images/brand3.png';
import Brand4 from '../../assets/images/brand4.png';
import visionIcon from '../../assets/images/vision-title.png';
import vision1 from '../../assets/images/vs1.png';
import vision2 from '../../assets/images/vs2.png';
import vision3 from '../../assets/images/vs3.png';
import laptop from '../../assets/images/laptop.png';
import client1 from '../../assets/images/Sentinellogo_icon.svg';
import client2 from '../../assets/images/Sia-Logo.svg';
import client3 from '../../assets/images/Akash_GregOsur.svg';

class HomeView extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="top-section">
                    <div className="particle-bg">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                    </div>
                    <div className="container">
                        <div className="top-section-content text-center" >
                            <Typography variant="h3" gutterBottom data-aos="zoom-in">
                                <span>The Future</span> of <span>DWeb</span><br /> Protocol <span>Management</span> is Here
                            </Typography>
                            <div className="ts-action">
                                <Link data-aos="fade-right" className="learnmore" target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost/releases" }}>
                                    DOWNLOAD NOW
                                </Link>
                                <Link data-aos="fade-left" className="reqdemo" target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost" }}>
                                    VIEW THE REPO 
                                </Link>
                            </div>
                            <div className="ts-brands" data-aos="zoom-in">
                                <List component="nav">
                                    <ListItem>
                                        <Link target="_blank" to={{ pathname: "https://sentinel.co" }}>
                                            <img alt="sentinel" src={Brand1} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link target="_blank" to={{ pathname: "https://akash.network" }}>
                                            <img alt="akash" src={Brand2} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link target="_blank" to={{ pathname: "https://sia.tech" }}>
                                            <img alt="sia" src={Brand3} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link target="_blank" to={{ pathname: "https://handshake.org" }}>
                                            <img alt="handyshake" src={Brand4} />
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-section">
                    <div className="container">
                        <div className="vs-bg">
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={5}>
                                    <div className="vs-content" data-aos="fade-right">
                                        <Typography variant="h4">
                                            HandyHost Demo Video
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            HandyHost is a seamless, browser-first way to manage dweb protocols and assets on the fly from your desktop or mobile web browser from your home network for Siacoin/DVPN/Akash. And it bundles a Handshake resolver, too, allowing for quick access to browsing the metaverse.
                                        </Typography>
                                        <div className="ts-action">
                                            <Link target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost/releases" }} data-aos="fade-right" className="learnmore">
                                                DOWNLOAD NOW
                                            </Link>
                                            <Link target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost" }} data-aos="fade-left" className="reqdemo">
                                                FORK THE REPO
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div className="vs-video" data-aos="fade-left">
                                        <iframe width="100%" height="370" src="https://www.youtube.com/embed/kGEScloV70w?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>
                <section className="vision-section">
                    <div className="container">
                        <div className="vision-title text-center" data-aos="flip-up">
                            <div className="vs-icon">
                                <img alt="handy host" src={visionIcon} />
                            </div>
                            <Typography variant="h3">Handshake as the Root</Typography>
                            <Typography variant="body1">
                        Handshake ($HNS) is the private, decentralized, P2P "root anchor" for Web3/Dweb; serving as a backwards compatible drop-in soft-fork of the existing internet run by ICANN. When combined with other web focused crypto protocols, HNS becomes the heart center for routing of human information and creativity, globally.
                            </Typography>
                        </div>
                        <div className="vs-services">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box" data-aos="fade-right">
                                        <img alt="handy host" src={vision2} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">Packs a Punch</Typography>
                                            <Typography variant="body1">
                                                An all-in-one heavy-hitter combining wallets, light clients, nodes, and rich analytics all in one very powerful management suite.
                                            </Typography>
                                            
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box border-box" data-aos="fade-up">
                                        <img alt="handy host" src={vision3} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">Best in Market</Typography>
                                            <Typography variant="body1">
                                                HandyHost is a first of its kind to merge independent dweb protocols together into one easy to use package. Enterprise level attention to detail, made for you.
                                            </Typography>
                                            
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box" data-aos="fade-left">
                                        <img alt="handy host" src={vision1} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">Easy on the Eyes</Typography>
                                            <Typography variant="body1">
                                                We made it beautiful, so you'll love nerding out with us on the New Internet while making a passive income. You'll have to see it to believe it.
                                            </Typography>
                                            
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>
                <section className="services-section">
                    <div className="container">
                        <div className="services-title text-center" data-aos="flip-up">
                            <Typography variant="h4">Show Me What You Got</Typography>
                            <Typography variant="body1">
                                If you've used anything by HandyOSS, you know we think about the tiny details, and try to take substantial steps to provide users and developers a useful suite of options and flexibility worth using and forking. Cross chain user experiences are hard, but we wanted it to be easy for you to experiment with the bleeding edge like the professionals do.
                            </Typography>
                        </div>
                        <div className="sbox-main">
                            <div className="sbox-grid" data-aos="fade-right">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 119 119">
                                            <use xlinkHref="#insta-connect"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Quick Setup</Typography>
                                    <Typography variant="body1">
                                        Supported at launch on MacOS and Linux, HandyHost is quick to setup, and requires only your browser and basic working IT and home networking knowledge.
                                    </Typography>
                                    
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-down">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 110 110">
                                            <use xlinkHref="#less-more"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Real-time Earnings</Typography>
                                    <Typography variant="body1">
                                        Watch your money grow while you provide computational resources and redundance to the New Internet alongside rich analytics on your deployments.
                                    </Typography>
                                    
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-left">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 103 103">
                                            <use xlinkHref="#high-efficiency"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Energy Efficient</Typography>
                                    <Typography variant="body1">
                                    Access public blockchains with real utility and low-energy footprints and progressively takeover datacenters and cloud computing services.
                                    </Typography>
                                    
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-right">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 132.5 132.5">
                                            <use xlinkHref="#refresh"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Open Protocols</Typography>
                                    <Typography variant="body1">
                                        Handshake, DVPN, Akash, and Siacoin, all decentralized and open protocols enabling a free web for tomorrow. Borderless, global, this time no one gets left behind.
                                    </Typography>
                                    
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-up">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 132.5 132.5">
                                            <use xlinkHref="#moon"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Night-Mode</Typography>
                                    <Typography variant="body1">
                                        Managing your assets can sometimes be a full-time job if you've made it your livelihood. This is for the midnight terminal warriors who care about their corneas.
                                    </Typography>
                                    
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-left">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 81 81">
                                            <use xlinkHref="#detailed-statistics"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Historical Statistics</Typography>
                                    <Typography variant="body1">
                                        Seeing is believing, and getting a top-down view of what you're earning, and who's utilizing your system resources will keep you informed and entertained.
                                    </Typography>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="download-section">
                    <div className="container">
                        <div className="ds-main">
                            <div className="ds-laptop" data-aos="fade-right">
                                <img alt="handy host" src={laptop} />
                            </div>
                            <div className="ds-content" data-aos="fade-left">
                                <Typography variant="h4">Download HandyHost on Mac or Linux</Typography>
                                <div className="download-option">
                                    <Typography varian="h6">Download Installer</Typography>
                                    <List component="nav">
                                        {/* <ListItem>
                                            <Link >
                                                <span>
                                                    <svg className="icon" viewBox="0 0 56.693 56.693">
                                                        <use xlinkHref="#windows"></use>
                                                    </svg>
                                                </span>
                                                <span>Widnows</span>
                                            </Link>
                                        </ListItem> */}
                                        <ListItem>
                                            <Link target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost/releases" }}>
                                                <span>
                                                    <svg className="icon" viewBox="0 0 512 512">
                                                       /* <use xlinkHref="#linux"></use>*/
                                                    </svg>
                                                </span>
                                                <span>Linux</span>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link target="_blank" to={{ pathname: "https://github.com/HandyOSS/HandyHost/releases" }}>
                                                <span>
                                                    <svg className="icon" viewBox="0 0 512 512">
                                                        <use xlinkHref="#apple"></use>
                                                    </svg>
                                                </span>
                                                <span>Mac</span>
                                            </Link>
                                        </ListItem>
                                    </List>
                                </div>
                                {/* <div className="download-option">
                                    <Typography varian="h6">Download a HandyHost For Mobile</Typography>
                                    <List component="nav">
                                        <ListItem>
                                            <Link >
                                                <span>
                                                    <svg className="icon" viewBox="0 0 512 512">
                                                        <use xlinkHref="#android"></use>
                                                    </svg>
                                                </span>
                                                <span>Android</span>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link >
                                                <span>
                                                    <svg className="icon" viewBox="0 0 512 512">
                                                        <use xlinkHref="#apple"></use>
                                                    </svg>
                                                </span>
                                                <span>iOS</span>
                                            </Link>
                                        </ListItem>
                                    </List>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partner-section">
                    <div className="container" data-aos="fade-up">
                        <Typography variant="h4">Handyhost Sponsors </Typography>
                        <List component="nav">
                            <ListItem>
                                <Link target="_blank" to={{ pathname: "https://sentinel.co" }}><img alt="handyhost" src={client1} /></Link>
                            </ListItem>
                            <ListItem>
                                <Link target="_blank" to={{ pathname: "https://sia.tech" }}><img alt="handyhost" src={client2} /></Link>
                            </ListItem>
                            <ListItem>
                                <Link target="_blank" to={{ pathname: "https://akash.network" }}><img alt="handyhost" src={client3} /></Link>
                            </ListItem>
                        </List>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default HomeView

