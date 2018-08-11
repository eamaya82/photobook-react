import React,{Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {signup} from './../services/firebase'
import {create} from './../services/api'

class SignUp extends Component{
  constructor(){
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: '',
      error:'',
      isAuth: false,
      checked:false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleCheck(){
    this.setState({
      checked: !this.state.checked
    })
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.checked){
        if(this.state.password===this.state.confirmPassword){
          const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password:this.state.password,
            description:"Bio",
            photo_url:"http://google.com"
          }
          signup(user)
          .then(()=>{
            create('users',user)
            .then(()=>{
              this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
                terms: '',
                error:'',
                isAuth:true
              })
              this.props.login(true)
              window.scrollTo(0,0)
            })
            
          })
          .catch(error=>{
            console.log(error)
            this.setState({
              error:'Ocurrió un error inesperado. Por favor verifique sus datos.'
            })
          })
        }else{
          this.setState({
            error:'Claves no coinciden'
          })
        }
      }else{
        this.setState({
          error:'Debe aceptar los términos'
        })
      }    
    window.scrollTo(0, 0)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <section> 
        {
          this.state.isAuth ?
            <Redirect to="/" />
        :  
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Registro</h2>
          {
            this.state.error &&
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          }
          <div className="form-group">   
            <label 
              htmlFor="firstname">Nombre</label>
            <input 
              type="text"
              name="firstname"
              id="firstname"
              required
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">   
            <label 
              htmlFor="lastname">Apellido</label>
            <input 
              type="text"
              name="lastname"
              id="lastname"
              required
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">  
            <label 
              htmlFor="email">Correo</label>
            <input 
              type="email"
              name="email"
              id="email"
              required
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">   
            <label 
              htmlFor="password">Clave</label>
            <input 
              type="password"
              name="password"
              id="password"
              minLength="6"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">   
            <label 
              htmlFor="confirmPassword">Confirmar clave
            </label>
            <input 
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              minLength="6"
              required
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">   
          
            <label>
              <input 
                type="checkbox"
                name="terms"
                checked={this.state.checked}
                onChange={this.handleCheck}
              />
              Acepto términos y condiciones
            </label>
          </div>
          <div className="form-group">            
          <button
              type="submit"
              className="btn btn-success btn-block"
              >Enviar</button>
          </div>

          <p className="row">
            <span className="col">
              <Link to="/">Regresar</Link>
            </span>   
          </p>
        </form>
      }
      </section>
    )
  }

}
export default SignUp
