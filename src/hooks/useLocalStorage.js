import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    // hacemos el try catch por si hay algún error al pedir el localStorage, por ejemplo, si hay navegación privada
    try {
      const item = window.localStorage.getItem(key)
      // el json.parse es necesario porque localStorage siempre guarda un string
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setLocalStorage]
}
