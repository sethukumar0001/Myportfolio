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


const MainDiv = styled.main`
@media (max-width: 768px) {
  background-color:#F8F9F9 !important;
    width:100%;
    margin:0px;
    overflow:hidden;

  }
  @media (max-width: 458px) {
    width:100%;
  }
  @media (width: 375px) {
    width:100%;
  }
  @media (width: 425px) {
    width:100%;
  }

`;

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
  color:white;
  @media (max-width: 768px) {
    display:flex;
    max-width:100%;
    margin-top: 19px;
  }
  @media (max-width: 458px) {
    margin-right: 90%;
  }
  @media (width: 375px) {
    // margin-right: 320px;
  }
  @media (width: 425px) {
    // margin-right: 380px;
  }

`;
const CloseIconButton = styled.div`
  margin-left: 10px;
  margin-top: 8px;
  @media (max-width: 768px) {
    max-width:100%;
    margin:1px;
   }
   @media (max-width: 458px) {
   }
  
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
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const Li = styled.li`
  display: inline-block;
  padding: 4px 10px;
  @media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const A = styled.a`
  font-family: Impact, fantasy;
  transition: all 0.3s ease 0s;
  font-size:19px;
  color:white;
  &:hover {
    color: black;
  }
  text-decoration: none;
  @media (max-width: 768px) {
    color: 	darkslategray;
    max-width:100%;
    margin:0px;
  }
    @media (max-width: 458px) {
     color: darkslategray;
    }
`;


const DrawerNav = styled.nav`
display:block;
@media (max-width: 768px) {
  max-width:100%;
  margin:20px;
 }
 @media (max-width: 458px) {
 }
`;

const DrawerLi = styled.li`
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  padding:10px;
 }
 @media (max-width: 458px) {
 }
`;

const DrawerUl = styled.ul`
list-style: none;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
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
      <MainDiv>
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
      <Router>
        <switch>
          <Route exact path="/" component={PortFolio} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/hireme" component={HireMe} />

        </switch>
      </Router>


      </MainDiv>
    </React.Fragment>
  );
}

export default Home;