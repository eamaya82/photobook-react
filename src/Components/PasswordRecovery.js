import React,{Component} from 'react'

class PasswordRecovery extends Component{
  render(){
    return (
      <section>
          <form>
            <h2>Recuperar clave</h2>
            <div class="form-group">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="email" />
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                >Enviar</button>
            </div>
          </form>

      </section>
    )
  }

}
export default PasswordRecovery
