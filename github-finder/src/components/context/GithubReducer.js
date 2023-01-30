 export  const iniatialState={
users: [],
loading: false,
text: '',
showClear: false,
user: [],
repos: []
}

const reducer=(state, action)=>{
switch (action.type) {
  case 'SET_USERS':
    return{
      ...state,
        users: action.payload,
        loading: false
    }
     case 'REPOS':
      return{
        ...state,
        repos: action.payload,
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
        users: action.payload,
        showClear: false
      }  
  
    case 'SHOWCLEAR':
      return{
        ...state,
         showClear: true
      }
    case 'SET_USER':
      return{
        ...state,
        user: action.payload,
        loading: false
      }
  default:
   return state
}
}


export default reducer