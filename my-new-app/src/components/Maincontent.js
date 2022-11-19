import React from "react";
import './Maincontent.css';
import Background from '../images/space.png';
import Clones from '../images/AttackClones.jpg';
import Phantom from '../images/PhantomMenance.jpg';
import Sith from '../images/RevengeSith.jpg';

function Maincontent () {
    return (
        <div className="main-container">
            <div id="background"><img src={Background} alt="stars in a night sky" id="bg-image"/></div>
            <div id="movies">
                    <ul className ="movie-buttons">
                        <li><img src={Phantom} alt="Phantom Menace movie poster"/>
                        <a href = "#"><button type="button">The Phantom Menace</button></a>
                            </li>
                        <li><img src={Clones} alt="Attack of the Clones movie poster"/>
                        <a href = "#">
                            <button type="button">Attack of the Clones</button></a>
                            </li>
                        <li><img src={Sith} alt="Revenge of the Sith movie poster"/>
                        <a href = "#">
                            <button type="button">Revenge of the Sith</button></a>
                            </li>
                    </ul>
                    </div>
        </div>

    )
}

export default Maincontent;