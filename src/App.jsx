import { useState } from "react";
import Header from "./components/Header";

function App() {
  //Uso del state
  const [cantidad, setCantidad] = useState(10000);

  function handleChange(e){
    console.log(+e.target.value) //+ convierte los string a numeros
  }

  return (
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-lg">
        <Header />

        <input
          type="range"
          className="w-full h-6 bg-gray-200 accent-indigo-500 hover:accent-indigo-600 mt-2"
          //leyendo la seleccion del usuario
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App
