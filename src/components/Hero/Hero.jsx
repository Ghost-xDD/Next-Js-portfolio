import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There <br /> Welcome to my Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Ademola Adebowale, an enthusiastic Front-End Developer who creates modern websites, landing pages and single-page web appications.
      </SectionText>
      <Button onClick={() => (window.location = '#about')}>
        Get to Know Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
