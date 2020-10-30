import anyTest, { TestInterface } from "ava";
import { TestTextInputHandle } from "./test.handle";

const test = anyTest as TestInterface<{ handle: TestTextInputHandle }>;

test.beforeEach((t) => {
  t.context.handle = new TestTextInputHandle();
});

test("#getValue returns null if no value has been set", async (t) => {
  const {
    context: { handle },
  } = t;

  t.is(await handle.getValue(), null);
});

test("#setValue sets value", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.setValue("test");
  t.is(await handle.getValue(), "test");
});

test("#hasError returns false if no error is present", async (t) => {
  const {
    context: { handle },
  } = t;

  t.false(await handle.hasError());
});

test("#getErrorMessagee returns null if no error is present", async (t) => {
  const {
    context: { handle },
  } = t;

  t.is(await handle.getErrorMessage(), null);
});

test("#getErrorMessage returns error message", async (t) => {
  const {
    context: { handle },
  } = t;

  await handle.setValue("value that causes an error");
  t.is(await handle.getErrorMessage(), "Error");
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
