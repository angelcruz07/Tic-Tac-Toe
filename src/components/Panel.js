import React from "react";
import Celda from "./Celda";
import Marcador from "./Marcador";
import Button from "./Button";
import { useState } from "react";

function calculatorWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Panel = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculatorWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculatorWinner(squares);
  let status;
  if (winner) {
    status = `Ganador ${winner}`;
  } else {
    status = `Siguiente jugador ${xIsNext ? "X" : "O"}`;
  }

  function resetMap() {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <Marcador status={status} />
      <div className="container text-center mt-3">
        <div className="row borderInside bg-secondary text-center">
          <Celda value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Celda value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Celda value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Celda value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Celda value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Celda value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Celda value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Celda value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Celda value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="container text-center p-3">
        <Button onClick={resetMap}>Nueva Partida</Button>
      </div>
    </>
  );
};

export default Panel;
