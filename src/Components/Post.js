import React,{Component} from 'react'

class Post extends Component{
  render(){
    return (
      <section className="timeline">
      <article>
        <h2><i className="icon-user"></i>lorem ipsum</h2>
        <figure>
          <img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
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
              <li>
                <p className="comment-user"><i className="icon-user"></i> nombreUsuario</p>
                <p className="comment-desc"><i className="icon-bubble"></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe suscipit iusto quas excepturi magni, harum nihil, inventore architecto non rerum eveniet dolorem autem est molestiae consequuntur. Esse, tenetur</p>
                <p className="comment-date">Dec 20, 2018</p>
              </li>
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
