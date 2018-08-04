import React,{Component} from 'react'
import {upload} from './../services/firebase'
class NewPost extends Component{
  constructor(){
    super();
    this.state = {
      file:'',
      imagen:'',
      desc:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideNewPost = this.hideNewPost.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    upload(this.state.file)
    .then(()=>{
      this.setState({
        imagen:''
      })
    })
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
                        name="description" 
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
export default NewPost
