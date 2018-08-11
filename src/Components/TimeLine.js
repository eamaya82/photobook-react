import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {listPost} from './../actions/post'

class Timeline extends Component{
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    this.props.listPost()
  }
  render(){
    return (
      <section className="timeline">
      {
        this.props.posts.map(post=>{
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
const mapStatetoProps = state =>{
  const {post} = state
  return {
    posts:post.posts
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    listPost:()=>dispatch(listPost())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Timeline)
