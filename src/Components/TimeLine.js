import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Timeline extends Component{
  render(){
    return (
      <section className="timeline">
      <article>
        <h2><Link to="/profile"><i className="icon-user"></i></Link><Link to="/post/5">lorem ipsum</Link></h2>
        <figure>
          <Link to="/post/5"><img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/></Link>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2><Link to="/profile"><i className="icon-user"></i></Link><Link to="/post/5">lorem ipsum</Link></h2>
        <figure>
          <Link to="/post/5"><img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/></Link>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2><Link to="/profile"><i className="icon-user"></i></Link><Link to="/post/5">lorem ipsum</Link></h2>
        <figure>
          <Link to="/post/5"><img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/></Link>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2><Link to="/profile"><i className="icon-user"></i></Link><Link to="/post/5">lorem ipsum</Link></h2>
        <figure>
          <Link to="/post/5"><img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/></Link>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2><Link to="/profile"><i className="icon-user"></i></Link><Link to="/post/5">lorem ipsum</Link></h2>
        <figure>
          <Link to="/post/5"><img src="https://dummyimage.com/400x400/000/fff" alt="imagen"/></Link>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      </section>
    )
  }

}
export default Timeline
