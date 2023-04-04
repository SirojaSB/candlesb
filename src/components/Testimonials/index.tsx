import React from "react";
import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";

import customerfirst from '../../assets/images/customer1.png'
import customersecond from '../../assets/images/customer2.png'
import customerthird from '../../assets/images/customer3.png'
import ratingforandhalf from '../../assets/images/Stars45.svg'
import ratingfive from '../../assets/images/Stars5.svg'

const StyledTestimonials = styled(SectionContainer)`
  padding-bottom: 90px;
  padding-top: 90px;
  background-color: #56B2801A;

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

const TestimonialsCard = styled.li<{photo: string}>`
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

const Testimonials: React.FC = () => {
    return (
        <StyledTestimonials>
            <h3>Отзывы</h3>
            <p className='testimonials-subtitle'>Некоторые отзывы наших счастливых клиентов</p>
            <ul>
                <TestimonialsCard photo={customerfirst}>
                    <div className='customer-photo'/>
                    <img className='customer-rating' src={ratingforandhalf} alt="Рейтинг"/>
                    <p className='customer-review'>“То, что надо! Больше никаких освежителей воздуха”</p>
                    <p className='customer-name'>Луиза</p>
                </TestimonialsCard>
                <TestimonialsCard photo={customersecond}>
                    <div className='customer-photo'/>
                    <img className='customer-rating' src={ratingfive} alt="Рейтинг"/>
                    <p className='customer-review'>“Рекомендую каждому”</p>
                    <p className='customer-name'>Якоб</p>
                </TestimonialsCard>
                <TestimonialsCard photo={customerthird}>
                    <div className='customer-photo'/>
                    <img className='customer-rating' src={ratingforandhalf} alt="Рейтинг"/>
                    <p className='customer-review'>“Выглядит очень натурально, запах обалденный”</p>
                    <p className='customer-name'>Марта</p>
                </TestimonialsCard>
            </ul>
        </StyledTestimonials>
    )
}

export default Testimonials
