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
