import React, {createContext , useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [musicFooter , musicFooterSet] = useState(false)

    return (
        <ThemeContext.Provider value={[musicFooter , musicFooterSet]}>
            {props.children}
        </ThemeContext.Provider>
    )
}