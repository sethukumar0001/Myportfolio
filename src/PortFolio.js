import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import BgImage from './_assets/bg3.jpg';
import Novisync from './_assets/Novisync.png';
import Bigapp from './_assets/bigapp.png';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Degree1 from './_assets/degree1.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactJs from './_assets/react.png';
import Redux from './_assets/redux.png';
import Mobx from './_assets/mobx.png';
import Html from './_assets/html.png';




const MainDiv = styled.main`
@media (max-width: 768px) {
    width:100%;
    margin:15px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }

`;


//card 1

const MainCard = styled(Card)`

@media (max-width: 768px) {
    width:90%;
    margin:0px;
    // margin-right:50px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }

`;

const ContentDiv = styled.div`
margin-top:120px;

@media (max-width: 768px) {
    width:100%;
    margin:0px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }
`;

const CardContentDiv = styled(CardContent)`
    background-color:#F8F9F9;
    // background-image: url(${BgImage});
    height:300px;
    @media (max-width: 768px) {
        width:100%;
        margin:0px;
        height:300px;
      }
      @media (max-width: 458px) {
       
      }
      @media (width: 375px) {
    
      }
      @media (width: 425px) {
       
      }   
`;


const TextDiv = styled.h1`
font-family:Impact, fantasy;
color:#212F3D;
`;
const TextDiv1 = styled.h3`
font-family:Courier New, monospace; 
color:#212F3D;
`;
const Break = styled.div`
margin-bottom:20px;

`;
const TextDiv3 = styled.h5`
font-weight:500px;
font-size:30px;
font-family:Impact, fantasy;
color:#212F3D;
margin-left:250px;
`;
const TextDiv4 = styled.h5`
font-weight:500px;
font-size:30px;
font-family:Impact, fantasy;
color:#212F3D;
// margin-left:250px;
`;
const TextDiv5 = styled.h5`
float:right;
font-weight:500px;
font-size:30px;
font-family:Impact, fantasy;
color:#212F3D;
margin-right:200px;
`;

//tech logos

const TechLogos = styled.div`
background:white !important;
float:right;
margin-left:600px;
width:500px !important;
`;
const TechCarousel = styled(Carousel)`
margin-top:100px;
background:white !important;
`;
const TechImages = styled.img`
width:200px!important;
background:white !important;
`;
const TechImagesReact = styled.img`
width:320px!important;
background:white !important;
`;

//text

const TitleDiv1 = styled.div`
// float
margin-left:30px;
`;

const TitleDiv2 = styled.div`
// float
margin-left:30px;
`;

const HeaderTag1 = styled.h3`
font-family:Impact, fantasy;
margin-left:10px;
`;

const SideHeaderTage = styled.p`

font-family:Palatino, serif;
font-size:18px;
// margin-right:80px;
margin-left:33px;
`;

const Logo1 = styled.img`
width : 280px;
// float:right;
margin-right:30px;
`;

const Logo2 = styled.img`
width : 180px;
// float:right;
margin-right:100px;
`;

const BorderDiv = styled.div`
padding:5px;
width:600px;
margin-left:40px;
border-style: solid;
  border-width: 1px;
  border-radius:13px;
  border-color:#85929E;
`;

const ThumbUpAltIconTag = styled(ThumbUpAltIcon)`
float:left;
// margin-top:12px;
// margin-right:10px;
`;

const TypographyDiv = styled(Typography)`
`;
//education

const EducationDiv = styled.div`
margin-top:100px
`;

const DegreeDiv = styled.div`
background:white !important;
font-family:Florence;
font-size:18px;
border-style: solid;
  border-width: 1px;
  border-radius:13px;
  margin-left:400px;
  margin-right:400px;
  border-color:gray;
`;

const ImageDiv = styled.img`
width: 128px !important;
height: 116px;
position: absolute;
margin-left: -383px;
margin-top: 32px;
`
const ImageDiv2 = styled.img`
width: 128px !important;
height: 116px;
position: absolute;
margin-left: -383px;
margin-top: 32px;
`
const ImageDiv3 = styled.img`
width: 128px !important;
height: 116px;
position: absolute;
margin-left: -383px;
margin-top: 32px;
`
const MainCarousel = styled(Carousel)`
background:white !important;
`;
const StyledCarousel = styled.div`
background:white !important;
`;
const YearTag = styled.span`
font-family:cursive;
margin-bottom:10px;
float:right;
margin-top:13px;
margin-right:750px;
`




function PortFolio(props) {

  return (

    <MainDiv>
      <MainCard >
        <CardContentDiv>
          <ContentDiv> </ContentDiv>
          <center>
            <TextDiv>
              Hi I'm Sethu Kumar
                 </TextDiv>
            <TextDiv1>
              React Developer(React,Redux,Mobx,Html,Css,Javascript)
                 </TextDiv1>
          </center>
        </CardContentDiv>
      </MainCard>
      <Break />

      <TypographyDiv>
        <TextDiv5>
          Technologies
          </TextDiv5>
      </TypographyDiv>

      <TechLogos>
        <TechCarousel
          interval={2000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          infiniteLoop
          autoPlay
        >
          <TechImagesReact src={ReactJs} />
          <TechImages src={Redux} />
          <TechImages src={Mobx} />
          <TechImages src={Html} />
        </TechCarousel>
      </TechLogos>

      {/* <center> */}
      <TypographyDiv>
        <TextDiv3>
          Work Experience
        </TextDiv3>
      </TypographyDiv>
      {/* </center> */}
      {/* <Break /> */}

      <TitleDiv1>
        <Logo1 src={Bigapp} />
        {/* <YearTag>(2020 Feb - Now)</YearTag> */}
        <HeaderTag1>
          Project :
            </HeaderTag1>

        <BorderDiv>
          <TypographyDiv>
            <ThumbUpAltIconTag />
            <SideHeaderTage>
              Curio Travel and Expense.
            </SideHeaderTage>
          </TypographyDiv>
        </BorderDiv>
        <Break />
      </TitleDiv1>

      <TitleDiv2>
        <Logo2 src={Novisync} />
        {/* <YearTag>(2018 Nov - 2020 Jan)</YearTag> */}
        <HeaderTag1>
          Projects :
            </HeaderTag1>

        <BorderDiv>
          <TypographyDiv>
            <ThumbUpAltIconTag />
            <SideHeaderTage>
              NExam-Online Test Project.
            </SideHeaderTage>
          </TypographyDiv>
          <Break />

          <TypographyDiv>
            <ThumbUpAltIconTag />
            <SideHeaderTage>
              Novisync & Cadrac Labs Websites.
            </SideHeaderTage>
          </TypographyDiv>
          <Break />

          <TypographyDiv>
            <ThumbUpAltIconTag />
            <SideHeaderTage>
              Jobbuzz.
            </SideHeaderTage>
          </TypographyDiv>
        </BorderDiv>
      </TitleDiv2>
      <Break />





      <EducationDiv>
        <center>
          <TypographyDiv>
            <TextDiv4>
              Education & Qualification
            </TextDiv4>
          </TypographyDiv>
        </center>
        <Break />
      </EducationDiv>


      <MainCarousel
        interval={3000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        infiniteLoop
        autoPlay
      >
        <StyledCarousel>
          <ImageDiv src={Degree1} />
          <DegreeDiv>
            <center>
              <b><p> Bachelor of technology (B. Tech) (2018)</p></b>
              <p> JNTU Ananthapur</p>
              <p> Mechanical Engineering</p>
              <p> Aggregate: 75%</p>
            </center>
          </DegreeDiv>
        </StyledCarousel>
        <StyledCarousel>
          <ImageDiv2 src={Degree1} />
          <DegreeDiv>
            <center>
              <b><p>Intermediate (2014)</p></b>
              <p>Board of intermediate</p>
              <p> M.P.C</p>
              <p>Aggregate: 85%</p>
            </center>
          </DegreeDiv>
        </StyledCarousel>
        <StyledCarousel>
          <ImageDiv3 src={Degree1} />
          <DegreeDiv>
            <center>
              <b><p>S.S.C (2012)</p></b>
              <p>Board of Secondary</p>
              <p>XI </p>
              <p>Aggregate: 9.2 CGPA</p>
            </center>
          </DegreeDiv>
        </StyledCarousel>
      </MainCarousel>
      <Break />
    </MainDiv>
  );
}

export default PortFolio;