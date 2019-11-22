import React from 'react';
import SpotSlide from './spot_slide';
import SpotArrow from './spot_arrow';

export default class SpotSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex1: 0,
            currentImageIndex2: 1,
            currentImageIndex3: 2
        };
        this.previousSlide = this
            .previousSlide
            .bind(this);
        this.nextSlide = this
            .nextSlide
            .bind(this);
        this.indicatorCheck = this.indicatorCheck.bind(this);
        this.hideArrow = this.hideArrow.bind(this);
        this.showArrows = this.showArrows.bind(this);
    };

    previousSlide() {
        
        const lastIndex = this.props.items.length - 1;
        const {currentImageIndex1, currentImageIndex2, currentImageIndex3} = this.state;

        const index1 = currentImageIndex1 - 3;
        const index2 = currentImageIndex2 - 3;
        const index3 = currentImageIndex3 - 3;
        this.setState({currentImageIndex1: index1, currentImageIndex2: index2, currentImageIndex3: index3});
        if (index1 === 0){
            this.hideArrow("left");
        } else if (index3 === lastIndex){
            this.hideArrow("right");
        } else {
            this.showArrows();
        }
        this.indicatorCheck(index1);
    };

    nextSlide() {
        
        const lastIndex = this.props.items.length - 1;
        const {currentImageIndex1, currentImageIndex2, currentImageIndex3} = this.state;
        const index1 = currentImageIndex1 + 3;
        const index2 = currentImageIndex2 + 3;
        const index3 = currentImageIndex3 + 3;
        this.setState({currentImageIndex1: index1, currentImageIndex2: index2, currentImageIndex3: index3});
        if (index1 === 0) {
            this.hideArrow("left");
        } else if (index3 === lastIndex) {
            this.hideArrow("right");
        } else {
            this.showArrows();
        }
        this.indicatorCheck(index1);
    };

    indicatorCheck(index){
        const indicatorCircles = Array.from(document.getElementsByClassName("spot-indicator-circle"));
        indicatorCircles.forEach(circle => {
            if (circle.classList.contains("selected")) circle.classList.toggle("selected");
        })
        index = index >= 3 ? 1 : 0;
        indicatorCircles[index].classList.toggle("selected");
    }

    hideArrow(direction){
        this.showArrows();
        const arrow = document.getElementsByClassName(`spot-slide-arrow ${direction}`)[0];
        arrow.classList.toggle("hidden");
    }

    showArrows(){
        const arrows = Array.from(document.getElementsByClassName(`spot-slide-arrow`));
        arrows.forEach(arrow => arrow.classList.remove("hidden"));
    }

    render() {
        let {items} = this.props;

        return (
            <div className="slider-parent">

                <div className="spot-slider">

                    <SpotArrow direction="left hidden" clickFunction={this.previousSlide} glyph="&#9664;"/>

                    <SpotSlide item={items[this.state.currentImageIndex1]}/>
                    <SpotSlide item={items[this.state.currentImageIndex2]}/>
                    <SpotSlide item={items[this.state.currentImageIndex3]}/>

                    <SpotArrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;"/>

                </div>
                <div className="spot-indicator">
                    <li><div className="spot-indicator-circle selected"></div></li>
                    <li><div className="spot-indicator-circle"></div></li>        
                </div>
            </div>
        );
    }
}