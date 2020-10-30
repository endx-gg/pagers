export interface IInputHandle {
  getValue(): Promise<any>;
  getError(): Promise<string>;
  hasError(): Promise<boolean>;
  blur(): Promise<void>;
  setValue(value: any): Promise<void>;
}

export interface ITextInputHandle extends IInputHandle {
  getValue(): Promise<string>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
}

export interface INumberInputHandle extends IInputHandle {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
}

export interface INumberInputHandle extends IInputHandle {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
}

export interface IButtonElementHandle {
  click(): Promise<void>;
  press(): Promise<void>;
  isDisabled(): Promise<boolean>;
}
