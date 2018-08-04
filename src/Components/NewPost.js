import React,{Component} from 'react'

class NewPost extends Component{
  constructor(){
    super();
    this.hideNewPost = this.hideNewPost.bind(this)
  }
  hideNewPost(){
    this.props.showNewPost(false)
  }
  render(){
    
    return (
      <section className="timeline">      
        
        <h3>Nuevo post</h3>
        <form className="new-post">        
          <div className="row">   
              <div className="col-10 custom-file">
                <input 
                  type="file"
                  name="file"
                  placeholder="Archivo"
                  className="custom-file-input"
                  />
                  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary">Subir</button>
                </div> 
            </div>     
            <div className="row">            
                <div className="col-6"> 
                <figure>
                  <img src="https://dummyimage.com/200x200/000/fff" alt="imagen"/>
                </figure>
                </div>    
                <div className="col-6">
                  <textarea 
                    name="description" 
                    className="form-control" 
                    placeholder="Descripción" 
                    rows="8"></textarea>
                </div>  
            </div>  
            <div className="row">
              <div className="col-5 offset-1">
                <button className="btn btn-block btn-success">Enviar</button>
              </div>
              <div className="col-5">
                <button type="button" onClick={this.hideNewPost} className="btn btn-block btn-danger">Cancelar</button>
              </div>
            </div>  
        </form>
      </section>
    )
  }

}
export default NewPost
