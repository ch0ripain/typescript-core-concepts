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

//ARRAY TYPES
let arrayNumbers: number[] = [1, 2, 3, 4, 5, 6];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayObjects: { name: string; age: number }[] = [{ name: "Leo", age: 21 }];
let arrayIds: Array<{ ids: string | number }> = [{ ids: 123 }, { ids: "321" }];

//FUNCTION TYPES => Params types | return types | defining function types
function greeting(name: string): void {
  console.log("Hi, " + name);
}

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
): number {
  return calcFn(a, b);
}

calculate(12, 20, add);
