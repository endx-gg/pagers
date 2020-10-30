import { IInputHandle } from "./input.handle";

export interface INumberInputHandle extends IInputHandle {
  getValue(): Promise<number>;
  getErrorMessage(): Promise<string | null>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
  focus(): Promise<void>;
}

export abstract class NumberInputHandle implements INumberInputHandle {
  getValue(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  getErrorMessage(): Promise<string | null> {
    throw new Error("Method not implemented.");
  }
  blur(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setValue(value: number): Promise<void> {
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
}
