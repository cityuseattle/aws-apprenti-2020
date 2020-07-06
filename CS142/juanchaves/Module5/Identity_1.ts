function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("MyString");
console.log(output);
