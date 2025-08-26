//Criação do elemento isquere que ira compor o tabuleiro
import { useState } from 'react';
import './App.css';


function Square({valor, onSquareClick}){
   
return(
<button className="Square" onClick={onSquareClick}>{valor}</button>
)
}



export default function Tabuleiro(){
  return(
    <div>
      <div>
        <Square />
        <Square />
        <Square />
     </div>
     <div>
       <Square />
        <Square />
        <Square />
    </div>
    <div>
        <Square />
        <Square />
        <Square />
    </div>
    </div>
  )
}
