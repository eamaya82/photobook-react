import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form className="form">
          <h2>Ingreso</h2>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="input-group-text" id="inputGroupPrepend2">@</i>
              </div>
              <input 
                type="email" 
                name="email" 
                className="form-control"
                placeholder="Email" />
            </div>
          </div>
          <div className="form-group"> 
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="input-group-text" id="inputGroupPrepend2">@</i>
              </div>   
              <input 
                type="password" 
                name="password" 
                className="form-control"
                placeholder="password" />
            </div>  
          </div>  
          <div className="form-group">    
            <button
              className="btn btn-success btn-block"
              >Ingresar</button>
          </div>
          <p className="row">
            <span className="col">
              <Link to="signUp">Registro</Link>
            </span>  
            <span className="col">
              <Link to="/passwordRecovery">Olvido de clave</Link>
            </span>  
          </p>
     </form>
      </section>
    )
  }

}
export default SignIn
