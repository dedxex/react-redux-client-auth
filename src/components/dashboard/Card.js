/**
 * Created by taranjeet on 08-01-2017.
 */
import React,{ Component } from 'react';
class Card extends Component{
    render(){
        return (
            <div>
                <div className="card" style="width: 20rem;">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-block">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                </div>
            </div>
        );
    }
}
export default Card;