import React, {useEffect, useState} from 'react';
import {FiPhone, FiArrowRight} from "react-icons/fi";
import Layout from "../common/Layout";
import ScrollAnimation from "react-animate-on-scroll";
import printing from '../assets/images/landingPage/printing.png'
import sample from "../assets/images/landingPage/01.jpg"
import product from "../assets/images/landingPage/02.jpg"
import BrandOne from "../elements/brand/BrandOne";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import "../assets/css/landing.css"
import Model from "../elements/model/Model";
import {createInquiry} from "../action/inquiry";

const LandingPage = () => {

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

    useEffect(()=> {
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
            <Layout footer={true} darkMode={true}>

                {
                    isModel &&
                    <Model isModel={isModel} setIsModel={setIsModel} modelTitle={modelTitle}
                           dropDownTitle={dropDownTitle}/>
                }

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content text-center">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <h2 className="title">{'Best Brochure Printing Service at Best Rate'}</h2>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-splite-style padding-title">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12 d-flex justify-content-center">
                                <div className="d-flex">
                                    <h2 className="mb-5">Best Brochure Printing Service at Best Rate</h2>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12 d-flex justify-content-center d-max-none">
                                <div className="d-flex flex-row gap-5">
                                    <div className="d-flex align-items-center">
                                        <FiPhone size={40}/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h3 className="mb-0">CALL US</h3>
                                        <h3 className="mb-0">+91 96012 91632</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-callto-action rn-call-to-action style-8 content-wrapper padding-0">
                    <div className="rn-splite-style padding-title">
                        <div className="split-wrapper">
                            <div className="row no-gutters radius-10 align-items-center">
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="split-inner">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <h3 className="mb-7 ">LOOKING FOR</h3>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <h4 className="description line-height-2 mb-7 d-flex justify-content-center">
                                                FREE GRAPHICS DESIGN, URGENT PRINTING AND FAST DELIVERY AT YOUR LOCATION
                                            </h4>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            className=' mb-7 d-flex justify-content-center'
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <ul className="split-list">
                                                <li><h4>- BROCHURES PRINTING</h4></li>
                                                <li><h4>- PAMPHLET PRINTING</h4></li>
                                                <li><h4>- FLYERS PRINTING</h4></li>
                                            </ul>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            className="d-flex justify-content-center d-max-none"
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}
                                        >
                                            <div className="view-more-button p-10">
                                                <a className="btn-default d-flex align-items-center"
                                                   onClick={() => onGetQuote()}>
                                                    <h4 className="mb-0">Get Quote Now</h4>
                                                </a>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="split-inner">
                                        <div className="rn-address mt-0 box-shadow">
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
                                                    <a className="btn-default d-flex align-items-center">
                                                        <h4 className="mb-0">Submit</h4>
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

                <div className="rn-splite-style padding-title">
                    <div className="split-wrapper">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner pt-0 pb--0">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <h3 className=" mb-7 d-flex justify-content-center">
                                            Our Printing Services...
                                        </h3>
                                    </ScrollAnimation>

                                    <ScrollAnimation
                                        className=' mb-7 d-flex justify-content-center'
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <ul className="split-list">
                                            <li><h4>- 5 START SERVICE</h4></li>
                                            <li><h4>- QUALITY PRINTING</h4></li>
                                            <li><h4>- VARIETY OF PAPER TYPES</h4></li>
                                            <li><h4>- VARIETY OF SIZE OPTIONS</h4></li>
                                            <li><h4>- MULTIPLE FOLDING OPTIONS</h4></li>
                                        </ul>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        className="d-flex justify-content-center"
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <div className="view-more-button p-10">
                                            <a className="btn-default d-flex align-items-center"
                                               onClick={() => onRequest()}>
                                                <h4 className="mb-0">
                                                    Request Callback
                                                </h4>
                                            </a>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="split-inner pt-0 pb--0 paddingX">
                                    <div className="d-flex justify-content-center">
                                        <img src={printing} alt="split Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-splite-style p-5 pt-0">
                    <div className="split-inner-2 paddingX">
                        <div className="row no-gutters radius-10 align-items-center">
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="d-flex justify-content-center">
                                    <h3 className="mb-2 mt-3">SAMPLE WORKS</h3>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={sample} alt={"sample"} className="heightImage widthImage"/>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12">
                                <div className="d-flex justify-content-center">
                                    <h3 className="mb-2 mt-3">PRODUCT CATEGORY</h3>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <img src={product} alt={"sample"} className="heightImage widthImage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-callto-action rn-call-to-action-2 style-8 content-wrapper box-shadow">
                    <div className="container">
                        <div className="row row--0 align-items-center ">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <div className="content text-center">
                                        <h3 className="">Best Brochure Printing Service</h3>
                                        <h6 className="subtitle">Top quality, great price</h6>
                                        <div className="call-to-btn text-center mt--30">
                                            <a className="btn-default btn-icon" onClick={() => onContact()}>Contact
                                                Us <i className="icon"><FiArrowRight/></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                <div className="rwt-elements-area mt-4">
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

                <div className="rn-callto-action clltoaction-style-default style-5 mt-4 box-shadow">
                    <div className="">
                        <div className="row row--0 align-items-center content-wrapper-2 theme-shape">
                            <div className="col-lg-12 col-xl-6 col-12 split-inner-form">
                                <div className="rn-address box-shadow mt-0">
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
                                            <a className="btn-default d-flex align-items-center">
                                                <h4 className="mb-0">Submit</h4>
                                            </a>
                                        </div>
                                    </ScrollAnimation>
                                    {bottomMessage &&
                                    <div>
                                        <h6 className="mb-0 mt-4 d-flex justify-content-center">{bottomMessage}</h6>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 col-12 d-flex justify-content-center">
                                <div className="inner">
                                    <div className="content text-center">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <h3 className="">{'...Your One Call Save More Time,Money and Give You Reliable Business Partner...'}</h3>
                                        </ScrollAnimation>
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <h3 className="">{'Thank You'}</h3>
                                        </ScrollAnimation>
                                    </div>
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
