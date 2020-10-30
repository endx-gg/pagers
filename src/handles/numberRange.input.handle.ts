import { IInputHandle } from "./input.handle";
import { INumberInputHandle } from "./number.input.handle";

export interface INumberRangeInputHandle extends IInputHandle {
  getValue(): Promise<[number, number]>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setFirstValue(value: number): Promise<void>;
  setLastValue(value: number): Promise<void>;
  setRangeValue(value: [number, number]): Promise<void>;
  focus(): Promise<void>;
}

export abstract class NumberRangeInputHandle
  implements INumberRangeInputHandle {
  getValue(): Promise<[number, number]> {
    throw new Error("Method not implemented.");
  }
  getError(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  blur(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setFirstValue(value: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setLastValue(value: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setRangeValue(value: [number, number]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  focus(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  hasError(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  setValue(value: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
