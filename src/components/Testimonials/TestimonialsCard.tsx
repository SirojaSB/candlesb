import styled from "styled-components";
import React from "react";

const StyledTestimonialsCard = styled.li<{photo: string}>`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 28px 29px;

  .customer-photo {
    width: 84px;
    height: 84px;
    background-color: #F7F8FA;
    background-image: url(${({photo}) => photo || ''});
    background-size: cover;
    border-radius: 50%;
    margin-bottom: 14px;
  }
  
  .customer-rating {
    width: 146px;
    height: 24px;
    margin-bottom: 22px;
  }
  
  .customer-review {
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 6px;
  }
  
  .customer-name {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #7C8087;
  }
`

const TestimonialsCard: React.FC<{children: React.ReactNode, photo: string}> = ({children, photo}) => {
    return <StyledTestimonialsCard photo={photo}>
        {children}
    </StyledTestimonialsCard>
}

export default TestimonialsCard
