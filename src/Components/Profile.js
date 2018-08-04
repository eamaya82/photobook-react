import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component{
  render(){
    return (
      <section className="profile">
        <h2><i className="icon-user"></i> nombreUsuario</h2>
        <ul>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
          <li>
            <article>
              <figure>
                <Link to="post/5"><img src="https://dummyimage.com/120x120/000/fff" alt="imagen"/></Link>
              </figure>
            </article>
          </li>
        </ul>
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
      </section>
    )
  }

}
export default Profile
