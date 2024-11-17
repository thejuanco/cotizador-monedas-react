import Header from "./components/Header";

function App() {

  return (
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-lg">
        <Header />

        <input
          type="range"
          className="w-full h-6 bg-gray-200 accent-indigo-500 hover:accent-indigo-600 mt-2"
        />
      </div>
    </>
  );
}

export default App
