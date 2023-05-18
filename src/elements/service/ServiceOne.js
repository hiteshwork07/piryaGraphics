import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import GraphicsImg from './GraphicsImg';
import PrintingImage from './PrintingImage';
import AdvertisingImage from './AdvertisingImage';

const ServiceList = [
    {
        icon: <GraphicsImg />,
        title: 'Graphics',
        description: "Transform your brand's image with our expert graphic design services. From logos to brochures to digital graphics, our team of talented designers will create stunning visuals that help your business stand out."
    },
    {
        icon: <PrintingImage />,
        title: 'Printing',
        description: "Experience high-quality printing services with a commitment to excellence. We offer a wide range of printing solutions, from business cards to large format printing, all at an affordable price."
    },
    {
        icon: <AdvertisingImage />,
        title: 'Advertising',
        description: "Take your marketing to the next level with our creative advertising solutions. From traditional print ads to digital marketing campaigns, our team will work with you to develop and execute a strategy that meets your goals and fits your budget."
    },
]

const ServiceList2 = [
    {
        icon: <GraphicsImg />,
        title: 'Graphics',
        description: "From redesigning a business card to developing a brand from scratch, we are ready to make your brand memorable!"
    },
    {
        icon: <PrintingImage />,
        title: 'Printing',
        description: "<li> Brochures </li><li>  Pamphlets </li><li> Flyers </li><li> Product Sticker/Label </li><li> Business Card </li><li> Envelopes </li><li> Forms </li><li> Letterheads </li><li> Hospital File  </li><li> Postcards </li><li> Product Box </li><li> Rx Pads and Paper </li><li> Pocket Folders </li><li> Four Color Non-Woven Bag </li><li> Calenders </li><li> Die Cut Printing </li><li> And More!</li> "
    },
    {
        icon: <AdvertisingImage />,
        title: 'Advertising',
        description: "<li> Flex-Banners </li><li> Hoardings </li><li> Shop Branding </li><li> Acrylic Board </li><li> ACP Board </li><li> Backlight Board </li><li> LED Sign Board </li><li> No Parking Board </li><li> Bicycle/Auto Ads  </li><li> Sunpack Sheet </li><li> Pamphlets Distribution </li><li> Standee Banner </li><li> Vinyl Foam Sheet </li><li> One Way Vision </li><li> Retro Banner </li><li> Matt Vinyl </li><li> Eco Banner </li><li> And More!</li> "
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
                            <div className="icon icon-theme">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <div>
                                    <ul style={{width : "fit-content", textAlign :"left", margin :"0 auto", paddingLeft:40}} className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></ul>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;