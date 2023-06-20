import"./Popular.css"
import page from "./recently-salmon-sushi.png"
export default function Recent(){
    return(
        <section className="rods" id="recent">
            <div>
                <img src={page}/>
            </div>
            <div className="food">
            <p>Recently Added</p>
            <h1>Sushi Samurai <br/>Salmon Cheese</h1>
            <small>
              Take a look at what's new.And do not <br/>
              deprived yourself of a good meal,enjoy and <br/>
              be happy
            </small>
            <button>Order Now</button>
           </div>
        </section>
    )
}