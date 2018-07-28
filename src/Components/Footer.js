import React,{Component} from 'react'

class Footer extends Component{
  render(){
    return (
      <footer>
        <div className="row">
          <div className="col">
            <ul className="social">
              <li><a href="#"><i className="icon-facebook2"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h2>Más enlaces</h2>
            <ul className="links">
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Conoce más...</h2>
            <ul className="links">
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
              <li><a href="#">lorem ipsum dior</a></li>
           </ul>
          </div>  
          <div className="col-6">
            <h2>Contáctenos</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125335.33318368332!2d-74.88805811168668!3d10.983803942736984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C+Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1532802941629"></iframe>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid ipsa totam esse asperiores consequuntur incidunt unde sunt a? Facere a voluptas debitis aperiam vero amet reprehenderit ducimus nostrum mollitia!</p>
          </div>
        </div>
      </footer>
    )
  }

}
export default Footer
