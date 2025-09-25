function getSortedPostsByTitleLength(callback) 
{
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => 
    {
      const sorted = data.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    });
}
function getSortedCommentsByName(callback) 
{
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => 
    {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      callback(sorted);
    });
}
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
async function getSortedPostsByTitleLengthAsync() 
{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.sort((a, b) => b.title.length - a.title.length);
}
async function getSortedCommentsByNameAsync() 
{
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data.sort((a, b) => a.name.localeCompare(b.name));
}
async function getFilteredUsersAsync() 
{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
  }));
}
async function getIncompleteTodosAsync() 
{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data.filter(todo => !todo.completed);
}
getSortedPostsByTitleLength(console.log);
getSortedCommentsByName(console.log);

getFilteredUsers().then(console.log);
getIncompleteTodos().then(console.log);

(async () => {
  console.log(await getSortedPostsByTitleLengthAsync());
  console.log(await getSortedCommentsByNameAsync());
  console.log(await getFilteredUsersAsync());
  console.log(await getIncompleteTodosAsync());
})();
