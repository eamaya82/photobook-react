import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form>
          <h2>Ingreso</h2>
          <div class="form-group">
            <input 
              type="email" 
              name="email" 
              class="form-control"
              placeholder="Email" />
          </div>
          <div class="form-group">    
            <input 
              type="password" 
              name="password" 
              class="form-control"
              placeholder="password" />
          </div>
          <div class="form-group">
            <button
              class="btn btn-primary"
              >Enviar</button>
          </div>
          <p>
            <a href="#">Registro</a> 
            |
            <a href="#">Olvido de clave</a>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
