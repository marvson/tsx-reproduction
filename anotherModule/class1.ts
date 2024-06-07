import { Class1Abstract, Class2 } from '../myModule';

export class Class1 implements Class1Abstract {
  doSomething(): void {
    const anotherThing = new Class2();
    anotherThing.doAnotherThing();
  }
}
