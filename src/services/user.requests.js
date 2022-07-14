const BASE_URL = 'http://localhost:8080/api/user'

export const getTasks = userId => {
  fetch(`${BASE_URL}/getTasks?userId=${userId}`)
}
