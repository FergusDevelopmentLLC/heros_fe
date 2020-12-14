import {  FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE, FETCH_HEROS_REQUEST, FETCH_HEROS_SUCCESS, FETCH_HEROS_FAILURE } from "../actions/";

const initialState = {
  hero: {},
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HERO_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: action.payload
      }
    case FETCH_HERO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_HEROS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_HEROS_SUCCESS:
      return {
        ...state,
        loading: false,
        heros: action.payload
      }
    case FETCH_HEROS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}