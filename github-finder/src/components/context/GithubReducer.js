export const iniatialState={
users: [],
loading: false,
text: '',
showClear: false
}

const reducer=(state, action)=>{
switch (action.type) {
  case 'SET_USERS':
    return{
      ...state,
        users: action.payload,
        loading: false
    }
    case 'LOADING':
      return{
        loading: true
      }
    case 'CHANGE':
      return{
       ...state,
       text: action.load 
      } 
      
    case 'SUBMIT':
      return{
        ...state,
        text: ''
       
      }  
    case 'CLEAR':
      return{
        ...state,
        users: [],
        showClear: false
      }  
  
    case 'SHOWCLEAR':
      return{
        ...state,
         showClear: true
      }

  default:
   return state
}
}


export default reducer