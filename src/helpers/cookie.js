export const readCookie = (key) => {
  return document.cookie.split(';')
    .map(rawCookie=> {
      return {key: rawCookie.split['='][0], value: rawCookie.split['='][1]}
    })
    .find(cookie => cookie.key === key)
}

export const writeCookie = (key, value) => {
  document.cookie = `${key}=${value}`
}