//Criação do elemento isquere que ira compor o tabuleiro
import { useState } from 'react';
import './App.css';


function Square({valor, onSquareClick}){
return(
<button className="Square" onClick={onSquareClick}>
{valor}
</button>
)
}



export default function Tabuleiro(){
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  function handleClick (i){
    if (squares[i] || calculaVencedor(squares))
     {return}; 
     // O handle Click continua a executação pois o return não
     // foi executado o squareas[i] era NULL!!
  

    const nextSquares = squares.slice();
    if (xIsNext)
      {nextSquares[i] = "x";}
    else
    {nextSquares[i] = "o";}
    setSquare(nextSquares);
    setxIsNext(!xIsNext)
  }

  return(
    <div>
      <div>
      <Square valor={squares[0]} onSquareClick={()=>{handleClick(0)}} />
      <Square valor={squares[1]} onSquareClick={()=>{handleClick(1)}} />
      <Square valor={squares[2]} onSquareClick={()=>{handleClick(2)}} />
     </div>
     <div>
      <Square valor={squares[3]} onSquareClick={()=>{handleClick(3)}} />
      <Square valor={squares[4]} onSquareClick={()=>{handleClick(4)}} />
      <Square valor={squares[5]} onSquareClick={()=>{handleClick(5)}} />
    </div>
    <div>
      <Square valor={squares[6]} onSquareClick={()=>{handleClick(6)}} />
      <Square valor={squares[7]} onSquareClick={()=>{handleClick(7)}} />
      <Square valor={squares[8]} onSquareClick={()=>{handleClick(8)}} />
    </div>
    </div>
  );
};

 function calculaVencedor(squares) {
  const linhas = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Linhas horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Linhas verticais
    [0, 4, 8], [2, 4, 6]              // Linhas diagonais
  ];

  
  for (let index = 0; index < linhas.length; index++) {
    const [a, b, c] = linhas[index];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]; // Retorna o vencedor ('X' ou 'O')
    }
  }
  return null; // Se não houver vencedor, retorna null
}


