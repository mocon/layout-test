import { useState, createContext, useContext } from 'react'

export const MenuContext = createContext(null)

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
