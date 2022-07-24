import React, { createContext, useCallback, useContext, useState } from 'react'

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
  const [isHide, setIsHide] = useState(true)
  const [variant, setVariant] = useState('')

  const hidePopup = useCallback(() => setIsHide(true), [])
  const showPopup = useCallback(() => setIsHide(false), [])

  return (
    <PopupContext.Provider value={{ isHide, hidePopup, showPopup, variant, setVariant }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)