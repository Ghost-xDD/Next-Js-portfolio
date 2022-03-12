import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem></LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ademolajohn844@gmail.com">
            Ademolajohn844@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This website was built with React Js and NextJs</Slogan>
        </CompanyContainer>

        <SocialIcons href="//https://github.com/Ghost-xDD">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="//https://ng.linkedin.com/in/ademola-adebowale-3a2824147">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="//https://twitter.com/Ghost_xD2">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
