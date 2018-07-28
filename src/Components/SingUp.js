import React,{Component} from 'react'

class SignUp extends Component{
  render(){
    return (
      <section>
        <form class="form">
          <h2>Registro</h2>
          <div class="form-group">
            <label 
              for="name">Nombre</label>
            <input 
              type="text"
              name="name"
              id="name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label 
              for="lastname">Apellido</label>
            <input 
              type="text"
              name="lastname"
              id="lastname"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label 
              for="email">Correo</label>
            <input 
              type="email"
              name="email"
              id="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label 
              for="password">Clave</label>
            <input 
              type="password"
              name="password"
              id="password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label 
              for="confirmPassword">Confirmar clave
            </label>
            <input 
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>
              <input 
                type="checkbox"
                name="terms"
              />
              Acepto términos y condiciones
            </label>
          </div>
          <div class="form-group">
            <button
            class="btn btn-success btn-block"
            >Registro</button>
          </div>

        </form>
      </section>
    )
  }

}
export default SignUp
