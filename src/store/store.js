import { createStore } from "redux";

const initialState = {
  name: null,
  isLogin: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {

    case "SET_IS_LOGIN":{
      return{
        ...state,
        isLogin: action.payload,
      };
    }
    
    case "SET_NAME":{
      return{
        ...state,
        name: action.payload,
      };
    }
    default:{
      return state;
    }

  }
}

export const store = createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
