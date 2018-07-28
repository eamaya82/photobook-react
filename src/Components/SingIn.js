import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form className="form">
          <h2>Ingreso</h2>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              className="form-control"
              placeholder="Email" />
          </div>
          <div className="form-group">    
            <input 
              type="password" 
              name="password" 
              className="form-control"
              placeholder="password" />
          </div>
          <div className="form-group">
            <button
              className="btn btn-success btn-block"
              >Log In</button>
          </div>
          <p className="row">
            <span className="col">
              <a href="#">Registro</a> 
            </span>
            <span className="col">
              <a href="#">Olvido de clave</a>
            </span>
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
