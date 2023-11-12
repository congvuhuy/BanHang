import React from "react";
import './homePage.scss';
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import NavBarComponent from "../../components/NavBarComponent/navBarComponent";
import CardComponent from "../../components/cardComponent/cardComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import PaginationBasic from "../../components/cardComponent/paginationComponent";


function HomePage() {
    return (
        <div className='content'>
            <div className='nav'>
                <NavBarComponent />
            </div>
            <div className="sliderContent">
                <SliderComponent   arrImages={[slider1, slider2, slider3]} />
            </div>
            <div className="cardProduct">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>     
                <PaginationBasic/>
            </div>
            
        </div>
        
    );
}
export default  HomePage 