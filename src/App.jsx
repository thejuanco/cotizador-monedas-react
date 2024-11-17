import { useState } from "react";
import Header from "./components/Header";

function App() {
  //Uso del state
  const [cantidad, setCantidad] = useState(10000);
  //? El state siempre se modifica en el set, nunca se modifica directamente

  const min = 0
  const max = 20000
  const step = 100

  function handleChange(e){
    //console.log(+e.target.value) //+ convierte los string a numeros
    //Modifica la cantidad
    setCantidad(+e.target.value);
  }

  function handleClickDecremento(){
    const valor = cantidad - step;
    if (valor < min){
      alert("Cantidad no valida")
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento(){
    const valor = cantidad + step;
    if (valor > max){
      alert("Cantidad no valida")
      return;
    }
    setCantidad(valor);
  }

  return (
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-lg">
        <Header />

        <div className="flex justify-between my-6">
          <button 
            type="button"
            className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-indigo-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
            onClick={handleClickDecremento}
          >
            -
          </button>
          <button 
            type="button"
            className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-indigo-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
            onClick={handleClickIncremento}
          >
            +
          </button>
        </div>

        <input
          type="range"
          className="w-full h-6 bg-gray-200 accent-indigo-500 hover:accent-indigo-600 mt-2"
          //leyendo la seleccion del usuario
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          value={cantidad} //se muestra el valor actual en el input
        />
        <p className="text-center my-8 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
      </div>
    </>
  );
}

export default App
