import React,{Component} from 'react'

class Post extends Component{
  render(){
    return (
      <article>
          <h2>lorem ipsum</h2>
          <figure>
            <img src="https://dummyimage.com/400x400/bfbfbf/fff" alt="imagen"/>
          </figure>
          <section>
            <p>10 Me gusta</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
            <p>Dec 15, 2018</p>
          </section>
          <section>
            <form>
              <input 
                type="text"
                name="comment"
                placeholder="Comentario"/>
              <button>Enviar</button>
            </form>
          </section>
            <ul>
              <li>
                <p>nombreUsuario</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe suscipit iusto quas excepturi magni, harum nihil, inventore architecto non rerum eveniet dolorem autem est molestiae consequuntur. Esse, tenetur</p>
                <p>Dec 20, 2018</p>
              </li>
              <li>
                <p>nombreUsuario</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe suscipit iusto quas excepturi magni, harum nihil, inventore architecto non rerum eveniet dolorem autem est molestiae consequuntur. Esse, tenetur</p>
                <p>Dec 20, 2018</p>
              </li>
              <li>
                <p>nombreUsuario</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe suscipit iusto quas excepturi magni, harum nihil, inventore architecto non rerum eveniet dolorem autem est molestiae consequuntur. Esse, tenetur</p>
                <p>Dec 20, 2018</p>
              </li>
            </ul>
          <section>
            
          </section>

        </article>
    )
  }

}
export default Post
