import { useContext,createContext } from "react";

export const ContextVariable= createContext({
    theme:"dark",
    DarkMode:()=>{

    },
    WhiteMode:()=>{

    }
})


export  const ContextProvider=ContextVariable.Provider
export default   function useContexVari(){
    return useContext(ContextVariable)
} 