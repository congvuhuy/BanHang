import { Image } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";

const SliderComponent = ({arrImages})=>{
    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
            <Slider className="slider" {...settings}>
                {arrImages.map((image)=>{
                    return(
                        <Image className="img" src={image} alt="Slider" />
                    )  
                })}
            </Slider>  
    )
}
export default SliderComponent