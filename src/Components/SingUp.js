import React,{Component} from 'react'

class SignUp extends Component{
  render(){
    return (
      <section>
        <form>
          <h2>Registro</h2>
          <label 
            for="name">Nombre</label>
          <input 
            type="text"
            name="name"
            id="name"
          />
          <label 
            for="lastname">Apellido</label>
          <input 
            type="text"
            name="lastname"
            id="lastname"
          />
          <label 
            for="email">Correo</label>
          <input 
            type="email"
            name="email"
            id="email"
          />
          <label 
            for="password">Clave</label>
          <input 
            type="password"
            name="password"
            id="password"
          />
          <label 
            for="confirmPassword">Confirmar clave
          </label>
          <input 
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          
          <label>
            <input 
              type="checkbox"
              name="terms"
            />
            Acepto términos y condiciones
          </label>
          
          <button>Enviar</button>

        </form>
      </section>
    )
  }

}
export default SignUp
