import React,{Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {signup, create} from './../services/firebase'

class SignUp extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: '',
      error:'',
      isAuth: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.password===this.state.confirmPassword){
      const user = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email
      }
      signup({email: this.state.email,password: this.state.password})
      .then(()=>{
        create('users',user)
        .then(()=>{
          this.setState({
            name: '',
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
          error:'Ocurrió un error inesperado'
        })
      })
    }else{
      this.setState({
        error:'Claves no coinciden'
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
              htmlFor="name">Nombre</label>
            <input 
              type="text"
              name="name"
              id="name"
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
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">   
          
            <label>
              <input 
                type="checkbox"
                name="terms"
                onChange={this.handleChange}
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
