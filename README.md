<h1 align="center">🔷 TypeScript Core Concepts & Basics 🔷</h1>

## 🔠 Primitive Types 
TypeScript is a superset of JavaScript that adds static typing. It only runs on the development side, which is why in the end it's just JavaScript code in the browser. TypeScript allows us to use primitive types like `string`, `boolean` or `number`.

```typescript
let name: string = "Leo"
name = 123 // Type Error
```

TypeScript can also infer data types by the value that is assigned. This makes your code more concise:

```typescript
let name = "Leo" //Inferred type is string
```

As seen above, types are defined next to the variable name using `:` followed by the type.

## 🔀 Union Types 
Sometimes a value could be two or more types. To make that possible we use the union type with the `|` operator:

```typescript
let stringOrNumber: string | number;
stringOrNumber = 123
stringOrNumber = "abc"
```

## 📦 Object Types 
An object is a collection of values, each with its own name. You can use the basic `object` type:

```typescript
let myObject: object
```

But this is a very basic approach which only follows the _object_ standard rules and doesn't type the properties inside the object. For better control and type awareness, it's better to define the structure:

```typescript
// Using type (preferred for most cases)
type TypedObject = {
  name: string;
  age: number;
  id: string | number;
}
let typeObject: TypedObject = { name: "Leo", age: 21, id: "l21" }

// Using interface (alternative approach)
interface TypedObject {
  name: string;
  age: number;
  id: string | number;
}
let typeObject: TypedObject = { name: "Leo", age: 21, id: "l21" }
```

Both look similar but have differences. `type` is generally preferred for simple object shapes, while `interface` is more suited for working with classes and supports features like declaration merging.

## 📚 Array Types 
An array is an ordered collection of values which can leverage the built-in Array methods. These values can be numbers, strings, objects, etc.

```typescript
let arrayNumbers: number[] = [1, 2, 3, 4, 5, 6];
let arrayStrings: Array<string> = ["a", "b", "c"];
let arrayObjects: { name: string; age: number }[] = [{ name: "Leo", age: 21 }];
let arrayIds: Array<{ ids: string | number }> = [{ ids: 123 }, { ids: "321" }];
```

## 🧮 Function Types 
Similar to other languages like C++, TypeScript requires declaring the types of function parameters and return values:

```typescript
function greeting(name: string): void {
  console.log("Hi, " + name);
}

// Function that returns a value
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}
```

## 🛠️ Custom Types 
Also known as Type Aliases, these are used to define reusable types:

```typescript
// Without custom types
function someAction(a: number | string, b: number | string, dummyFn: (a: number, b: number) => number): number {
  return dummyFn(+a, +b);
}

// With custom types
type StringOrNumber = string | number
type DummyFnType = (a: number, b: number) => number

function someAction(a: StringOrNumber, b: StringOrNumber, dummyFn: DummyFnType): number {
  return dummyFn(+a, +b);
}

// Complex custom type
type User = {
  name: string;
  age: number;
  id: StringOrNumber;
  fn: DummyFnType;
};
```

## 🔗 Merging Types 
Similar to union types with `|`, merging types uses the `&` operator to combine types:

```typescript
type Admin = {
  permissions: string[];
};

type AppUser = {
  email: string;
  password: string;
};

type AppAdmin = Admin & AppUser;
let admin: AppAdmin = {
  email: "admin@admin.com",
  password: "123",
  permissions: ["login", "add", "delete"],
};
```

## 🧙‍♂️ Literal Types 
Literal types allow you to define exact values that a variable can hold:

```typescript
type Role = "admin" | "user" | "editor";

let role: Role;
role = "user";
role = "admin";
role = "editor";
role = "god"; // Error => Type '"god"' is not assignable to type 'Role'
```

> [!NOTE]
> Literal types are checked only during development, not at runtime in the browser.

## 🛡️ Type Guards 
Type guards help narrow down types within conditional blocks:

```typescript
type Role = "admin" | "user" | "editor";

function performAction(action: string, role: Role): void {
  // This is a type guard
  if (role === "admin") {
    // TypeScript knows 'role' is specifically "admin" here
    console.log("Admin performing:", action);
  } else {
    // TypeScript knows 'role' is either "user" or "editor" here
    console.log("Regular user performing:", action);
  }
}
```

## 🧩 Generic Types 
These are flexible type templates that create a typing pattern without specifying the exact type:

```typescript
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [], // TypeScript knows it's an array of strings
  add(text) {}, // TypeScript knows 'text' is a string
};

type User = { name: string; age: number };
const userStorage: DataStorage<User> = {
  storage: [], // Array of User objects
  add(user) {}, // 'user' is of type User
};
```

## 🔄 Generic Functions 
Generic functions allow you to create flexible, reusable functions with type safety:

```typescript
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// Explicitly specifying generic types
const user1 = merge<{name: string}, {age: number}>({name: "Leo"}, {age: 21});

// Letting TypeScript infer types automatically (preferred when possible)
const user2 = merge({ name: "Leo" }, { age: 21 });
// TypeScript infers: const user2: {name: string} & {age: number}
```

---

## 📝 Quick Reference

* **Built-in types**: `string`, `number`, `boolean`, `object`, `Array` — for simple and standard behavior
* **Custom Types**: `type User = {...}` — to create your own types based on specific needs
* **Union Types**: `a | b` — for a value that could be one of multiple types
* **Merging Types**: `a & b` — for a value that must include properties from multiple types
* **Literal Types**: `type Role = "admin" | "user"` — when you need to restrict possible values
* **Type Guards**: Conditional checks that help TypeScript narrow down types
* **Interface Types**: `interface User {...}` — preferred when working with classes or when you need declaration merging
* **Generic Types & Functions**: For creating flexible, reusable type patterns

> [!NOTE]
> This is a condensed guide to TypeScript's core concepts. For more detailed information, refer to the [official TypeScript documentation](https://www.typescriptlang.org/docs/).
