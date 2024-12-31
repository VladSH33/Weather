import React, { useState, useEffect } from 'react';
import HourlyItem from '../HourlyItem/HourlyItem';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HourlyList.style.ts'
import { Wrapper } from '../HourlyList/HourlyList.style';

type HourlyListProps = {
    times?: string[];
    temperatures?: number[];
    weatherCodes?: number[];
    selectTime: (time: number) => void;
    index?: number;
    now: number;
    isLoading: boolean;
}

const HourlyList: React.FC<HourlyListProps> = ({ times, temperatures, weatherCodes, selectTime, now, isLoading }) => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 700, 
        slidesToShow: 8,
        arrows: false,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: now,
        cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",
    };
    
    if (!temperatures || !weatherCodes) {
        return <div>Нет данных</div>
    }

    return (
        <Wrapper>
            <Slider {...sliderSettings}>
                {times?.map((time, index) => (
                    <HourlyItem
                        time={time}
                        key={index}
                        temperature={temperatures?.[index]}
                        weatherCode={weatherCodes?.[index]}
                        selectTime={selectTime}
                        index={index}
                        now={now}
                        isLoading={isLoading}
                    />
                ))}
            </Slider>
        </Wrapper>
    );
};

export default HourlyList;