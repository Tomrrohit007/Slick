import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    console.log(planetsList)
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 1000,
    }

    return (
      <div data-testid="planets" className="main-cont">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem each={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
