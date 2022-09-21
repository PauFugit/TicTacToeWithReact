import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";



const Home = () =>{
  

    return(
        <div className="front container-fluid">
            <h1 className="title-front">Tic Tac Toe</h1>
            <h2 className="subtitle-front">Pick a weapon</h2>

            <div className="insert-name">
                <input placeholder="Player 1 username"></input>
                <input placeholder="Player 2 username"></input>
            </div>

            <div className="insert-weapon">
            
                <button className="weapon"><Link to={`/tictactoe`}>X</Link></button>
                <button className="weapon"><Link to={`/tictactoe`}>O</Link></button>
                
            </div>
            
        </div>
    )
}

export default Home;