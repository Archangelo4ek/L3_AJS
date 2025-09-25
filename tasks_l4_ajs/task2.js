function getFilteredUsers() 
{
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      return data.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      }));
    });
}
function getIncompleteTodos() 
{
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => data.filter(todo => !todo.completed));
}
