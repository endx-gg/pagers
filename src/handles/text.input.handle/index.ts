import { IInputHandle } from "../input.handle";

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

export class TextInputHandle implements ITextInputHandle {
  static async findByTestId(): Promise<TextInputHandle> {
    throw new Error("Method not implemented.");
  }
  static async findByPlaceholder(): Promise<TextInputHandle> {
    throw new Error("Method not implemented.");
  }
  static async findByLabel(): Promise<TextInputHandle> {
    throw new Error("Method not implemented.");
  }
  getValue(): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  getErrorMessage(): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  blur(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setValue(value: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  focus(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  hasError(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  isFocused(): Promise<boolean> {
    throw new Error("Method not implemented.");
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
