import { useState } from "react";
import './styles.css';

export default function App() {
  const [input, setInput] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <div className="historyArea"></div>
      <div className="resultArea">{firstNumber} {operation}
        {secondNumber}
        <div className="result">

          {input}{result}
        </div>
      </div>

      <div className="numbersArea">
        <button className="parentheses">( )</button>
        <button className="changePostoNeg">+/-</button>
        <button className="percent">%</button>
        <button className="dot">.</button>
        <button
          className="equal"
          onClick={() => {

            setSecondNumber(input);
            if (operation === "+") {
              setResult(firstNumber + Number(input));
            }
            else if (operation === "x") {
              setResult(firstNumber * Number(input));
            } else if (operation === "-") {
              setResult(firstNumber - Number(input));}
             else {
              setResult(firstNumber / Number(input));
             
            }
            setInput("");
          }
        }
        >
          =
        </button>

        <button className="divide" onClick={() => {
          setOperation("/");
          setFirstNumber(Number(input));
          setInput("");
        }}>/</button>
        <button className="multiply" onClick={() => {
          setOperation("x");
          setFirstNumber(Number(input));
          setInput("");
        }}>x</button>
        <button className="subtraction" onClick={() => {
          setOperation("-");
          setFirstNumber(Number(input));
          setInput("");
        }}>-</button>
        <button
          className="sum"
          onClick={() => {
            setOperation("+");
            setFirstNumber(Number(input));
            setInput("");
          }}
        >
          +
        </button>
        <button className="allClear"

          onClick={() => {
            setOperation("");
            setFirstNumber("");
            setInput("");
            setSecondNumber("");
            setResult("");
          }}
        >AC</button>

        <button className="number9" onClick={() => setInput("" + input + 9)}>
          9
        </button>
        <button className="number8" onClick={() => setInput("" + input + 8)}>
          8
        </button>
        <button className="number7" onClick={() => setInput("" + input + 7)}>
          7
        </button>
        <button className="number6" onClick={() => setInput("" + input + 6)}>
          6
        </button>
        <button className="number5" onClick={() => setInput("" + input + 5)}>
          5
        </button>
        <button className="number4" onClick={() => setInput("" + input + 4)}>
          4
        </button>
        <button className="number3" onClick={() => setInput("" + input + 3)}>
          3
        </button>
        <button className="number2" onClick={() => setInput("" + input + 2)}>
          2
        </button>
        <button className="number1" onClick={() => setInput("" + input + 1)}>
          1
        </button>
        <button className="number0" onClick={() => setInput("" + input + 0)}>
          0
        </button>
      </div>
    </div>
  );
}
