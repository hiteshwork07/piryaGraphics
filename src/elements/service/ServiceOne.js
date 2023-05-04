import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Graphics',
        description: "Transform your brand's image with our expert graphic design services. From logos to brochures to digital graphics, our team of talented designers will create stunning visuals that help your business stand out."
    },
    {
        icon: <FiCast />,
        title: 'Printing',
        description: "Experience high-quality printing services with a commitment to excellence. We offer a wide range of printing solutions, from business cards to large format printing, all at an affordable price."
    },
    {
        icon: <FiMap />,
        title: 'Advertising',
        description: "Take your marketing to the next level with our creative advertising solutions. From traditional print ads to digital marketing campaigns, our team will work with you to develop and execute a strategy that meets your goals and fits your budget."
    },
]

const ServiceList2 = [
    {
        icon: <FiActivity />,
        title: 'Graphics',
        description: "From redesigning a business card to developing a brand from scratch, we are ready to make your brand memorable!"
    },
    {
        icon: <FiCast />,
        title: 'Printing',
        description: "Brochures <br/> Pamphlets <br/> Flyers <br/> Product Sticker/Label <br/> Business Card <br/> Envelopes <br/> Forms <br/> Letterheads <br/> Hospital File  <br/> Postcards <br/> Product Box <br/> Rx Pads and Paper <br/> Pocket Folders <br/> Four Color Non-Woven Bag <br/> Calenders <br/> Die Cut Printing <br/> And More! "
    },
    {
        icon: <FiMap />,
        title: 'Advertising',
        description: "Flex-Banners <br/> Hoardings <br/> Shop Branding <br/> Acrylic Board <br/> ACP Board <br/> Backlight Board <br/> LED Sign Board <br/> No Parking Board <br/> Bicycle/Auto Ads  <br/> Sunpack Sheet <br/> Pamphlets Distribution <br/> Standee Banner <br/> Vinyl Foam Sheet <br/> One Way Vision <br/> Retro Banner <br/> Matt Vinyl <br/> Eco Banner <br/> And More! "
    },
]

const ServiceOne = ({textAlign, serviceStyle, isHomePage = false}) => {

    const ServiceListData = isHomePage ? ServiceList : ServiceList2;
    return (
        <div className="row row--15 service-wrapper">
              {ServiceListData.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    style={{height : "100%"}}
                    animateOnce={true}>
                        <div style={{height : "calc(100% - 55px)"}} className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;