import {upload, create, read, list, remove} from './../services/firebase'

/*action creators */
export function createPost(obj){

  return dispatch => {
      upload(obj.file)
      .then(snapshot=>{
        snapshot.ref.getDownloadURL()
        .then(downloadURL=>{
          obj.url=downloadURL
            create('posts',obj)
            .then(()=>{
                dispatch(createPostSuccess(obj))
              })
          })
        })  
  }  
}
export function listPost(){
  return dispatch => {
    list('posts')
    .on('value',snapshot=>{
      let obj=[]
      let posts=snapshot.val()
      for(let post in posts){
        obj.push({
          id:post,
          user:posts[post].user,
          email:posts[post].email,
          url:posts[post].url,
          desc:posts[post].desc,
          date:posts[post].date
        })
      }
      dispatch(listPostSuccess(obj))
    })
  }
}
export function readPost(id){
  read('posts',id)
  .on('value',snapshot=>{
    readPostSuccess(snapshot.val())
  })
}
export function removePost(id){
  delete('posts',id)
  .then(()=>{
    removePostSuccess(id)
  })
}
/*actions */
export function createPostSuccess(obj){
  return {
    type:'CREATE_POST_SUCCESS',
    obj:obj
  }
}
export function listPostSuccess(obj){
  return {
    type:'LIST_POST_SUCCESS',
    obj:obj
  }
}
export function readPostSuccess(obj){
  return {
    type:'READ_POST_SUCCESS',
    obj:obj
  }
}
export function removePostSuccess(id){
  return {
    type:'REMOVE_POST_SUCCESS',
    id:id
  }
}
