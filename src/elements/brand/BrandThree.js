import React from 'react';

// const BrandList = [
//     {
//         image: './images/brand/brand-01.png'
//     },
//     {
//         image: './images/brand/brand-02.png'
//     },
//     {
//         image: './images/brand/brand-03.png'
//     },
//     {
//         image: './images/brand/brand-04.png'
//     },
//     {
//         image: './images/brand/brand-05.png'
//     },
//     {
//         image: './images/brand/brand-06.png'
//     },
//     {
//         image: './images/brand/brand-07.png'
//     },
//     {
//         image: './images/brand/brand-08.png'
//     },
//     {
//         image: './images/brand/brand-01.png'
//     },
//
// ]

const BrandList = [
    {image: './images/client_logo/1.png'},
    {image: './images/client_logo/2.png'},
    {image: './images/client_logo/3.png'},
    {image: './images/client_logo/4.png'},
    {image: './images/client_logo/5.png'},
    {image: './images/client_logo/6.png'},
    {image: './images/client_logo/7.png'},
    {image: './images/client_logo/8.png'},
    {image: './images/client_logo/9.png'},
    {image: './images/client_logo/10.png'},
    {image: './images/client_logo/11.png'},
    {image: './images/client_logo/12.png'},
    {image: './images/client_logo/13.png'},
    {image: './images/client_logo/14.png'},
    {image: './images/client_logo/15.png'},
    {image: './images/client_logo/16.png'},
    {image: './images/client_logo/17.png'},
    {image: './images/client_logo/18.png'},
    {image: './images/client_logo/19.png'},
    {image: './images/client_logo/20.png'}
]

const BrandThree = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index} style={{margin: "10px"}}>
                <a href="#"><img src={`${data.image}`} style={{backgroundColor: "#fff"}} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
