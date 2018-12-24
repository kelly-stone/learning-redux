import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from "../constants";

const initialState = {
  isFetching: false,
  error: null,
  user: {}
}

const user = (state = initialState, action= {} ) => {
  //https://cn.redux.js.org/docs/advanced/AsyncActions.html(3种情况)
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        error: null,
        user: action.user

      }
    case FETCH_USER_REQUEST:
    return {
      isFetching:true,
      error:null,
      user:{}
    }
    case FETCH_USER_FAILURE:
    return {
      isFetching:false,
      error: action.erre,
      user:{}
    }
    default:
      return state;
  }
};

export default user;
