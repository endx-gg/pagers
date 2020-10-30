import { IInputHandle } from "./input.handle";

export interface ITextInputHandle extends IInputHandle {
  getValue(): Promise<string>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
  focus(): Promise<void>;
}
