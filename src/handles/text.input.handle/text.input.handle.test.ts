import anyTest, { TestInterface } from "ava";
import { TestTextInputHandle } from "./test.handle";

const test = anyTest as TestInterface<{ handle: TestTextInputHandle }>;

test.beforeEach((t) => {
  t.context.handle = new TestTextInputHandle();
});

test("implements basic behaviour", async (t) => {
  await t.context.handle.testHandleImplementsBasicBehaviour({ assertEquals: t.deepEqual });
});

test("implements errors behaviour", async (t) => {
  const erroFlow = async () => {
    t.context.handle.setValue("value that causes an error");
    return "Error";
  };

  await t.context.handle.testHandleImplementsErrorsBehaviour(erroFlow, { assertEquals: t.deepEqual });
});

test("implements focus behaviour", async (t) => {
  await t.context.handle.testHandleImplementsFocusBehaviour({ assertEquals: t.deepEqual });
});
