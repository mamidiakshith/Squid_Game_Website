import { createContext,useState } from "react";
export const counterobj=createContext();


function CounterContext({children}) {
    const [count, setCount] = useState(456);
  return (
    <div>
        <counterobj.Provider value={{count,setCount}}>
        {children}
        </counterobj.Provider>
    </div>
  )
}

export default CounterContext