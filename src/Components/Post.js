import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {read} from './../services/firebase'

class Post extends Component{
  constructor(){
    super();
    this.state = {
      post:{}
    }
  }
  componentDidMount(){
    window.scrollTo(0,0)
    const postId = this.props.match.params.id
    read('posts',postId)
    .on('value',snapshot=>{
      console.log(snapshot.val())
      this.setState({
        post:snapshot.val()
      })
    })
  }
  render(){
    return (
      <section className="timeline">
      <article>
        <h2><Link to={"/profile/"+this.state.post.email}><i className="icon-user"></i>{this.state.post.user}</Link></h2>       
        <figure>
          <img src={this.state.post.url} width="400" alt="imagen"/>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">{this.state.post.desc}</p>
          <p className="date">{this.state.post.date}</p>
        </section>
          <section>
            <form className="form-row">
              <div className="col-10">
                <input 
                  type="text"
                  name="comment"
                  placeholder="Comentario"
                  className="form-control"
                  />
              </div>
              <div className="col-2">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </section>
            <ul>
              <li>
                <p className="comment-user"><i className="icon-user"></i> nombreUsuario</p>
                <p className="comment-desc"><i className="icon-bubble"></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe suscipit iusto quas excepturi magni, harum nihil, inventore architecto non rerum eveniet dolorem autem est molestiae consequuntur. Esse, tenetur</p>
                <p className="comment-date">Dec 20, 2018</p>
              </li>
            </ul>
          <section>
            
          </section>

        </article>
        </section>
    )
  }

}
export default Post
