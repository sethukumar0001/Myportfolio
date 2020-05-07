/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
// import { Carousel } from 'react-responsive-carousel';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import logo from './_assets/sethu.png';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import ReactLogo from '../../../_assets/Reactlogo.png';
// import ReduxLogo from '../../../_assets/Reduxlogo.png';
// import MobxLogo from '../../../_assets/Mobxlogo.png';
// import HtmlLogo from '../../../_assets/Htmllogo.png';
// import MyImage from '../../../_assets/MyImage.jpg';
import PortFolio from './PortFolio';
import ContactPage from './ContactPage';
import AboutPage from "./AboutPage";
import HireMe from './HireMe';



const StyledHeaderWrapper = styled.div`
  background-color:#212F3D;
  height:60px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  margin:auto
`;

const MenuIconButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display:flex;
    margin-right: 720px;
    margin-top: 12px;
  }
  @media (max-width: 458px) {
    margin-right: 280px;
  }
  @media (width: 375px) {
    margin-right: 320px;
  }
  @media (width: 425px) {
    margin-right: 380px;
  }

`;
const CloseIconButton = styled.div`
  margin-left: 10px;
  margin-top: 8px;
`;

const Nav = styled.nav`
  display: block;
  margin:0px 10px;
  @media (max-width: 768px) {
    display:none;
   }
   @media (max-width: 458px) {
     display:none;
   }
`;

const Ul = styled.ul`
  list-style: none;
  @media (max-width: 768px) {
  }
  @media (max-width: 458px) {
  }
`;

const Li = styled.li`
  display: inline-block;
  padding: 4px 10px;
  @media (max-width: 768px) {
}
@media (max-width: 458px) {
}
`;

const A = styled.a`
  font-family: Impact, fantasy;
  transition: all 0.3s ease 0s;
  font-size:17px;
//   background-color: white;
//   padding 5px;
//   border-radius:10px;
  color:white;
  &:hover {
    color: black;
  }
  text-decoration: none;
  @media (max-width: 768px) {
    color: 	darkslategray;
  }
    @media (max-width: 458px) {
     color: darkslategray;
    }
`;


const DrawerNav = styled.nav`
display:block;
@media (max-width: 768px) {
    margin-right:50px;
}
@media (max-width: 458px) {
}
`;

const DrawerLi = styled.li`
@media (max-width: 768px) {
    padding:10px;
}
@media (max-width: 458px) {
}
`;

const DrawerUl = styled.ul`
list-style: none;
@media (max-width: 768px) {
}
@media (max-width: 458px) {
}
`;

const Logo = styled.img`
width:190px;
height:30px;
margin-right:900px;
margin-top:10px;
@media (max-width: 768px) {
   display:none;
  }
    @media (max-width: 458px) {
     display:none;
    }
    @media (max-width: 1024px) {
        display:none;
       }
`;




export function Home(props) {

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, open: !state.open });
  };

  return (
    <React.Fragment>
      <StyledHeaderWrapper>

        <StyledHeader>
          <MenuIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <Menu />
          </MenuIconButton>
          {/* <Logo src={logo} /> */}

          <Nav>
            <Ul>
              <Li>
                <A href="/">Portfolio</A>
              </Li>
              {/* <Li>
                <A href="/about">About Me</A>
              </Li> */}
              <Li>
                <A href="/contact">Contact Me ?</A>
              </Li>
              {/* <Li>
                <A href="/hireme">Hire Me?</A>
              </Li> */}
            </Ul>
          </Nav>
        </StyledHeader>
      </StyledHeaderWrapper>
      <Drawer open={state.open} onClose={toggleDrawer}>
        <CloseIconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
        >
          <Close />
        </CloseIconButton>
        <DrawerNav>
          <DrawerUl>
            <DrawerLi>
              <A href="/">Portfolio</A>
            </DrawerLi>
            {/* <DrawerLi>
              <A href="/about">About Me</A>
            </DrawerLi> */}
            <DrawerLi>
              <A href="/contact">Contact Me ?</A>
            </DrawerLi>
            {/* <DrawerLi>
              <A href="/hireme">Hire Me?</A>
            </DrawerLi> */}
          </DrawerUl>
        </DrawerNav>
      </Drawer>

      {/* <LPWrapper> */}
      {/* <StyledMain> */}
      {/* <CarouselWrapper>
          <StyledCarousel
            interval={1000}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            // infiniteLoop
            // autoPlay
          >
            <div>
              <CarouselImage src={ReactLogo} alt="1" />
            </div>
            <div>
              <CarouselImage src={ReduxLogo} alt="2" />
            </div>
            <div>
              <CarouselImage src={MobxLogo} alt="3" />
            </div>
            <div>
              <CarouselImage src={HtmlLogo} alt="4" />
            </div>

          </StyledCarousel>
        </CarouselWrapper> */}
      {/* </StyledMain> */}
      {/* </LPWrapper> */}
      <Router>
        <switch>
          <Route exact path="/" component={PortFolio} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/hireme" component={HireMe} />

        </switch>
      </Router>



    </React.Fragment>
  );
}

export default Home;