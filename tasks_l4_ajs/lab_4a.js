fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => data.json())
    .then((json) => json.map(js => js.title))
    .then((parts) => console.log(parts.sort((a,b)=>b.length - a.length)));
    
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((data) => data.json())
    .then((json) => json.map(js => js.name))
    .then((parts) => console.log(parts.sort()));