import { createStore } from "redux";

const initialState = {
  name: null,
  isLogin: false,
  rol: null,
  id:null
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
    case "SET_ROL":{
      return{
        ...state,
        rol: action.payload,
      };
    }
    case "SET_DATA":{
      return{
        ...state,
        data: action.payload,
      };
    }
    case "SET_ID":{
      return{
        ...state,
        id: action.payload,
      };
    }
    default:{
      return state;
    }

  }
}

export const store = createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
