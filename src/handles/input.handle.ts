export interface IInputHandle {
  getValue(): Promise<any>;
  getErrorMessage(): Promise<string | null>;
  hasError(): Promise<boolean>;
  blur(): Promise<void>;
  setValue(value: any): Promise<void>;
}
