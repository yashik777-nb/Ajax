const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

// In a synchronous Way

// function createPosts(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPosts({ title: "Post Threee", body: "This Post Three" });
// getPosts();

// In Asynchronous callback's way

function createPosts(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPosts({ title: "Post Threee", body: "This Post Three" }, getPosts);
