const apiURL = process.env.REACT_APP_APIREST
const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
});
export function create(collection, obj){
    return fetch(`${apiURL}/${collection}`,{
        headers:headers,
        method: 'POST',
        body: JSON.stringify(obj),
        mode: 'cors'
    })
} 
export function remove(collection, id){
    return fetch(`${apiURL}/${collection}/${id}`,{
        headers:headers,
        method: 'DELETE',
        mode: 'cors'
    })
} 
export function list(collection){
    return fetch(`${apiURL}/${collection}`,{
        headers:headers,
        method: 'GET',
        mode: 'cors'
    })
} 
export function read(collection, id){
    return fetch(`${apiURL}/${collection}/${id}`,{
        headers:headers,
        method: 'GET',
        mode: 'cors'
    })
} 
