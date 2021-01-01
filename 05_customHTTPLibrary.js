const http = new EasyHttp();
const createData = {
  title: "foo",
  body: "bar",
  userId: 1,
};

const updateDate = {
  title: "foo",
  body: "bar",
  userId: 1,
};

// Get Posts
// http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   function (error, response) {
//     if (error) console.log(error);
//     else console.log(response);
//   }
// );

// // Get Single Post
// http.get(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   function (error, response) {
//     if (error) console.log(error);
//     else console.log(response);
//   }
// );

// // Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", createData, function (
//   error,
//   response
// ) {
//   if (error) console.log(error);
//   else console.log(response);
// });

// // Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/1", updateDate, function (
//   error,
//   response
// ) {
//   if (error) console.log(error);
//   else console.log(response);
// });

// Delete Post
// http.delete(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   function (error, response) {
//     if (error) console.log(error);
//     else console.log(response);
//   }
// );

// Get Posts.
http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
