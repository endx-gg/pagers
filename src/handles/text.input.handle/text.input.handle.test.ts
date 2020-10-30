import anyTest, { TestInterface } from "ava";
import { TestTextInputHandle } from "./test.handle";

const test = anyTest as TestInterface<{ handle: TestTextInputHandle }>;

test.beforeEach((t) => {
  t.context.handle = new TestTextInputHandle();
});

test("implements basic behaviour", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.testHandleImplementsBasicBehaviour({ assertEquals: t.deepEqual });
});

test("implements errors behaviour", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.testHandleImplementsErrorsBehaviour(
    async () => {
      handle.setValue("value that causes an error");
      return "Error";
    },
    {
      assertEquals: t.deepEqual,
    }
  );
});

test("implements focus behaviour", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.testHandleImplementsFocusBehaviour({
    assertEquals: t.deepEqual,
  });
});
