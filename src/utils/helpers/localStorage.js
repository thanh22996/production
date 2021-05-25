export function clearToken(key) {
  localStorage.removeItem(key)
}

export function getToken(key) {
  try {
    const idToken = localStorage.getItem(key)
    return idToken
  } catch (err) {
    clearToken()
    return undefined
  }
}

export function saveToken(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch (err) {
    clearToken()
  }
}

export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage.setItem(key, serializedState)
  } catch {
    // ignore write errors
  }
}
