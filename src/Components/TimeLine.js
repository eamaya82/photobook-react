import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {list} from './../services/firebase'

class Timeline extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    list('posts')
    .on('value',snapshot=>{
      let tmp=[]
      let posts=snapshot.val()
      for(let post in posts){
        tmp.push({
          id:post,
          user:posts[post].user,
          email:posts[post].email,
          url:posts[post].url,
          desc:posts[post].desc,
          date:posts[post].date
        })
      }
      this.setState({
        posts: tmp
      })
    })
  }
  render(){
    return (
      <section className="timeline">
      {
        this.state.posts.map(post=>{
          return(
            <article key={post.id}>
              <h2><Link to={"/profile/"+post.email}><i className="icon-user"></i>{post.user}</Link></h2>
              <figure>
                <Link to={"/post/"+post.id}><img src={post.url} width="400" alt="imagen"/></Link>
              </figure>
              <section>
                <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
                <p className="desc">{post.desc} </p>
                <p className="date">{post.date}</p>
              </section>
            </article>
          )
        })
      }
      </section>
    )
  }

}
export default Timeline
