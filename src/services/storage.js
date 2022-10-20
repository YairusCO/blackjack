export const getStorage = (namespace = '') => {
  const getKey = (key) => (namespace ? `${namespace}_${key}` : key)

  return {
    get(key, defaultValue) {
      const value = localStorage.getItem(getKey(key))
      try{
        const parsedValue = JSON.parse(value)
        return ((parsedValue !== null && parsedValue !== undefined) && parsedValue) || defaultValue
      }
      catch(e){
        return defaultValue
      }
    },

    set(key, value) {
      localStorage.setItem(
        getKey(key),
        typeof value === 'string' ? value : JSON.stringify(value)
      )
    },
    clear() {
      localStorage.clear()
    }
  }
}

export default getStorage()
