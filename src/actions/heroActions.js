import { FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE } from './'

export const fetchHero = (id) => {

  return dispatch => {

    dispatch({ type: FETCH_HERO_REQUEST })
    
    fetch(`https://hero-api-56790.herokuapp.com/heros/${id}`, null)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        else {
          return Promise.reject(res.statusText)
        }
      })
      .then((hero) => {
        return dispatch({
          type: FETCH_HERO_SUCCESS,
          payload: hero
        })
      }).catch((error) => {
        return dispatch({
          type: FETCH_HERO_FAILURE,
          payload: error
        })
      })
  }
}