import { IInputHandle } from "../input.handle";

export interface ITextInputHandle extends IInputHandle {
  getValue(): Promise<string | null>;
  getErrorMessage(): Promise<string | null>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
  focus(): Promise<void>;
}

interface ITestOptions {
  assertEquals: <T>(actual: T, expected: T) => void;
}

export abstract class TextInputHandle implements ITextInputHandle {
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

  async testImplementsBasicBehaviour(options: ITestOptions): Promise<void> {
    options.assertEquals(await this.getValue(), null);
    await this.setValue("test");
    options.assertEquals(await this.getValue(), "test");
  }

  async testImplementsErrorsBehaviour(errorFlow: () => Promise<string>, options: ITestOptions): Promise<void> {
    options.assertEquals(await this.hasError(), false);
    options.assertEquals(await this.getErrorMessage(), null);
    const errorMessage = await errorFlow();
    options.assertEquals(await this.hasError(), true);
    options.assertEquals(await this.getErrorMessage(), errorMessage);
  }
}
