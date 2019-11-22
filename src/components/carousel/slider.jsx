import React from 'react';
import Slide from './slide';
import Arrow from './arrow';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };
        this.previousSlide = this
            .previousSlide
            .bind(this);
        this.nextSlide = this
            .nextSlide
            .bind(this);
        this.indicatorCheck = this.indicatorCheck.bind(this);
    };

    previousSlide() {
        const lastIndex = this.props.items.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex
            ? lastIndex
            : currentImageIndex - 1;
        this.setState({currentImageIndex: index});
        this.indicatorCheck(index);
    };

    nextSlide() {
        const lastIndex = this.props.items.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex
            ? 0
            : currentImageIndex + 1;
        this.setState({currentImageIndex: index});
        this.indicatorCheck(index);
    };

    indicatorCheck(index){
        const indicatorCircles = Array.from(document.getElementsByClassName("indicator-circle"));
        indicatorCircles.forEach(circle => {
            if (circle.classList.contains("selected")) circle.classList.toggle("selected");
        })
        index = index > 3 ? 3 : index;
        indicatorCircles[index].classList.toggle("selected");
    }

    render() {
        let {items} = this.props;

        return (
            <div className="slider-parent">

                <div className="slider">

                    <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;"/>

                    <Slide item={items[this.state.currentImageIndex]}/>

                    <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;"/>

                </div>
                <div className="indicator">
                    <li><div className="indicator-circle selected"></div></li>
                    <li><div className="indicator-circle"></div></li>
                    <li><div className="indicator-circle"></div></li>
                    <li><div className="indicator-circle"></div></li>          
                </div>
            </div>
        );
    }
}