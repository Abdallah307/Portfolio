import React from 'react'
import './Travel.css'


const Travel = (props) => {
    return(
        <div id="getting-around">
            <h3 className="travel-txt">Ways of Traviling</h3>
            
            <div className="travel-bio"> 
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                </p>
            </div>

            <hr/>

            <ul className="grid-travel">
                <li>
                    <i className="fas fa-plane"></i>
                    <h4>Airplane</h4>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    </p>
                </li>
                <li>
                    <i className="fas fa-ship"></i>
                    <h4>Cruise Ships</h4>
                    <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    </p>
                </li>
                <li>
                    <i className="fas fa-taxi"></i>
                    <h4>Taxies</h4>
                    <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    </p>
                </li>
            </ul>
           
        </div>
    )
}

export default Travel;