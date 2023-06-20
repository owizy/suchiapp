import "./About.css" 
import img1 from "./about-sushi-title.png"
import img2 from "./about-sushi.png"
export default function About (){
    return(
        <section id="about">
           <div>
            <img src={img2} className="img2"/>
           </div>
           <div className="about">
            <small>About us</small>
            <div className="provide">
            <p>We Provide</p>
            <img src={img1} className="img1"/>
            </div>
            <h1 className="h1">Healthy Food</h1>
            <span>
               <p>
                Food come to us from our relatives,wheather <br/>
                they have wings or roots.This is hoe we <br/>
                consider food,it also has a culture.it has a<br/>
                history that passes from generation to <br/>
                generation
                </p> 
            </span>
           </div>
        </section>
    )
 }