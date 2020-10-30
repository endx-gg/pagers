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

  await handle.testImplementsBasicBehaviour({ assertEquals: t.deepEqual });
});

test("implements errors behaviour", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.testImplementsErrorsBehaviour(
    async () => {
      handle.setValue("value that causes an error");
      return "Error";
    },
    {
      assertEquals: t.deepEqual,
    }
  );
});

test("#focus focuses input", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.focus();
  t.true(await handle.isFocused());
});

test("#blur blurs input", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.focus();
  await handle.blur();
  t.false(await handle.isFocused());
});
