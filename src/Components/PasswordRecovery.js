import React,{Component} from 'react'

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
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
