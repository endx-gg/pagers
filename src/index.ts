export interface IInputElement {
  getValue(): Promise<any>;
  getError(): Promise<string>;
  hasError(): Promise<boolean>;
  blur(): Promise<void>;
  setValue(value: any): Promise<void>;
}

export interface ITextInputElement extends IInputElement {
  getValue(): Promise<string>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: string): Promise<void>;
}

export interface INumberInputElement extends IInputElement {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
}

export interface INumberInputElement extends IInputElement {
  getValue(): Promise<number>;
  getError(): Promise<string>;
  blur(): Promise<void>;
  setValue(value: number): Promise<void>;
}

export interface IButtonElement {
  click(): Promise<void>;
  press(): Promise<void>;
  isDisabled(): Promise<boolean>;
}
