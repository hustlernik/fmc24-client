
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Classes from '@/styles/LandingPage.module.css';
import Fade from "react-awesome-reveal"
import Marquee from "react-fast-marquee"
import winner1 from './static/winner.svg';
import briefing from './static/briefing.svg';
import redcarpet from './static/red-carpet.svg';
import banner4 from './static/banner4.svg';
import ScrollTrigger from "react-scroll-trigger"
import Demo from "./demo"
import Header from "./Header"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import { motion, useScroll } from "framer-motion"
// import OAT from "./OAT"
// import Testimonials from "./Testimonials"
import Competitions from "./Competitions"
import Sponsors from "./Sponsors"
import AwardSection from "./AwardSection"
import Guests from "./Guests"
import Router from 'next/router';
const IndexLanding = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [button, setButton] = useState(true);
  const [visits, setVisits] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [register, setRegister] = useState(false);
 
  const modalState = () => {
    setIsShown((current) => !current);
  };
  const modalState2 = () => {
    setIsShown2((current) => !current);
  };
  const { scrollYProgress } = useScroll();

  // const showButton = () => {
  //   if (window.innerWidth > 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(()=>{
  //   if(sessionStorage.getItem('isNewUser')!==null){
  //     if(sessionStorage.getItem('isNewUser')=="true"){
  //       setRegister(true);
  //     }
  //     if(sessionStorage.getItem('isNewUser')=="false"){
  //       setDashboard(true);
  //     }

  //   }
  // },[]);
  const ref_container = useRef();
  const scrollRef = useRef(null)
  // useEffect(() => {
  //   const scrollDiv = document.getElementById('header').offsetTop;
  //   window.scrollTo({ top: scrollDiv - 200, behavior: 'smooth' });
  //   showButton();
  // }, []);
  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.href = '/';
    closeMobileMenu();
  };
  return (
    <>
      <Header />
      {/* {dashboard?<button style={{'zIndex':'100'}} href="/dashboard">Dashboard</button>:<></>}
      {register?<button style={{'zIndex':'100'}} href="/register">Register</button>:<></>} */}
     <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ root: scrollRef }}
      >
      <Hero />
     </motion.div>
     
     
      <AboutUs />
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ root: scrollRef }}
      >
      <AwardSection />
      </motion.div>
      <Guests />
      {/* <Demo/> */}
      {/* <Competitions/> */}
      {/* <OAT /> */}
      {/* <Testimonials/> */}
      <Sponsors />
    

      <Footer />
    </>
  )
}

export default IndexLanding
