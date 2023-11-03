import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroBgAnimation from '../HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import {Bio} from "../../data/constants" ;
export default function Hero() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
            <HeroBgAnimation/>
        </HeroBg>

        <HeroInnerContainer>
           <HeroLeftContainer id="Left">
             <Title>Hello, <br/>My name is {Bio.name}</Title>
             <TextLoop>
                <Span>
                   <Typewriter
                       options ={{
                        strings:Bio.roles,
                        autoStart:true,
                        loop:true,
                       }}
                   />
                </Span>
             </TextLoop>
             <SubTitle>{Bio.description}</SubTitle>
             <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
           </HeroLeftContainer>

           
        </HeroInnerContainer>
      </HeroContainer>

    </div>
  )
}
