import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "Consultation",
        description: "We begin by understanding your needs and goals, and providing expert advice and guidance.",
    },
    {
        id: "2",
        title: "Design",
        description: "Our team of skilled designers will work closely with you to create a design that perfectly represents your brand.",
    },
    {
        id: "3",
        title: "Printing",
        description: "Using state-of-the-art printing technology, we bring your design to life on a variety of high-quality materials.",
    },
    {
        id: "4",
        title: "Delivery",
        description: "We carefully package and deliver your printed materials to your doorstep, on time and ready to make an impact.",
    },
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;