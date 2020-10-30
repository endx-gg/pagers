import { IInputHandle } from "./input.handle";

export interface INumberInputHandle extends IInputHandle {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
  focus(): Promise<void>;
}
