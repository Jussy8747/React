export const initialState={
  user: {},
  users: [],
  loading: false,
  alert: null,
  text: ""
}

const githubReducer = (state, action) =>{
switch (action.type) {
  case 'SET_LOADING':
    return{
      loading: true
    }
  case 'SET_TEXT':
    return{
      ...state,
      text: action.payload
    }
    case 'CLEAR_TEXT':
      return{
        text: ''
      }
   
  case 'FETCH_USER':
    return{
      ...state,
      user: action.payload,
      loading: false
    }  
  case 'CLEAR_USERS':
    return{
      ...state,
      loading: false,
      users: []
    } 
  case 'SET_ALERT':
    return{
      ...state,
      alert: action.payload
    }
  case 'STOP_ALERT':
    return{
      ...state,
      alert: null
    }
 
  case 'SEARCH_USERS':
    return{
      ...state,
      users: action.payload,
      loading: false
    }
  default:
   return state;
}
}


export default githubReducer