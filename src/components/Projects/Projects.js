import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding>
    <SectionDivider />
    <SectionTitle main id="project">
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <Hr />
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ),
      )}
    </GridContainer>
  </Section>
);

export default Projects;
