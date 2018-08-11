import initialState from './initialState'

export function post(state=initialState.post, action){
  switch(action.type){
    case 'CREATE_POST_SUCCESS':
      return Object.assign({},state,{
        posts:[
          ...state.posts
        ]})
    case 'LIST_POST_SUCCESS':
      return Object.assign({},state,{
        posts:action.obj
      })
    case 'READ_POST_SUCCESS':
      return null
    case 'REMOVE_POST_SUCCESS':
      return null
    default:
        return state    
  }
}
export default post
