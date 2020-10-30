export interface IInputHandle {
  getValue(): Promise<any>;
  getError(): Promise<string>;
  hasError(): Promise<boolean>;
  blur(): Promise<void>;
  setValue(value: any): Promise<void>;
}
