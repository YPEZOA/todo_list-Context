const BASE_URL = 'http://localhost:8080/api/user'
import useFetch from '../hooks/useFetch'

export const loginUser = (user, password) => {
  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      password
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(resp => {
      if (resp.status === 200) {
        const userData = {
          ...resp.user,
          token: resp.token
        }
        // localStorage.setItem('userData', JSON.stringify(userData))
        const { data } = useFetch(`${BASE_URL}/getUser?id=${resp.user._id}`)
        console.log(data)

        return true
      }
      return false
    })
}

export const getTasks = userId => {
  fetch(`${BASE_URL}/getTasks?userId=${userId}`)
}
