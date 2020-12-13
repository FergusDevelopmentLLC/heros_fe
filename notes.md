1. $ npx create-react-app heros_fe
2. cd heros_fe
3. npm install

Add redux, react-redux, redux-thunk
$ npm install redux react-redux redux-thunk
4. add /actions folder
5. add /reducers folder
6. add /actions/index.js
This will hold the types of actions that can happen
```
export const FETCH_HERO_REQUEST = 'FETCH_HERO_REQUEST'//init user request
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS'//ready to update global state
export const FETCH_HERO_FAILURE = 'FETCH_HERO_FAILURE'//something went wrong, convey error
```
for every api request, make this triad of consts
7. Create /actions/heroActions.js
Actions are basically what are initiated when state needs to be queried or updated to the permanent store (db/api). Actions dispatch an object that has: 
{
  type: must have
  payload: (like the result of api call or error from api call)
}
9. Create /reducers/heroReducer.js
```
import { FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE } from "../actions/";

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
    default:
      return state
  }
}
```
10. Create /reducers/index.js





https://stackoverflow.com/questions/8795097/how-to-git-commit-a-single-file-directory