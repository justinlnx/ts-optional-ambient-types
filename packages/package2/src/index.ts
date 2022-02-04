// // example 1:
// import FooClass = teams.calling.FooClass;
// import FooClassInstance = teams.calling.FooClassInstance;
// /**
//  * PASSING CASE:
//  * enable this line below and build to get a passing build
//  * seems that "import" would resolve the path correctly while using "type" wouldn't
//  */
// import Foo2 = teams.calling.Foo2;

// /**
//  * FAILING CASE:
//  * enable this line below and build to see the issue
//  * Foo2 is being used as an optional type
//  */
// // type Foo2 = teams.calling.Foo2;


// export const foo = (
//   param: teams.calling.Foo,
//   param2: Foo2,
//   // paramWithDefaultAssign: teams.calling.Foo | undefined = undefined,
//   fooClass: FooClass,
//   // paramOpt?: Foo,
//   paramOpt2?: Foo2,
//   optionalFoo: FooClass = FooClassInstance
// ) => {
//   console.log("xxx:", fooClass, paramOpt2, optionalFoo, param, param2);
// };


// example 2:
import { createFoo } from "./factory";
/**
 * enable next line when using the PASSING CASE below
 */
// import FooClass = teams.calling.FooClass;
export const someFunction = () => {
  /**
   * FAILING CASE:
   * if the type of `fooInstance` is not explicitly defined,
   * then the type does not infer correctly. i.e. it will pull from the src with a relatively path import
   */
  const fooInstance = createFoo();

  /**
   * PASSING CASE:
   * specifically define the type of the instance
   */
  //  const fooInstance2: FooClass = createFoo();
  return {
    foo: fooInstance,
    // foo2: fooInstance2,
  }
}