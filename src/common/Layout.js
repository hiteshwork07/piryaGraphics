import React from 'react';
import HeaderOne from "./header/HeaderOne";
import HeaderTopNews from "./header/HeaderTopNews";
import FooterTwo from "./footer/FooterTwo";
import Copyright from "./footer/Copyright";
import FooterOne from './footer/FooterOne';

const Layout = ({children, setPortFolioData = () =>{}, setPortFolioDataLoading = () =>{}, footer, darkMode}) => {
    return (
        <>
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne setPortFolioData={setPortFolioData} setPortFolioDataLoading={setPortFolioDataLoading} darkMode={darkMode}
                           btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent"/>
                {children}
                {
                    !footer &&
                    <FooterOne/>
                }
                <Copyright/>
            </main>
        </>
    )
}
export default Layout;
