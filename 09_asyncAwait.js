async function myFunc() {
  //   return "Hello";

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });

  const err = true;
  if (!err) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error("Something is Wring"));
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// fetch and async await
async function getUsers() {
  // Await response of the fetch call
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // Only proceed once it is resolved
  data = await res.json();

  // only proceed once the second promise is resolved
  return data;
}

getUsers()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
