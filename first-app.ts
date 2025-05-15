let userName = "Leo"; // Infer type string | let userName: string; && number & boolean

// Union types
let userId: string | number; // Concatenate at least two types
userId = 123;
userId = "321";
// userId = true
// userId = []
// userId = {}

// Object types

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string;
};

// user = "Leo" => Error
// user = {} => Error - Empty object
user = {
  name: "Leo",
  age: 21,
  isAdmin: true,
  id: "123",
};
