import { createContext } from "react";


export const context = createContext();

const ContextProvider = (props)=>{


    const contextValue = {

    }

    return (
        <context.Provider value={contextValue}>
            { props.children}
        </context.Provider>
    )
}

export default ContextProvider;
