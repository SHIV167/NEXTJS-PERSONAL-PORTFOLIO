import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="https://docs.google.com/document/d/1kp6vFfW8Y2p09xbOecb2xlrQFncDm_oBFR2oYETZIHQ/edit?usp=sharing">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >SHIV KUMAR JHA</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/SHIV167/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/shiv-kumar-jha-91106955/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/smilekromeresath/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/shivjha8">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
