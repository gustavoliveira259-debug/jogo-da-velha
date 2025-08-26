//Criação do elemento isquere que ira compor o tabuleiro
import { useState } from 'react';
import './App.css';


function Square(){
  const [valor, setValor] = useState(null);
   function handleClick(){
    setValor('X');
   }
return(
<button className="Square" onClick={handleClick}>{valor}</button>
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
