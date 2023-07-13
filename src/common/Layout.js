import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";
import FooterOne from './footer/FooterOne';

const Layout = ({children, setPortFolioData = () =>{}, setPortFolioDataLoading = () =>{}, footer, darkMode, logo, copyRight}) => {
    return (
        <>
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne setPortFolioData={setPortFolioData} setPortFolioDataLoading={setPortFolioDataLoading} darkMode={darkMode} logo={logo}
                           btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent"/>
                {children}
                {
                    !footer &&
                    <FooterOne/>
                }
                <Copyright copyRight={copyRight}/>
            </main>
        </>
    )
}
export default Layout;
