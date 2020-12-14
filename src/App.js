import React, { useEffect } from 'react'
import { fetchHeros } from './actions/heroActions'
import { useSelector, useDispatch } from 'react-redux'
import Hero from './components/Hero'

const App = () => {

  const heros = useSelector(state => state.heroReducer.heros)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeros())
  }, [])

  const getHeros = () => {
    if(heros) {
      return heros.map((hero) => <Hero hero={ hero } />)
    }
    else {
      return "loading..."
    }
  }

  return (
    <div className="App">
      { getHeros() }
    </div>
  )
}

export default App