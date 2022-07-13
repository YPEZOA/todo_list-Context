const BASE_URL = 'http://localhost:8080/api/tasks'

export const getTasks = userId => {
  fetch(`${BASE_URL}/getTasks?userId=${userId}`)
    .then(response => response.json())
    .then(resp => resp.data)
}

export const addTask = (userId, title, notes, start, end) => {
  const data = JSON.parse(localStorage.getItem('userData'))
  fetch(`${BASE_URL}/add-task`, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      notes,
      start,
      end
    }),
    headers: new Headers({
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.json())
    .then(resp => {
      console.log(resp)
    })
}
