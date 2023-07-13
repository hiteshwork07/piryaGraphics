import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {FiPhone, FiArrowRight} from "react-icons/fi";
import Layout from "../common/Layout";
import ScrollAnimation from "react-animate-on-scroll";
import printing from '../assets/images/landingPage/printing.png'
import BrandOne from "../elements/brand/BrandOne";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import "../assets/css/landing.css"
import Model from "../elements/model/Model";
import {createInquiry} from "../action/inquiry";
import Circle from "../assets/images/landingPage/circle.svg"
import Book from "../assets/images/landingPage/book.svg"
import Line from "../assets/images/landingPage/Line.png";
import Call from "../assets/images/landingPage/Call.png";
import Man from "../assets/images/landingPage/Man.png";
import Product1 from "../assets/images/landingPage/W1.png";
import Product2 from "../assets/images/landingPage/W2.png";
import Product3 from "../assets/images/landingPage/W3.png";
import Product4 from "../assets/images/landingPage/W4.png";
import Product5 from "../assets/images/landingPage/W5.png";
import QuestionMark from "../assets/images/landingPage/questionMark.png";
import Map from "../assets/images/landingPage/Map.png";
import image1 from "../assets/images/landingPage/Image 1.png";
import image2 from "../assets/images/landingPage/Image 2.png";
import image3 from "../assets/images/landingPage/Image 3.png";
import image4 from "../assets/images/landingPage/Image 4.png";
import image5 from "../assets/images/landingPage/Image 5.png";
import image6 from "../assets/images/landingPage/Image 6.png";
import LogoImage from "../assets/images/logo/priyLogo.png";

const LandingPage = () => {

    const location = useLocation();

    const [isModel, setIsModel] = useState(false);
    const [modelTitle, setModelTitle] = useState("");
    const [dropDownTitle, setDropDownTitle] = useState("");
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        city: ""
    });
    const [errors, setValidation] = React.useState({});
    const [bottomMessage, setBottomMessage] = useState("");
    const [bottomForm, setBottomForm] = useState({
        name: "",
        phone: "",
        city: ""
    });
    const [bottomErrors, setBottomValidation] = React.useState({});

    useEffect(() => {
        document.querySelector('body')?.classList.toggle("light")
    }, []);

    const onGetQuote = () => {
        setIsModel(!isModel);
        setModelTitle("GET QUOTE");
        setDropDownTitle("Get Quote For")
    };

    const onRequest = () => {
        setIsModel(!isModel);
        setModelTitle("REQUEST CALLBACK");
        setDropDownTitle("Request Callback For")
    };

    const onContact = () => {
        setIsModel(!isModel);
        setModelTitle("CONTACT US");
        setDropDownTitle("Contact For")
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    };

    const bottomHandleChange = (e) => {
        const {name, value} = e.target;
        setBottomForm({...bottomForm, [name]: value})
    };

    const resetForm = () => {
        setForm({});
        setValidation({})
    };

    const bottomResetForm = () => {
        setBottomForm({});
        setBottomValidation({})
    };

    const onCreate = async () => {
        let allErrors = {};

        const userData = {
            name: form.name,
            phone: form.phone,
        };

        Object.keys(userData).forEach(key => {
            const error = validation(key, userData[key]);
            if (error && error.length) {
                allErrors[key] = error
            }
        });
        if (Object.keys(allErrors).length) {
            return setValidation(allErrors)
        } else {
            const payload = {
                userName: form?.name,
                userMobile: form?.phone,
                userCity: form?.city
            };
            const detail = await createInquiry(payload);
            if (detail.success) {
                setMessage('Thanks for Submitting');
                setTimeout(() => setMessage(''), 3000);
            } else {
                console.log("something went wrong!")
            }
            resetForm()
        }
    };

    const onBottomCreate = async () => {
        let allErrors = {};

        const userData = {
            name: bottomForm.name,
            phone: bottomForm.phone,
        };

        Object.keys(userData).forEach(key => {
            const error = validation(key, userData[key]);
            if (error && error.length) {
                allErrors[key] = error
            }
        });
        if (Object.keys(allErrors).length) {
            return setBottomValidation(allErrors)
        } else {
            const payload = {
                userName: bottomForm?.name,
                userMobile: bottomForm?.phone,
                userCity: bottomForm?.city
            };
            const detail = await createInquiry(payload);
            if (detail.success) {
                setBottomMessage('Thanks for Submitting');
                setTimeout(() => setBottomMessage(''), 3000);
            } else {
                console.log("something went wrong!")
            }
            bottomResetForm()
        }
    };

    const validation = (name, value) => {
        const mobileNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/
        switch (name) {
            case 'name':
                if (!value) {
                    return 'Please input your name!'
                } else {
                    return '';
                }
            case 'phone':
                if (!value) {
                    return 'Please input your phoneNumber!'
                } else if (!mobileNumber.test(value)) {
                    return 'Please check your phoneNumber!'
                } else {
                    return ''
                }
            default: {
                return null;
            }
        }
    };

    return (
        <>
            <Layout footer={true} darkMode={true} logo={true} copyRight={true}>

                {
                    isModel &&
                    <Model isModel={isModel} setIsModel={setIsModel} modelTitle={modelTitle}
                           dropDownTitle={dropDownTitle}/>
                }

                <div className="rn-callto-action rn-call-to-action style-8 content-wrapper padding-0 mt--85">
                    <div className="rn-splite-style padding-title">
                        <div className="split-wrapper">
                            <div className="row no-gutters radius-10 align-items-center">
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <div className="d-flex flex-column color-black line-height-1 mb-2">
                                                <div className="fs-44 fw-light">Best Offset</div>
                                                <div className="fs-109 fw-bold">Printing</div>
                                                <div className="fs-44 fw-light">Service</div>
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <div
                                                className="description mb-2 d-flex justify-content-center fs-17 color-black">
                                                Experience the brilliance of offset printing, where quality and
                                                precision meet your vision.
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            className='d-flex justify-content-between'
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <img className="" src={Circle} alt="Corporate Logo"/>
                                                </div>
                                                <div>
                                                    <img className="" src={Book} alt="Corporate Logo"/>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            className="mb-4"
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <div className="d-flex flex-row gap-5 color-black">
                                                <div>
                                                    <img className="" src={Line} alt="Corporate Logo"
                                                         style={{height: "95px"}}/>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <div className="fs-24 fw-light">Call us Now</div>
                                                    <div
                                                        className="d-flex flex-row justify-content-center align-items-center">
                                                        <img className="" src={Call} alt="Corporate Logo"
                                                             style={{height: "30px", width: "30px"}}/>
                                                        <div className="fs-32 fw-bold">+ 91 9601291632</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="">
                                        <div className="rn-address mt-0 box-shadow">
                                            <div
                                                className="fs-28 fw-bold d-flex align-items-center justify-content-center color-black"
                                                style={{padding: "55px 0 55px 0"}}>
                                                Get started with us today !
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    value={form?.name || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                                <span
                                                    className="error d-flex justify-content-center">{errors.name}</span>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    value={form?.phone || ""}
                                                    onChange={(e) => handleChange(e)}
                                                    type="number"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    required
                                                />
                                                <span
                                                    className="error d-flex justify-content-center">{errors.phone}</span>
                                            </div>
                                            <div className="form-group">
                                                <select name="city" id="language" className=""
                                                        onChange={(e) => handleChange(e)} value={form?.city || ""}>
                                                    <option value="" disabled selected>Select your area</option>
                                                    <option value="surat">Surat</option>
                                                    <option value="vadodara">Vadodara</option>
                                                    <option value="amreli">Amreli</option>
                                                    <option value="vapi">Vapi</option>
                                                    <option value="navsari">Navsari</option>
                                                </select>
                                            </div>
                                            <ScrollAnimation
                                                className="d-flex justify-content-center"
                                                animateIn="fadeInUp"
                                                animateOut="fadeInOut"
                                                animateOnce={true}
                                            >
                                                <div className="view-more-button p-10" onClick={() => onCreate()}>
                                                    <a className="btn-default-2 d-flex align-items-center">
                                                        <h4 className="mb-0 color-white">Submit</h4>
                                                    </a>
                                                </div>
                                            </ScrollAnimation>
                                            {message &&
                                            <div>
                                                <h6 className="mb-0 mt-4 d-flex justify-content-center">{message}</h6>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rwt-elements-area">
                    <div className="d-flex flex-row">
                        <div className="col-lg-12 col-xl-6 col-12 d-flex align-items-center">
                            <div className="w-100 h-60 d-flex flex-row justify-content-around align-items-center"
                                 style={{background: 'linear-gradient(151deg, #1CC2BE 1.66%, #0E8C57 100%)'}}>
                                <div>
                                    <ui>
                                        <li className="color-white fs-32 fw-bold">Brochures</li>
                                        <li className="color-white fs-32 fw-bold">Pamphlet</li>
                                        <li className="color-white fs-32 fw-bold">Flyers</li>
                                        <li className="color-white fs-32 fw-bold">Product Sticker</li>
                                        <li className="color-white fs-32 fw-bold">Envelopes</li>
                                        <li className="color-white fs-32 fw-bold">letterhead</li>
                                    </ui>
                                </div>
                                <div>
                                    <ui>
                                        <li className="color-white fs-32 fw-bold">hospital Files</li>
                                        <li className="color-white fs-32 fw-bold"> Box Printing</li>
                                        <li className="color-white fs-32 fw-bold">forms</li>
                                        <li className="color-white fs-32 fw-bold">Calendar</li>
                                        <li className="color-white fs-32 fw-bold">Forms</li>
                                        <li className="color-white fs-32 fw-bold">Visiting card</li>
                                    </ui>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 col-12 d-flex justify-content-end">
                            <img className="" src={Man} alt="Corporate Logo" style={{height: "712px", width: "702px"}}/>
                        </div>
                    </div>
                </div>

                <div className="rn-callto-action rn-call-to-action style-8 content-wrapper padding-0 border-radius">
                    <div className="rn-splite-style padding-title">
                        <div className="split-wrapper">
                            <div className="content-wrapper content d-flex justify-content-center">
                                <div>
                                    <h6 className="subtitle">Your one-stop solution for exceptional design, service,
                                        quality, and value in all
                                        your
                                        graphics, printing and advertising needs.</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between pb--65">
                                <img className="" src={Product1} alt="Corporate Logo" height={180} width={180}/>
                                <img className="" src={Product2} alt="Corporate Logo" height={180} width={180}/>
                                <img className="" src={Product3} alt="Corporate Logo" height={180} width={180}/>
                                <img className="" src={Product4} alt="Corporate Logo" height={180} width={180}/>
                                <img className="" src={Product5} alt="Corporate Logo" height={180} width={180}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-splite-style padding-title">
                    <div className="d-flex flex-row justify-content-center">
                        <div>
                            <img className="" src={QuestionMark} alt="Corporate Logo"/>
                        </div>
                        <div className="d-flex flex-column gap-5">
                            <h2 className="justify-content-center d-flex">Why Choose us ?</h2>
                            <img className="" src={Map} alt="Corporate Logo"/>
                        </div>
                    </div>
                </div>

                <div className="rn-callto-action rn-call-to-action-2 style-8 content-wrapper"
                     style={{background: 'linear-gradient(151deg, #00BBCB 0%, rgba(0, 187, 203, 0.08) 0.01%, rgba(0, 123, 51, 0.08) 100%)'}}>
                    <div className="">
                        <div className="">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div
                                        className="content text-center d-flex flex-row justify-content-evenly align-items-center">
                                        <h3 className="mb-0">Best offer Printing Service</h3>
                                        <h6 className="subtitle">Top Quality, Great Price</h6>
                                        <div className="call-to-btn text-center">
                                            <a className="btn-default-2 btn-icon" onClick={() => onContact()}>Contact
                                                Us <i className="icon"><FiArrowRight/></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-callto-action rn-call-to-action-2 style-8 content-wrapper"
                     style={{background: 'linear-gradient(128deg, #1CC2BE 1.66%, #0E8C57 100%)'}}>
                    <h3 className="color-white d-flex justify-content-center">Our Design Showcase</h3>
                    <div className="d-flex align-content-between flex-wrap padding-title justify-content-center">
                        <img className="" src={image1} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                        <img className="" src={image2} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                        <img className="" src={image3} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                        <img className="" src={image4} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                        <img className="" src={image5} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                        <img className="" src={image6} alt="Corporate Logo"
                             style={{width: "356px", height: "258px", margin: "40px"}}/>
                    </div>
                </div>

                <div className="rwt-brand-area mt-4">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="mb-0 d-flex justify-content-center mt-4">OUR CLIENTS</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <BrandOne brandStyle="brand-style-1"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rwt-elements-area mt-4 mb--50">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="mb-0 d-flex justify-content-center mt-4">OUR CUSTOMER FEEDBACK</h3>
                            </div>
                        </div>
                        <TestimonialOne
                            column="col-lg-3 col-md-6 col-12"
                            teamStyle="card-style-default testimonial-style-one style-two border-gradient"
                        />
                    </div>
                </div>

                <div className="rn-callto-action clltoaction-style-default style-5 mt-4" style={{background: "linear-gradient(151deg, #00BBCB 0%, rgba(0, 187, 203, 0.08) 0.01%, rgba(0, 123, 51, 0.08) 100%)"}}>
                    <div className="">
                        <div className="row row--0 content-wrapper-2 theme-shape align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12 d-flex split-inner-form">
                                <div className="inner">
                                    <div className="content">
                                        <img className="logo-dark" src={LogoImage} alt="Corporate Logo" height={100} width={100}/>
                                        <h6 className="mt-3">All Type of Design & Print Silution</h6>
                                        <ScrollAnimation
                                            style={{marginTop: "10%"}}
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <div className="fs-42 line-height-normal">
                                                <b>Your One Call</b> save More Time, Money And Give You Reliable Business Partner
                                            </div>
                                        </ScrollAnimation>
                                        <hr/>
                                        <div>
                                            <h6 className="mb-0">Call us Now</h6>
                                            <div
                                                className="d-flex flex-row align-items-center">
                                                <img className="" src={Call} alt="Corporate Logo"
                                                     style={{height: "30px", width: "30px"}}/>
                                                <div className="fs-32 fw-bold">+ 91 9601291632</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12 split-inner-form">
                                <div className="rn-address box-shadow mt-0">
                                    <div
                                        className="fs-28 fw-bold d-flex align-items-center justify-content-center color-black"
                                        style={{padding: "55px 0 55px 0"}}>
                                        Get started with us today !
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={bottomForm?.name || ""}
                                            onChange={(e) => bottomHandleChange(e)}
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <span
                                            className="error d-flex justify-content-center">{bottomErrors.name}</span>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={bottomForm?.phone || ""}
                                            onChange={(e) => bottomHandleChange(e)}
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <span
                                            className="error d-flex justify-content-center">{bottomErrors.phone}</span>
                                    </div>
                                    <div className="form-group">
                                        <select name="city" id="language" className="" value={bottomForm?.city || ""}
                                                onChange={(e) => bottomHandleChange(e)}>
                                            <option value="" disabled selected>Select your area</option>
                                            <option value="surat">Surat</option>
                                            <option value="vadodara">Vadodara</option>
                                            <option value="amreli">Amreli</option>
                                            <option value="vapi">Vapi</option>
                                            <option value="navsari">Navsari</option>
                                        </select>
                                    </div>
                                    <ScrollAnimation
                                        className="d-flex justify-content-center"
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <div className="view-more-button p-10" onClick={() => onBottomCreate()}>
                                            <a className="btn-default-2 d-flex align-items-center">
                                                <h4 className="mb-0 color-white">Submit</h4>
                                            </a>
                                        </div>
                                    </ScrollAnimation>
                                    {bottomMessage &&
                                    <div>
                                        <h6 className="mb-0 mt-4 d-flex justify-content-center">{bottomMessage}</h6>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
};

export default LandingPage;
