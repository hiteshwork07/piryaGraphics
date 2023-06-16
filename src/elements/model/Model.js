import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import ScrollAnimation from "react-animate-on-scroll";
import image from '../../assets/images/landingPage/modelImage.jpg'
import "../../assets/css/landing.css"
import {createInquiry} from "../../action/inquiry";

const Model = ({isModel, setIsModel, modelTitle, dropDownTitle}) => {

    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        city: ""
    });
    const [errors, setValidation] = React.useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    };

    const resetForm = () => {
        setForm({});
        setValidation({})
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

    const toggleShow = () => setIsModel(!isModel);

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
            <Modal funk={true} isOpen={isModel} toggle={toggleShow} centered size={"lg"}>
                <ModalHeader toggle={toggleShow} className="fontColor">{modelTitle}</ModalHeader>
                <ModalBody className="p-0">
                    <div className="d-flex flex-row">
                        <div className="w-35 bg-black d-max-none">
                            <div className="d-flex justify-content-center">
                                <img src={image} alt={"image"}/>
                            </div>
                            <div>
                                <h6 className="mb-0 p-5 d-flex justify-content-center">Best Printing and Advertising
                                    Partner for Your Business</h6>
                            </div>
                        </div>
                        <div className="w-65 w-max-100">
                            <div>
                                <div className="form-group mt-5 padding-0-35">
                                    <input
                                        value={form?.name || ""}
                                        onChange={(e) => handleChange(e)}
                                        className="border-black"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <span
                                        className="error d-flex justify-content-center">{errors.name}</span>
                                </div>
                                <div className="form-group padding-0-35">
                                    <input
                                        value={form?.phone || ""}
                                        onChange={(e) => handleChange(e)}
                                        className="border-black"
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                    />
                                    <span
                                        className="error d-flex justify-content-center">{errors.phone}</span>
                                </div>
                                <div className="form-group padding-0-35">
                                    <select name="city" id="language" className="border-black bg-white"
                                            onChange={(e) => handleChange(e)} value={form?.city || ""}>
                                        {/*<option value="" disabled selected>{dropDownTitle}</option>*/}
                                        <option value="" disabled selected>Select your area</option>
                                        <option value="surat">Surat</option>
                                        <option value="vadodara">Vadodara</option>
                                        <option value="amreli">Amreli</option>
                                        <option value="vapi">Vapi</option>
                                        <option value="navsari">Navsari</option>
                                    </select>
                                </div>
                                <ScrollAnimation
                                    className="d-flex justify-content-center mt-5 opacity-100"
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                >
                                    <div className="view-more-button" onClick={() => onCreate()}>
                                        <a className="btn-default fs-17">
                                            Submit
                                        </a>
                                    </div>
                                </ScrollAnimation>
                                <div className="d-flex justify-content-center mt-5 p-max-40 p-40">
                                    <h6 className="color-black">Email: contact@priyadvertising.com | Mobile: +91
                                        9601291632</h6>
                                </div>
                                {message &&
                                <div>
                                    <h6 className="mb-0 mt-4 d-flex justify-content-center color-black">{message}</h6>
                                </div>}
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
};

export default Model;