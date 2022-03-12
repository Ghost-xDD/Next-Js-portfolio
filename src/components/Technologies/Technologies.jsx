import React from 'react';
import {
  DiBootstrap,
  DiCss3,
  DiFirebase,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiSass,
  DiZend,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
      Technologies I'm currently comfortable working with
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Html</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size="3rem" />
        <ListContainer>
          <ListTitle>Sass</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React.js</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiReact size="3rem" /> */}
        <ListContainer>
          <ListTitle>Nextjs</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem" />
        <ListContainer>
          <ListTitle>Bootstrap 5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithub size="3rem" />
        <ListContainer>
          <ListTitle>Github</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Git</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
