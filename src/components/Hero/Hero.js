import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>I'm a full-stack web developer.</SectionText>
      <Button
        onClick={() =>
          window.location =
            "https://drive.google.com/file/d/1Ca2Orr3KQPtRqbfLyYlWQxP5tjIy79L1/view?usp=sharing"}
      >
        Download My Cv
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
