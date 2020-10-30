export interface IButtonElementHandle {
  click(): Promise<void>;
  press(): Promise<void>;
  isDisabled(): Promise<boolean>;
}
