import * as fooTypesModules from "./foo.interface";
import * as fooModules from "./foo";

declare global {
  namespace teams {
    export namespace calling {
      export import FooClass = fooModules.FooClass;
      export import FooClassInstance = fooModules.FooClassInstance;
      export import Foo = fooTypesModules.Foo;
      export import Foo2 = fooTypesModules.Foo2;
    }
  }
};
