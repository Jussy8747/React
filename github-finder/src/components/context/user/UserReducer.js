


const reducer  = (state, action)=>{
switch (action.type) {
  case 'SET_USER':
    return{
      ...state,
      user: action.payload,
      loading: false
    }
    case 'LOADING':
      return{
        ...state,
        loading: true
      }

    case 'REPOS':
      return{
        ...state,
        repos: action.payload,
        loading: false
      }
  default:
    return state
}
}

export default reducer