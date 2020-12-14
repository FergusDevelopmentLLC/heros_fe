import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ hero }) => {
  return (
  <div className="hero">
    { hero.name }<br/>
    <img src={ hero.img_url } width={100} />
  </div>
  )
}
Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero