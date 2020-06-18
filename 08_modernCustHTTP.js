const http = new EasyHttp();

// Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Create Post
const createData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

http
  .post("https://jsonplaceholder.typicode.com/posts", createData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Update Post
const updateData = {
  title: "foo",
  body: "bar",
  userId: 5,
};

http
  .put("https://jsonplaceholder.typicode.com/posts/1", updateData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Delete Post
http
  .delete("https://jsonplaceholder.typicode.com/posts/1", updateData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
