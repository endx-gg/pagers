import { IInputHandle } from "../input.handle";
import { MethodNotImplementedError } from "../methodNotImplemented.error";

export interface ITextInputHandle extends IInputHandle {
  getValue(): Promise<string | null>;
  getErrorMessage(): Promise<string | null>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
  focus(): Promise<void>;
  testHandleImplementsBasicBehaviour(options: ITestOptions): Promise<void>;
  testHandleImplementsErrorsBehaviour(errorFlow: () => Promise<string>, options: ITestOptions): Promise<void>;
  testHandleImplementsFocusBehaviour(options: ITestOptions): Promise<void>;
}

interface ITestOptions {
  assertEquals: <T>(actual: T, expected: T) => void;
}

export class TextInputHandleBase implements ITextInputHandle {
  static async findByTestId(): Promise<TextInputHandleBase> {
    throw new Error("Method not implemented.");
  }
  static async findByPlaceholder(): Promise<TextInputHandleBase> {
    throw new Error("Method not implemented.");
  }
  static async findByLabel(): Promise<TextInputHandleBase> {
    throw new Error("Method not implemented.");
  }
  getValue(): Promise<string | null> {
    throw new MethodNotImplementedError("getValue");
  }
  getErrorMessage(): Promise<string | null> {
    throw new MethodNotImplementedError("getErrorMessage");
  }
  blur(): Promise<void> {
    throw new MethodNotImplementedError("blur");
  }
  setValue(value: string): Promise<void> {
    throw new MethodNotImplementedError("setValue");
  }
  focus(): Promise<void> {
    throw new MethodNotImplementedError("focus");
  }
  hasError(): Promise<boolean> {
    throw new MethodNotImplementedError("hasError");
  }
  isFocused(): Promise<boolean> {
    throw new MethodNotImplementedError("isFocused");
  }

  async testHandleImplementsBasicBehaviour(options: ITestOptions): Promise<void> {
    options.assertEquals(await this.getValue(), null);
    await this.setValue("test");
    options.assertEquals(await this.getValue(), "test");
  }

  async testHandleImplementsErrorsBehaviour(errorFlow: () => Promise<string>, options: ITestOptions): Promise<void> {
    options.assertEquals(await this.hasError(), false);
    options.assertEquals(await this.getErrorMessage(), null);
    const errorMessage = await errorFlow();
    options.assertEquals(await this.hasError(), true);
    options.assertEquals(await this.getErrorMessage(), errorMessage);
  }

  async testHandleImplementsFocusBehaviour(options: ITestOptions): Promise<void> {
    options.assertEquals(await this.isFocused(), false);
    await this.focus();
    options.assertEquals(await this.isFocused(), true);
    await this.blur();
    options.assertEquals(await this.isFocused(), false);
  }
}
