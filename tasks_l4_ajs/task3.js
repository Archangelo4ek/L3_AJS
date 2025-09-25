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
