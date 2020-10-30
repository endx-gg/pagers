import { IInputHandle } from "./input.handle";

export interface ITextInputHandle extends IInputHandle {
  getValue(): Promise<string>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
  focus(): Promise<void>;
}

export abstract class TextInputHandle implements ITextInputHandle {
  getValue(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  getError(): Promise<string> {
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
}
