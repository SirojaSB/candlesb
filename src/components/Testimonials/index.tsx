import React from "react";

import customerfirst from '../../assets/images/customer1.png'
import customersecond from '../../assets/images/customer2.png'
import customerthird from '../../assets/images/customer3.png'
import ratingforandhalf from '../../assets/images/Stars45.svg'
import ratingfive from '../../assets/images/Stars5.svg'
import StyledTestimonials from "./StyledTemstimonials";
import TestimonialsCard from "./TestimonialsCard";

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
