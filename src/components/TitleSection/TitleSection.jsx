import React from "react"
import styled from "styled-components"
import PageSection from "../PageSection/PageSection"
import Headline from "../Headline/Headline"
import Bounce from "../Animations/Bounce"

//#region ContentContainer
const ContentContainer = styled.div`
  display: flex;
  position: relative;
  height: 40%;
  width: 70%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: -65%;
    height: 24px;
    width: 24px;
    border-bottom: 4px solid white;
    border-right: 4px solid white;
    transform: translateX(-50%) rotate(45deg);
    animation: ${Bounce("-65%", "-67%")} 2s ease-in-out 0s infinite;
  }
`
//#endregion

const TitleSection = () => (
  <PageSection justifyContent="space-between" alignItems="center" column>
    <ContentContainer>
      <Headline centered>Willkommen auf meinem Portfolio</Headline>
    </ContentContainer>
  </PageSection>
)

export default TitleSection
