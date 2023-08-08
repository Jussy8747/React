import { createContext } from "react";

const context = createContext()

export const ContextProvider = ({children}) =>{

    const click=(e)=>{
        
    }

    const clear=(e)=>{

    }
return <context.Provider value={{
clear,
click
}}>

    {children}
</context.Provider>
} 

export default context