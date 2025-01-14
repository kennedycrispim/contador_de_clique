import { useState } from 'react'
import './App.css'

function App() {
  const [valor, setValor]  = useState(0)

  const incrementar = () =>{
    setValor(valor + 1);
  }

  const decrementar = () =>{
    if(valor < 1){
     alert("Você chegou a ZERO!");
     setValor = 0;
    }else{
      setValor(valor - 1);
    }
  }

  return (
    <>
      <div className='content'>
        <h1>Contador de cliques</h1>
        <button onClick={incrementar}>+</button>
        <input type='text'value={valor}/>
        <button onClick={decrementar}>-</button>
        <p>Contador de cliques com <span>React</span></p>
      </div>
    </>
  )
}

export default App
