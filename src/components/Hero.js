import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ hero }) => {
  return (
  <div className="hero">{ hero.name }</div>
  )
}
Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero