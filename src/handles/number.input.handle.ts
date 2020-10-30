import { IInputHandle } from "./input.handle";

export interface INumberInputHandle extends IInputHandle {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
  focus(): Promise<void>;
}

export abstract class NumberInputHandle implements INumberInputHandle {
  getValue(): Promise<number> {
    throw new Error("Method not implemented.");
  }
  getError(): Promise<string> {
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
}
