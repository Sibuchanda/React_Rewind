import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from "./features/counter/counterSlice";

function App() {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const handleIncrement = ()=>{
     dispatch(increment());
  }
  const handleDecrement = ()=>{
     return dispatch(decrement());
  }
  const handleReset = ()=>{
     return dispatch(reset());
  }
  const handleIncrementByAmount = ()=>{
     dispatch(incrementByAmount(amount));
  }


  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="container max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-center mb-6">Hello Redux/ToolKit(RTK)</h1>

          <div className="space-y-6">
            <h2 className="text-xl font-medium text-center">Count value is : {count}</h2>

            <div className="btn-container flex justify-center gap-4">
              <button
              onClick={handleIncrement}
               className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                +
              </button>
              <button
              onClick={handleDecrement} 
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                -
              </button>
              <button
              onClick={handleReset}
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                Reset
              </button>
            </div>

            <div className="custom-value flex items-center gap-3">
              <input
                type="text"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Enter the value"
                className="flex-1 px-3 py-2 border border-gray-400 rounded outline-none focus:border-black"
              />
              <button
              onClick={handleIncrementByAmount} 
              className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition">
                Inc By Amount
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
