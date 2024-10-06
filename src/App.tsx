import { StringCalculator } from "./component/StringCalculator";

function App() {
  return (
    <div className=" h-screen w-screen bg-slate-50">
      <header className="h-fit w-full bg-slate-100 p-3 grid place-items-center">
        <h5 className="text-3xl font-semibold text-blue-800 font-sans">
          String Calculator
        </h5>
      </header>
      <div className="container h-full mx-auto grid place-items-center">
        <StringCalculator />
      </div>
    </div>
  );
}

export default App;
