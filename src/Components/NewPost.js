import React,{Component} from 'react'
import {connect} from 'react-redux'
import {userInfo} from './../services/firebase'
import {createPost} from './../actions/post'

class NewPost extends Component{
  constructor(){
    super();
    this.state = {
      file:'',
      imagen:'',
      desc:'',
      user:'',
      email:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideNewPost = this.hideNewPost.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }
  componentDidMount(){
    userInfo
    .then(user=>{
      this.setState({
        user: user.email.split("@")[0],
        email: user.email
      })
    })
  }
  handleSubmit(e){
    e.preventDefault();
    let post = {
      file:this.state.file,
      url:'',
      user:this.state.user,
      email:this.state.email,
      desc:this.state.desc,
      date: new Date().toLocaleDateString("en-US",{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    }
    this.props.createPost(post)
    this.hideNewPost()
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleFileChange(e){
        e.persist()
        let reader = new FileReader()
        reader.onloadend = () => {
          this.setState({
            file: e.target.files[0],
            imagen: reader.result
          })
        }
        reader.readAsDataURL(e.target.files[0])

    
  }
  hideNewPost(){
    this.props.showNewPost(false)
  }
  render(){
    
    return (
      <section className="timeline">      
        
        <h3>Nuevo post</h3>
        <form className="new-post" onSubmit={this.handleSubmit}>        
          <div className="row">   
              <div className="col-12 custom-file">
                <input 
                  type="file"
                  name="file"
                  placeholder="Archivo"
                  className="custom-file-input"
                  accept="image/png, image/jpeg"
                  onChange={this.handleFileChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
            </div> 
            {
              !!this.state.imagen &&    
                <div className="row">            
                    <div className="col-6"> 
                    <figure>
                      <img src={this.state.imagen} width="200" alt="imagen"/>
                    </figure>
                    </div>    
                    <div className="col-6">
                      <textarea 
                        name="desc" 
                        className="form-control" 
                        placeholder="Descripción" 
                        onChange={this.handleChange}
                        rows="8"
                        ></textarea>
                    </div>  
                </div>  
            }
            <div className="row">
              <div className="col-5 offset-1">
                <button className="btn btn-block btn-success">Enviar</button>
              </div>
              <div className="col-5">
                <button type="submit" onClick={this.hideNewPost} className="btn btn-block btn-danger">Cancelar</button>
              </div>
            </div>  
        </form>
      </section>
    )
  }

}

const mapDispatchToProps = dispatch =>{
  return{
    createPost:(obj)=>dispatch(createPost(obj))
  }
}

export default connect(null, mapDispatchToProps)(NewPost)
