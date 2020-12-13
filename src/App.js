import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHero } from './actions/heroActions'
import { useSelector } from 'react-redux'
import Hero from './components/Hero'

const App = (props) => {

  const loading = useSelector(state => state.heroReducer.loading)
  const hero = useSelector(state => state.heroReducer.hero)
  
  useEffect(() => {
    props.fetchHero(1)
  }, [])

  return (
    <div className="App">
      { loading ? "loading..." : <Hero hero={ hero }/> }
    </div>
  )
}

export default connect(null, { fetchHero })(App)