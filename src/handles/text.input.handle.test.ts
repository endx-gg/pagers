import anyTest, { TestInterface } from "ava";
import { TextInputHandle } from "./text.input.handle";

class TestTextInputHandle extends TextInputHandle {
  private value: string | null = null;
  private error: string | null = null;

  async setValue(value: string): Promise<void> {
    this.value = value;
  }
  async getValue(): Promise<string | null> {
    return this.value;
  }
  async getErrorMessage(): Promise<string | null> {
    if (this.value === "value that causes an error") return "Error";
    return this.error;
  }
}

const test = anyTest as TestInterface<{ handle: TestTextInputHandle }>;

test.beforeEach((t) => {
  t.context.handle = new TestTextInputHandle();
});

test("returns null if no value has been set", async (t) => {
  const {
    context: { handle },
  } = t;

  t.is(await handle.getValue(), null);
});

test("sets value", async (t) => {
  const {
    context: { handle },
  } = t;

  await t.context.handle.setValue("test");
  t.is(await handle.getValue(), "test");
});

test("returns null if no error is present", async (t) => {
  const {
    context: { handle },
  } = t;

  t.is(await handle.getErrorMessage(), null);
});

test("returns error message", async (t) => {
  const {
    context: { handle },
  } = t;

  await t.context.handle.setValue("value that causes an error");
  t.is(await handle.getErrorMessage(), "Error");
});
