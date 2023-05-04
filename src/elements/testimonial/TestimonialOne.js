import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const testimonialData = [
    {
        image: 'testimonial-01',
        name: 'Mayur Shah, Krutam Architects',
        designation: 'Sr Product Designer',
        location: 'Ahmedabad', 
        description: '“Their work is brilliant... starting a new venture ? Hand it over to them... meanwhile you can focus on what you got to do... designing, Advertising, its all their work. 👍„',
       
    },
    {
        image: 'testimonial-02',
        name: 'Ayaz Bhura, Bhura Consultancy',
        designation: 'App Developer',
        location: 'Vadodara', 
        description: `“When it comes to creativity and professional service, it's priy advertising that you should think of.„`,
      
    },
    {
        image: 'testimonial-03',
        name: 'Sanjay Dhaduk ,Bhagwati School ',
        designation: 'Accounts Manager',
        location: 'Varachha, Surat', 
        description: '“Have a great work in Surat and Very nice experience with owner and very creative work.„',
    },
    {
        image: 'testimonial-04',
        name: 'Amandeep Singh, Rapido',
        designation: 'Team Head',
        location: 'Varachha, Surat', 
        description: '“On time professional service for my business printing need and even in very fair rate ever i seen in surat„',
    },
]


const TestimonialOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {testimonialData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    style={{height: "calc(100% - 30px)" }}
                    animateOnce={true}>
                        <div style={{height :"100%"}} className={`rn-box-card ${teamStyle}`}>
                            <div style={{height :"100%"}} className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <p className="description">{data.description}</p>
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TestimonialOne;
