// Before every route, make sure to check whether or not it’s authenticated
// If it’s authenticated, resume the path
// Otherwise, redirect to the login page

export default defineEventHandler(async event => {
  const auth = getCookie(event, 'pokemon-auth')
  const url = getRequestURL(event)

  if (auth || url.pathname === '/login') {
    return
  } else {
    return sendRedirect(event, '/login', 302)
  }
})