let userName = "Leo"; // Infer type string | let userName: string; && number & boolean

// UNION TYPES
let userId: string | number; // Concatenate at least two types
userId = 123;
userId = "321";
// userId = true
// userId = []
// userId = {}

// OBJECT TYPES

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: number | string;
  likes: { post: string }[];
};

// user = "Leo" => Error
// user = {} => Error - Empty object
user = {
  name: "Leo",
  age: 21,
  isAdmin: true,
  id: "123",
  likes: [{ post: "post uno" }, { post: "post dos" }],
};

// ARRAY TYPES
let arrayNumbers: number[] = [1, 2, 3, 4, 5, 6];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayObjects: { name: string; age: number }[] = [{ name: "Leo", age: 21 }];
let arrayIds: Array<{ ids: string | number }> = [{ ids: 123 }, { ids: "321" }];

// FUNCTION TYPES => Params types | return types | defining function types
function greeting(name: string): void {
  console.log("Hi, " + name);
}

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// CUSTOM TYPES | TYPES ALIASES
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn): number {
  return calcFn(a, b);
}

calculate(12, 20, add);

type StringOrNumber = string | number;
let postId: StringOrNumber;
postId = 2;
postId = "123";
// postId = true

type User = {
  name: string;
  age: number;
  id: StringOrNumber;
  calc: AddFn;
};

let newUser: User;
newUser = {
  name: "Leo",
  age: 21,
  id: 123,
  calc: add,
};

// INTERFACES FOR OBJECT TYPES
interface Credentials {
  email: string;
  password: string;
}

// INTERFACES CAN BE EASILY EXTENDED
// interface Credentials {
//     userName: string;
// }

let creds: Credentials = { email: "leo@gmail.com", password: "123" };

// INTERFACES CAN BE USED ALONG CLASSES
class AuthCredentials implements Credentials {
  email: string;
  password: string;
}

function login(credentials: Credentials) {
  //...
}

login(new AuthCredentials());

// MERGING TYPES WITH & OPERATOR
type Admin = {
  permissions: string[];
};

type AppUser = {
  email: string;
  password: string;
};

// INTERFACE => interface AppAdmin extends Admin, AppUser { newValues }
type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
  email: "admin@gmail.com",
  password: "123",
  permissions: ["login", "add", "delete"],
};

// LITERAL TYPES
let role: "admin" | "user" | "editor";
role = "user";
role = "admin";
role = "editor";
// role = 'god'

// TYPE GUARDS
//function someAction(a: number, role: 'admin' | 'user') : void {}

type Role = "admin" | "user" | "editor";

function someAdminAction(action: string, role: Role): void {
  if (role === "admin") {
    // ...
  }
}
