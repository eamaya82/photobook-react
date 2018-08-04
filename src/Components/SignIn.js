import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {login} from './../services/firebase'

class SignIn extends Component{

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      error: false
    }
    login(user)
    .then(()=>{
      this.setState({
        error:false
      })
      this.props.login(true)
    })
    .catch(error=>{
      this.setState({
        error:true
      })
    })
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <section>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Ingreso</h2>
          {
            this.state.error &&
            <div className="alert alert-danger" role="alert">
              Ocurrió un error de autenticación
            </div>
          }
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="input-group-text" id="inputGroupPrepend2">@</i>
              </div>
              <input 
                type="email" 
                name="email" 
                className="form-control"
                placeholder="Email"
                onChange={this.handleChange}
                />
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
                placeholder="password"
                onChange={this.handleChange}
                 />
            </div>  
          </div>  
          <div className="form-group">    
            <button
              type="submit"
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
