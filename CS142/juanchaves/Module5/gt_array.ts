function loggingIdentity<T>(arg: T[]): T[] { // or => function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more errors
  return arg;
}

var names: string[] = new Array("A", "B", "C", "D");
loggingIdentity(names);
