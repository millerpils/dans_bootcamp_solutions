setTimeout(() => {
  console.log('first set timeout done');
  setTimeout(() => {
    console.log('second set timeout done');
  }, 0);
}, 0);

//////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => data.json())
  .then((json) => console.log('Fetch: ', json))
  .catch((e) => console.log(e.message));

//////////////////////////////////////////////////////////////

const myProm2 = new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => data.json())
    .then((json) => resolve(json))
    .catch((e) => reject(e.message));
});

myProm2
  .then((json) => console.log('Resolved: ', json))
  .catch((msg) => console.log('Rejected: ', msg));

//////////////////////////////////////////////////////////////

async function myAsyncFunction() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await data.json();

  console.log('Async: ', json);
}

myAsyncFunction();
