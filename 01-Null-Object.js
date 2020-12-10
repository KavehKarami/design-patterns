// REVIEW with out Design Pattern :
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Geust";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Kevin"), new User(2, "Bob")];

function getUser(id) {
  const user = users.find((user) => user.id === id);

  if (user == null) {
    return new NullUser();
  }

  return user;
}

function printUser(id) {
  const user = getUser(id);

  console.log("Hi " + user.name);

  if (user.hasAccess()) {
    console.log("you have access");
  } else {
    console.log("you are not allowed here");
  }
}

/* -------------------------------------------------------------------------- */

// NOTE with out Design Pattern :
// class User {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }

//   hasAccess() {
//     return this.name === "Bob";
//   }
// }

// const users = [new User(1, "Kevin"), new User(2, "Bob")];

// function getUser(id) {
//   return users.find((user) => user.id === id);
// }

// function printUser(id) {
//   const user = getUser(id);

//   let name = "Geust";
//   if (user != null && user.name != null) name = user.name;
//   console.log("Hi " + name);

//   if (user != null && user.hasAccess != null && user.hasAccess()) {
//     console.log("you have access");
//   } else {
//     console.log("you are not allowed here");
//   }
// }
