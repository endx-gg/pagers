import anyTest, { TestInterface } from "ava";
import { TextInputHandle } from "./text.input.handle";

class TestTextInputHandle extends TextInputHandle {
  private value: string | null = null;
  private error: string | null = null;
  private _isFocused: boolean = false;

  async setValue(value: string): Promise<void> {
    this.value = value;
  }
  async getValue(): Promise<string | null> {
    return this.value;
  }
  async getErrorMessage(): Promise<string | null> {
    if (await this.hasError()) return "Error";
    return this.error;
  }
  async focus(): Promise<void> {
    this._isFocused = true;
  }
  async hasError(): Promise<boolean> {
    return this.value === "value that causes an error";
  }
  async isFocused(): Promise<boolean> {
    return this._isFocused;
  }
}

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

  await t.context.handle.setValue("test");
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

  await t.context.handle.setValue("value that causes an error");
  t.is(await handle.getErrorMessage(), "Error");
});

test("#focus focuses input", async (t) => {
  const {
    context: { handle },
  } = t;

  await t.context.handle.focus();
  t.true(await handle.isFocused());
});
