import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  height: 100vh;
  width: 100vw;
`

//#region PolygonContainer
const PolygonContainer = styled.svg`
  height: 30%;
  width: 100%;

  polygon {
    fill: #0dea96;
  }
`
//#endregion

const PageSection = ({
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  column = false,
}) => (
  <Section
    justifyContent={justifyContent}
    aliginItems={alignItems}
    column={column}
  >
    <PolygonContainer preserveAspectRatio="none" viewBox="0 0 100 100">
      <polygon points="0,0 100,0 0,100" opacity="1" />
    </PolygonContainer>
    {children}
    <PolygonContainer preserveAspectRatio="none" viewBox="0 0 100 100">
      <polygon points="100,100 0,100 100,0" opacity="1" />
    </PolygonContainer>
  </Section>
)

export default PageSection
