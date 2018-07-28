import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form class="form">
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
              class="btn btn-success btn-block"
              >Log In</button>
          </div>
          <p class="row">
            <span class="col">
              <a href="#">Registro</a> 
            </span>
            <span class="col">
              <a href="#">Olvido de clave</a>
            </span>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
