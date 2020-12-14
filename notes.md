First, make a new api with rails, make the database postgresql and flip the api switch so that front end code related to a rails front end wont be included.
```
1.  $ rails new hero_api --database=postgresql --api
2.  $ cd hero_api
```
Create a user named hero_api to act as the user to connect to the database for this app. The database is also called hero_api in this case. Note password used for hero_api user here.
```
3.  $ sudo adduser hero_api 
```
Make hero_api user be a root user:
```
4.  $ sudo usermod -aG sudo hero_api (Make user root)
```
Impersonate the postgres user on your system and create the hero_api database and hero_api database user.
```
5.  $ su - postgres
6.  postgres@computer:~$ createuser hero_api
7. postgres@computer:~$ createdb hero_api
8. Provide the privileges to hero_api user
9. postgres@computer:~$ psql
10. postgres=# alter user hero_api with encrypted password 'peace2020';
11. postgres=# grant all privileges on database hero_api to hero_api;
```
Edit config/database.yml to add credentials for the user, hero_api. Fill in the test and development areas to match the hero_api user above.
```
test:
  adapter: postgresql
  encoding: unicode
  database: hero_api
  pool: 5
  username: hero_api
  password: peace2020

development:
  adapter: postgresql
  encoding: unicode
  database: hero_api
  pool: 5
  username: hero_api
  password: peace2020

```
Exit out of psql with 'exit', then $ exit to stop impersonating postgres. Next, make two models, one for Hero and one for Villain. If all goes well, the db:migrate will create Hero and Villain models/tables.
```
17. $ rails g scaffold Hero name:string 
19. $ rails g scaffold Villain name:string hero:references
20. rake db:migrate
```
Check the models to make sure that a hero has many villains and a villain fights one hero (in our universe).
```
21. hero_api/app/models/hero.rb
class Hero < ApplicationRecord
  has_many :villains
end
```
```
22. hero_api/app/models/villian.rb
class Villain < ApplicationRecord
  belongs_to :hero
end
```
Next, we will create some heroes and villains with the rails console. 
```
23. $ rails c
```
Make the first hero, Batman...
```
    > b = Hero.new
    > b.name = "Batman"
    > b.save
    > b
```
Then make Joker, Batman's first villian
```
    > j = Villain.new
    > j.name = "Joker"
    > j.hero = b
    > j.save
```
Almost done. Next we want to show the villians for our heros and hero each villain in our api routes.   
```
app/controllers/heros_controller.rb
def index
  @heros = Hero.all
  render json: @heros, include: :villains
end

# GET /heros/1
def show
  render json: @hero, include: :villains
end

app/controllers/villains_controller.rb
# GET /villains
def index
  @villains = Villain.all
  render json: @villains, include: :hero
end

# GET /villains/1
def show
  render json: @villain, include: :hero
end
```
Finally, we have an api.
```
25. $ rails s
```

```
$ npx create-react-app heros_fe
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
```
11. Create dumb Hero component in /components/Hero.js

```
import React from 'react'
import PropTypes from 'prop-types'
First, make a new api with rails, make the database postgresql and flip the api switch so that front end code related to a rails front end wont be included.
```
1.  $ rails new hero_api --database=postgresql --api
2.  $ cd hero_api
```
Create a user named hero_api to act as the user to connect to the database for this app. The database is also called hero_api in this case. Note password used for hero_api user here.
```
3.  $ sudo adduser hero_api 
```
Make hero_api user be a root user:
```
4.  $ sudo usermod -aG sudo hero_api (Make user root)
```
Impersonate the postgres user on your system and create the hero_api database and hero_api database user.
```
5.  $ su - postgres
6.  postgres@computer:~$ createuser hero_api
7. postgres@computer:~$ createdb hero_api
8. Provide the privileges to hero_api user
9. postgres@computer:~$ psql
10. postgres=# alter user hero_api with encrypted password 'peace2020';
11. postgres=# grant all privileges on database hero_api to hero_api;
```
Edit config/database.yml to add credentials for the user, hero_api. Fill in the test and development areas to match the hero_api user above.
```
test:
  adapter: postgresql
  encoding: unicode
  database: hero_api
  pool: 5
  username: hero_api
  password: peace2020

development:
  adapter: postgresql
  encoding: unicode
  database: hero_api
  pool: 5
  username: hero_api
  password: peace2020

```
Exit out of psql with 'exit', then $ exit to stop impersonating postgres. Next, make two models, one for Hero and one for Villain. If all goes well, the db:migrate will create Hero and Villain models/tables.
```
17. $ rails g scaffold Hero name:string 
19. $ rails g scaffold Villain name:string hero:references
20. rake db:migrate
```
Check the models to make sure that a hero has many villains and a villain fights one hero (in our universe).
```
21. hero_api/app/models/hero.rb
class Hero < ApplicationRecord
  has_many :villains
end
```
```
22. hero_api/app/models/villian.rb
class Villain < ApplicationRecord
  belongs_to :hero
end
```
Next, we will create some heroes and villains with the rails console. 
```
23. $ rails c
```
Make the first hero, Batman...
```
    > b = Hero.new
    > b.name = "Batman"
    > b.save
    > b
```
Then make Joker, Batman's first villian
```
    > j = Villain.new
    > j.name = "Joker"
    > j.hero = b
    > j.save
```
Almost done. Next we want to show the villians for our heros and hero each villain in our api routes.   
```
app/controllers/heros_controller.rb
def index
  @heros = Hero.all
  render json: @heros, include: :villains
end

# GET /heros/1
def show
  render json: @hero, include: :villains
end

app/controllers/villains_controller.rb
# GET /villains
def index
  @villains = Villain.all
  render json: @villains, include: :hero
end

# GET /villains/1
def show
  render json: @villain, include: :hero
end
```
Finally, we have an api.
```
25. $ rails s
```
const Hero = (props) => {
  return (
  <div className="hero">{ props.hero.name }</div>
  )
}
Hero.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Hero

11. Repeat process above to create heros actions, then add those reducer actions to heroreducer.js
```
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
  }```

12. Populate Hero component from redux stor
switch to useSelector from mapStateToProps
new Hero component
add constants for heros request
add fetchheros action creator




https://stackoverflow.com/questions/8795097/how-to-git-commit-a-single-file-directory


https://www.youtube.com/watch?v=5gu-hzfhv10

https://devcenter.heroku.com/articles/getting-started-with-rails6

https://hero-api-56790.herokuapp.com/villains

https://hero-api-56790.herokuapp.com/