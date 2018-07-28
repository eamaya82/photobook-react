import React,{Component} from 'react'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form className="form">
            <h2>Recuperar clave</h2>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text icon-envelope-o"></span>
                </div>
                <input
                 type="email"
                 name="email"
                 className="form-control"
                 placeholder="email" />
              </div>
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
