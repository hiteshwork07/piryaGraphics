import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 500,
        countTitle: 'Happy Clients.',
    },
    {
        countNum : 20,
        countTitle: 'Team Member',
    },
    {
        countNum : 80,
        countTitle: 'Repeat Clients',
        isPercentage : true
    },
    {
        countNum : 10,
        countTitle: 'Years Experience',
    },
];
const CounterUpFour = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className={`count-number ${data.isPercentage && "count-percentage"}`}>{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="counter-title">{data.countTitle}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpFour;