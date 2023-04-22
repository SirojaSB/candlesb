import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";
import React from "react";

const StyledTestimonialsCont = styled(SectionContainer)`
  padding-bottom: 90px;
  padding-top: 90px;
  background-color: #56B2801A;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 57.6px;
    letter-spacing: -0.9px;
    text-align: center;
    margin-bottom: 15px;
  }

  .testimonials-subtitle {
    font-weight: 700;
    font-size: 18px;
    line-height: 27.6px;
    letter-spacing: 0.1px;
    text-align: center;
    margin-bottom: 27px;
    color: #5E6E89;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    gap: 31px;
    text-decoration: none;
    list-style: none;
  }
`

const StyledTestimonials: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledTestimonialsCont>
        {children}
    </StyledTestimonialsCont>
}

export default StyledTestimonials
