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



const Body = styled.body`
background-color:white !important;
`

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
    height:35vh;
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

//work experience

const WorkExperienceMainDiv = styled.div`
float:left;
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
font-size:3.5vh;
font-family:Impact, fantasy;
color:#212F3D;
margin-left:35vh;
`;

const Logo1 = styled.img`
width : 35vh;
`;

const Logo2 = styled.img`
width : 20vh;
`;

const HeaderTag1 = styled.h3`
font-family:Impact, fantasy;
`;

const BorderDiv = styled.div`
width:60vh;
margin-left:40px;
border-style: solid;
  border-width: 1px;
  border-radius:13px;
  border-color:#85929E;
`;

const TypographyDiv = styled(Typography)`
`;

const ThumbUpAltIconTag = styled(ThumbUpAltIcon)`
float:left;
`;

const SideHeaderTage = styled.p`
float:unset;
font-family:Palatino, serif;
font-size:2.1vh;
margin-left:33px;
`;

//tech logo carousel


const MainCarouselDiv = styled.div`
margin-left:40vh;
`;

const TextDiv5 = styled.h5`
font-size:4vh;
font-family:Impact, fantasy;
color:#212F3D;
margin-left:90vh
`;

const TechLogos = styled.div`
background:white !important;
margin-left:70vh;
margin-right:4vh;
width:60vh !important;
`;


//logo and project margin

const TitleDiv1 = styled.div`
margin-left:10vh;
`;

const TitleDiv2 = styled.div`
margin-left:10vh;
`;

//tech Images

const TechCarousel = styled(Carousel)`
margin-top:20vh;
background:white !important;
`;
const TechImages = styled.img`
width:30vh!important;
margin-top:15px;
`;
const TechImagesReact = styled.img`
width:50vh !important;
`;

//education div style

const EductionMainDiv = styled.div`
`;

const EducationDiv = styled.div`
margin-top:20vh;
`;
const TextDiv4 = styled.h5`
font-size:4vh;
font-family:Impact, fantasy;
color:#212F3D;
`;

//education carousel

const MainCarousel = styled(Carousel)`
background:white !important;
`;

const StyledCarousel = styled.div`
background:white !important;
`;
const ImageDiv = styled.img`
width: 14.5vh !important;
height: 12vh;
position: absolute;
left: 43.7vh;
margin-top: 4vh;
`;


const DegreeDiv = styled.div`
background:white !important;
font-family:Florence;
font-size:2.1vh;
border-style: solid;
  border-width: 1px;
  border-radius:13px;
  margin-left:50.69vh;
  margin-right:50.69vh;
  border-color:gray;
`;


//education

const YearTag = styled.span`
font-family:cursive;
// margin-bottom:50px;
// float:right;
// margin-top:13px;
margin-left:10vh;
`
const YearTag1 = styled.span`
font-family:cursive;
// margin-bottom:50px;
// float:right;
// margin-top:13px;
margin-left:20vh;
`


function PortFolio(props) {

  return (
    <Body>
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

        {/* Work Experience */}

        <WorkExperienceMainDiv>
          <TypographyDiv>
            <TextDiv3>
              Work Experience
          </TextDiv3>
          </TypographyDiv>

          <TitleDiv1>
            <Logo1 src={Bigapp} />
            <YearTag>(2020 Feb - Now)</YearTag>
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
            <YearTag1>(2018 Nov - 2020 Jan)</YearTag1>
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
        </WorkExperienceMainDiv>

        {/* Tech Logo carousel */}

        <MainCarouselDiv>
          <TextDiv5>
            Technologies
          </TextDiv5>

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
        </MainCarouselDiv>
        <Break />

        {/* Education Carousel div */}

        <EductionMainDiv>
          <center>
            <EducationDiv>
              <TextDiv4>
                Education & Qualification
            </TextDiv4>
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
              <ImageDiv src={Degree1} />
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
              <ImageDiv src={Degree1} />
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
          </center>
        </EductionMainDiv>
        <Break />
      </MainDiv>
    </Body>
  );
}

export default PortFolio;