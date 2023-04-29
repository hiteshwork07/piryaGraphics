import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import LogoImg from '../../assets/images/logo/logo.png'

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img className="logo-light" src={LogoImg} alt="Corporate Logo" />
                <img className="logo-dark" src={LogoImg} alt="Corporate Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
