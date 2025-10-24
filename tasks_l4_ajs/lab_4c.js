async function PostsEx()
{
    try
    {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        const mapData = jsonData.map(js => js.title);
        return mapData.sort((a,b)=>b.length - a.length);
    }
    catch(error)
    {
        console.log("Возникла ошибка " + error);
    }
}
PostsEx().then(data => console.log(data));
async function CommentsEx()
{
    try
    {
        const data = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jsonData = await data.json();
        const mapData = jsonData.map(js => js.name);
        return mapData.sort();
    }
    catch(error)
    {
        console.log("Возникла ошибка " + error);
    }
}

CommentsEx().then(data => console.log(data));

async function UsersEx()
{
    try
    {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        const mapData = jsonData.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        return mapData.sort((a,b)=>b.length - a.length);
    }
    catch(error)
    {
        console.log("Возникла ошибка " + error);
    }
}
UsersEx().then(data => console.log(data));
async function CommentsEx()
{
    try
    {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const jsonData = await data.json();
        const mapData = jsonData.filter(user => user.completed == false);
        return mapData.sort();
    }
    catch(error)
    {
        console.log("Возникла ошибка " + error);
    }
}
CommentsEx().then(data => console.log(data));