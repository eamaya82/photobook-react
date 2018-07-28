import React,{Component} from 'react'
class Timeline extends Component{
  render(){
    return (
      <section className="timeline">
      <article>
        <h2><i className="icon-user"></i>lorem ipsum</h2>
        <figure>
          <img src="https://dummyimage.com/400x400/bfbfbf/fff" alt="imagen"/>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2>lorem ipsum</h2>
        <figure>
          <img src="https://dummyimage.com/400x400/bfbfbf/fff" alt="imagen"/>
        </figure>
        <section>
          <p className="like"><i className="icon-heart"></i> 10 Me gusta</p>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit gravida rhoncus, mi porttitor dictum nascetur nullam venenatis sociosqu orci, leo tincidunt aliquet condimentum platea litora torquent facilisi. </p>
          <p className="date">Dec 15, 2018</p>
        </section>
      </article>
      <article>
        <h2>lorem ipsum</h2>
        <figure>
          <img src="https://dummyimage.com/400x400/bfbfbf/fff" alt="imagen"/>
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
