const BASE_URL = 'http://localhost:8080/api/user'

export const getTasks = userId => {
  fetch(`${BASE_URL}/getTasks?userId=${userId}`)
}

export const loginAfterRegister = (user, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      user,
      password
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }
  fetch(`${BASE_URL}/auth/login`, options)
    .then(response => response.json())
    .then(resp => {
      if (resp.status === 200) {
        const data = {
          ...resp.user,
          token: resp.token
        }
        localStorage.setItem('user', JSON.stringify(data))
      }
    })
}
