import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Util
} from 'reactstrap';
import BsHeroImage from '../BsHeroImage';
import bootstrap from 'asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.css';

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

class BsReactCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;

    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map((item, index) => {
      return (
        <CarouselItem
          tag="div"
          key={index}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <BsHeroImage {...item}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        cssModule={bootstrap}
        interval={this.props.interval}
      >
        <CarouselIndicators cssModule={bootstrap} items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl  direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

BsReactCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ])
};

BsReactCarousel.defaultProps = {
  interval: 5000
};

export default BsReactCarousel;
