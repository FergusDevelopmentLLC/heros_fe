import React from 'react'
import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
  <div className="hero">{ props.hero.name }</div>
  )
}
Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero