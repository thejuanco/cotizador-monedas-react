import { useState, useEffect } from "react";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  //Uso del state
  const [cantidad, setCantidad] = useState(10000);
  //? El state siempre se modifica en el set, nunca se modifica directamente
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0)

  //? Dividir los useffect en multiples dependencias para controlarlos mejor
  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalPagar)
  }, [cantidad, meses])

  useEffect(() => {
    //Calcular el pago mensual
    setPago(total / meses)
  }, [total])

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
    //Validacion de la cantidad minima
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
          <CustomButton operador="-" fn={handleClickDecremento} />
          <CustomButton operador="+" fn={handleClickIncremento} />
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
        <p className="text-center my-8 text-5xl font-extrabold text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        <h2 className="text-2xl font-extrabold text-gray text-center">
          Elige un <span className="text-indigo-600">Plazo</span> a pagar
        </h2>

        <select
          className="mt-5 p-2 bg-white w-full border border-gray-300 rounded-lg text-center text-xl text-gray-500"
          value={meses}
          onChange={ e => setMeses(e.target.value)}
        >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5 rounded-lg">
          <h2 className="text-2xl font-extrabold text-gray text-center">
            Resumen <span className="text-indigo-600">de Pagos</span>
          </h2>

          <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
          <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pago)} Mensuales</p>
        </div>

      </div>
    </>
  );
}

export default App
