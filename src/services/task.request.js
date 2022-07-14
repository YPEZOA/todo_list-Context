const BASE_URL = 'http://localhost:8080/api/tasks'

export const getTasks = userId => {
  fetch(`${BASE_URL}/getTasks?userId=${userId}`)
    .then(response => response.json())
    .then(resp => resp.data)
}
