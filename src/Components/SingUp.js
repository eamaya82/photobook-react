import React,{Component} from 'react'

class SignUp extends Component{
  render(){
    return (
      <section>
        <form className="form">
          <h2>Registro</h2>
          <div className="form-group">
            <label 
              for="name">Nombre</label>
            <input 
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label 
              for="lastname">Apellido</label>
            <input 
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label 
              for="email">Correo</label>
            <input 
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label 
              for="password">Clave</label>
            <input 
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label 
              for="confirmPassword">Confirmar clave
            </label>
            <input 
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>
              <input 
                type="checkbox"
                name="terms"
              />
              Acepto términos y condiciones
            </label>
          </div>
          <div className="form-group">
            <button
            className="btn btn-success btn-block"
            >Registro</button>
          </div>

        </form>
      </section>
    )
  }

}
export default SignUp
