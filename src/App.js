import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHero } from './actions/heroActions'

const App = (props) => {

  useEffect(() => {
    props.fetchHero(2)
  }, [])

  return (
    <div className="App">{ props.hero ? props.hero.name : "none"}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    hero: state.heroReducer.hero
  }
}

export default connect(mapStateToProps, { fetchHero })(App)