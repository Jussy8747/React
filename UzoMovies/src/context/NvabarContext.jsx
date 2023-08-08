import { createContext, useState } from "react";

const navbarContext = createContext()

export const NavbarProvider = ({children})=>{
    const [text, setText] = useState('')
    const [search, setSearch] = useState(true)
    const [searchBox, setSearchBox] = useState(false)
    const [active, setActive] = useState(true)

    const handleClick =(e)=>{
        setSearch(false)
        setSearchBox(true)
    }

    const handleActive =() =>{
        setActive(!active)
        setSearchBox(false)
    }

    const clicked =(e)=>{
       
        setSearch(true)
        setSearchBox(false)
    }

    const handleTwoFunc = () =>{
        handleActive()
        handleClick()
        
    }
return <navbarContext.Provider value={{
    text,
    search,
    searchBox,
    active,
    handleActive,
    clicked,
    handleClick,
    handleTwoFunc
}}>
    {children}
</navbarContext.Provider>
}

export default navbarContext