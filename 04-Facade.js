// REVIEW with Facade Design Pattern :
function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts/", { userId });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

// REVIEW our facade pattern with FETCH APi
// function getFetch(url, params = {}) {
//   const queryStrings = Object.entries(params)
//     .map((param) => `${param[0]}=${param[1]}`)
//     .join("&");

//   return fetch(`${url}?${queryStrings}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// REVIEW our facade pattern with AXIOS APi
function getFetch(url, params = {}) {
  return axios({
    url: url,
    method: "GET",
    params: params,
  }).then((res) => res.data);
}

/* -------------------------------------------------------------------------- */

// NOTE without Design Pattern :
// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// function getUserPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// getUsers().then((users) => {
//   users.forEach((user) => {
//     getUserPosts(user.id).then((posts) => {
//       console.log(user.name);
//       console.log(posts.length);
//     });
//   });
// });
