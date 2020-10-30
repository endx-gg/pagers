export interface IButtonElementHandle {
  click(): Promise<void>;
  press(): Promise<void>;
  isDisabled(): Promise<boolean>;
}

export abstract class ButtonElementHandle implements IButtonElementHandle {
  click(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  press(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  isDisabled(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
