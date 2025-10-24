const promise_1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => { const resUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }))
    resolve(console.log(resUsers)); })
    .catch(error=>reject(console.log(error)));
});

const promise_2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => data.json())
    .then((users) => {const resUsers = users.filter(user => user.completed == false)
    resolve(console.log(resUsers));})
    .catch(error=>reject(console.log(error)));
});