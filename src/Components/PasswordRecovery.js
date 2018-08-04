import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form className="form">
            <h2>Recuperar clave</h2>
          <div className="form-group">  
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email" />
          </div>
          <div className="form-group">  
          <button
              className="btn btn-success btn-block"
              >Enviar</button>
          </div>
          <p className="row">
            <span className="col">
              <Link to="/">Regresar</Link>
            </span>   
          </p>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
