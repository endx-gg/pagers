import anyTest, { Implementation, TestInterface } from "ava";
import { TextInputHandleBase } from ".";

interface Context {
  handle: TextInputHandleBase;
}

const test = anyTest as TestInterface<Context>;

test.beforeEach((t) => {
  t.context.handle = new TextInputHandleBase();
});

test("base throws correct error for getValue", async (t) => {
  const error = t.throws(() => t.context.handle.getValue());
  t.is(error.message, "implement #getValue method on your handle");
});

test("base throws correct error for getErrorMessage", async (t) => {
  const error = t.throws(() => t.context.handle.getErrorMessage());
  t.is(error.message, "implement #getErrorMessage method on your handle");
});

test("base throws correct error for blur", async (t) => {
  const error = t.throws(() => t.context.handle.blur());
  t.is(error.message, "implement #blur method on your handle");
});

test("base throws correct error for setValue", async (t) => {
  const error = t.throws(() => t.context.handle.setValue("any value"));
  t.is(error.message, "implement #setValue method on your handle");
});

test("base throws correct error for focus", async (t) => {
  const error = t.throws(() => t.context.handle.focus());
  t.is(error.message, "implement #focus method on your handle");
});

test("base throws correct error for hasError", async (t) => {
  const error = t.throws(() => t.context.handle.hasError());
  t.is(error.message, "implement #hasError method on your handle");
});

test("base throws correct error for isFocused", async (t) => {
  const error = t.throws(() => t.context.handle.isFocused());
  t.is(error.message, "implement #isFocused method on your handle");
});
