import { IInputHandle } from "./input.handle";

export interface INumberRangeInputHandle extends IInputHandle {
  getValue(): Promise<[number, number]>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setFirstValue(value: number): Promise<void>;
  setLastValue(value: number): Promise<void>;
  setRangeValue(value: [number, number]): Promise<void>;
  focus(): Promise<void>;
}
