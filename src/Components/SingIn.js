import React,{Component} from 'react'

class SignIn extends Component{
  render(){
    return (
      <section>
        <form>
          <h2>Ingreso</h2>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" />
          <input 
            type="password" 
            name="password" 
            placeholder="password" />
          <button>Enviar</button>
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
