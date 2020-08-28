import cookie from "js-cookie"

// setting cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 7,
    })
  }
}

// removing cookie
export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key)
  }
}

// get cookie from storage
export const getCookie = (key, req) => {
  return process.browser
    ? getCookieClientSide(key)
    : getCookieServerSide(key, req)
}

export const getCookieClientSide = key => {
  return cookie.get(key)
}

export const getCookieServerSide = (key, req) => {
  if (!req.headers.cookie) {
    return undefined
  }
  let token = req.headers.cookie
    .split(";")
    .find(cookie => cookie.trim().startsWith(`${key}=`))
  if (!token) return undefined
  let tokenValue = token.split("=")[1]
  return tokenValue
}

// save to local storage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

// clear local storage
export const clearLocalStorage = key => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}

// user authentication
export const authenticateUser = (response, next) => {
  setCookie("token", response.data.token)
  setLocalStorage("user", response.data.user)
  next()
}

// get user data from local storage
export const isUserAuthenticated = () => {
  if (process.browser) {
    const cookiePresent = getCookie("token")
    if (cookiePresent) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"))
      } else {
        return false
      }
    }
  }
}

// log out user
export const logOutUser = () => {
  if (process.browser) {
    clearLocalStorage("user")
    removeCookie("token")
  }
}
