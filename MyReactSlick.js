import Slider from 'react-slick'
import React from 'react'
import {AppsIcons} from './AppsIcons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MySlickItem from './MySlickItem'
import { CreateArrayPagination } from './CreateArrayPagination'

function MyReactSlick() {
    const appsIcons = [...CreateArrayPagination(AppsIcons, 24)];

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            {
                appsIcons.map((icons, i) => (
                    <MySlickItem key={i} AppsIcons={icons} />
                ))
            }
        </Slider>
    )
}

export default MyReactSlick