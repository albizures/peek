

const SET_USER = 'SET_USER';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {user: action.user});
    default:
      return state;
  }
}

export const actions = {};

actions.setUser = user => ({type: SET_USER, user});
