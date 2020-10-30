import anyTest, { TestInterface } from "ava";
import { TextInputHandle } from "./text.input.handle";

class TestTextInputHandle extends TextInputHandle {
  private value: string | null = null;

  async setValue(value: string): Promise<void> {
    this.value = value;
  }
  async getValue(): Promise<string | null> {
    return this.value;
  }
}

const test = anyTest as TestInterface<{ handle: TestTextInputHandle }>;

test.beforeEach((t) => {
  t.context.handle = new TestTextInputHandle();
});

test("correctly sets value", async (t) => {
  const {
    context: { handle },
  } = t;

  await t.context.handle.setValue("test");
  t.is(await handle.getValue(), "test");
});
