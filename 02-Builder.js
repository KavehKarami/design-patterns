// REVIEW Suggested way
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Kevin", { age: 21, address: new Address("1", "main") });
console.log(user);

/* -------------------------------------------------------------------------- */

// NOTE Way One: Tranditional Way:
// class Address {
//   constructor(zip, street) {
//     this.zip = zip;
//     this.street = street;
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }

//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }

//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }

//   build() {
//     return this.user;
//   }
// }

// const user = new UserBuilder("Kevin")
//   .setAge(2)
//   .setAddress(new Address("1", "main"))
//   .build();
// console.log(user);

/* -------------------------------------------------------------------------- */

// NOTE without Design Pattern :
// class Address {
//   constructor(zip, street) {
//     this.zip = zip;
//     this.street = street;
//   }
// }

// class User {
//   constructor(name, age, phone, address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// const user = new User("Kevin", undefined, undefined, new Address("1", "main"));
// console.log(user);
