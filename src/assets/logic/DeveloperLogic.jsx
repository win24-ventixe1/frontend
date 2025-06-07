import { createContext, useContext, useEffect, useState } from 'react'

const DeveloperContext = createContext()

export const DeveloperProvider = ({ children }) => {
  const [customEvents, setCustomEvents] = useState([])

  // 🔁 Ladda från localStorage när appen startar
  useEffect(() => {
    const stored = localStorage.getItem('customEvents')
    if (stored) {
      setCustomEvents(JSON.parse(stored))
    }
  }, [])

  // 💾 Spara till localStorage när customEvents ändras
  useEffect(() => {
    localStorage.setItem('customEvents', JSON.stringify(customEvents))
  }, [customEvents])

  const addEvent = (newEvent) => {
    setCustomEvents(prev => [...prev, newEvent])
  }

  return (
    <DeveloperContext.Provider value={{ customEvents, addEvent }}>
      {children}
    </DeveloperContext.Provider>
  )
}

export const useDeveloper = () => useContext(DeveloperContext)
