import React, { Component } from 'react';
import "./home.scss";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';

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
                                <span>The Future</span> of <span>DWeb Mining</span><br /> and <span>Staking</span> is Here
                            </Typography>
                            <div className="ts-action">
                                <Link data-aos="fade-right" className="learnmore">
                                    LEARN MORE
                                </Link>
                                <Link data-aos="fade-left" className="reqdemo">
                                    REQUEST A DEMO
                                </Link>
                            </div>
                            <div className="ts-brands" data-aos="zoom-in">
                                <List component="nav">
                                    <ListItem>
                                        <Link >
                                            <img alt="handy host" src={Brand1} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link >
                                            <img alt="handy host" src={Brand2} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link >
                                            <img alt="handy host" src={Brand3} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link >
                                            <img alt="handy host" src={Brand4} />
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
                                            Video Section
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
                                        </Typography>
                                        <div className="ts-action">
                                            <Link data-aos="fade-right" className="learnmore">
                                                LEARN MORE
                                            </Link>
                                            <Link data-aos="fade-left" className="reqdemo">
                                                REQUEST A DEMO
                                            </Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div className="vs-video" data-aos="fade-left">
                                        <iframe width="100%" height="370" src="https://www.youtube.com/embed/tInKEMxv_-M?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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
                            <Typography variant="h3">Our vision</Typography>
                            <Typography variant="body1">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </Typography>
                        </div>
                        <div className="vs-services">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box" data-aos="fade-right">
                                        <img alt="handy host" src={vision1} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">LESS IS MORE</Typography>
                                            <Typography variant="body1">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                            </Typography>
                                            <Link >Read More</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box border-box" data-aos="fade-up">
                                        <img alt="handy host" src={vision2} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">High Efficiency</Typography>
                                            <Typography variant="body1">
                                                The explanation for these different isotopes awaited the discovery of the neutron, an uncharged particle with a mass
                                            </Typography>
                                            <Link >Read More</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className="vs-box" data-aos="fade-left">
                                        <img alt="handy host" src={vision3} />
                                        <div className="vs-box-content">
                                            <Typography variant="h5">Best in market</Typography>
                                            <Typography variant="body1">
                                                The explanation for these different isotopes awaited the discovery of the neutron, an uncharged particle with a mass
                                            </Typography>
                                            <Link >Read More</Link>
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
                            <Typography variant="h4">what you will get</Typography>
                            <Typography variant="body1">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
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
                                    <Typography variant="h5">Instant Connect</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-down">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 110 110">
                                            <use xlinkHref="#less-more"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Less is More</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-left">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 103 103">
                                            <use xlinkHref="#high-efficiency"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">High Efficiency</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-right">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 132.5 132.5">
                                            <use xlinkHref="#refresh"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Open Protocol</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-up">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 132.5 132.5">
                                            <use xlinkHref="#moon"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Less is More</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="sbox-grid" data-aos="fade-left">
                                <div className="sbox-view">
                                    <div className="s-icon">
                                        <svg className="icon" viewBox="0 0 81 81">
                                            <use xlinkHref="#detailed-statistics"></use>
                                        </svg>
                                    </div>
                                    <Typography variant="h5">Detailed Statistics</Typography>
                                    <Typography variant="body1">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    </Typography>
                                    <Link >
                                        Read More
                                    </Link>
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
                                <Typography variant="h4">Download the HandyHost on your device today</Typography>
                                <div className="download-option">
                                    <Typography varian="h6">Download a HandyHost For Computer</Typography>
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
                                            <Link >
                                                <span>
                                                    <svg className="icon" viewBox="0 0 512 512">
                                                        <use xlinkHref="#linux"></use>
                                                    </svg>
                                                </span>
                                                <span>Linux</span>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link >
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
                        <Typography variant="h4">Partner Networks </Typography>
                        <List component="nav">
                            <ListItem>
                                <img alt="handyhost" src={client1} />
                            </ListItem>
                            <ListItem>
                                <img alt="handyhost" src={client2} />
                            </ListItem>
                            <ListItem>
                                <img alt="handyhost" src={client3} />
                            </ListItem>
                            <ListItem>
                                <img alt="handyhost" src={client4} />
                            </ListItem>
                            <ListItem>
                                <img alt="handyhost" src={client5} />
                            </ListItem>
                        </List>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default HomeView

