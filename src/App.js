import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHeros } from './actions/heroActions'
import { useSelector } from 'react-redux'
import Hero from './components/Hero'

const App = (props) => {

  const heros = useSelector(state => state.heroReducer.heros)
  
  useEffect(() => {
    props.fetchHeros()
  }, [])

  const getHeros = () => heros ? heros.map((hero) => <Hero hero={ hero } />) : "loading..."

  return (
    <div className="App">
      { getHeros() }
    </div>
  )
}

export default connect(null, { fetchHeros })(App)