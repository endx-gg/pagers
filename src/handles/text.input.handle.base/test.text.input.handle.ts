import { TextInputHandleBase } from ".";

export class TestTextInputHandle extends TextInputHandleBase {
  private value: string | null = null;
  private error: string | null = null;
  private _isFocused: boolean = false;

  async setValue(value: string): Promise<void> {
    this.value = value;
  }
  async getValue(): Promise<string | null> {
    return this.value;
  }
  async getErrorMessage(): Promise<string | null> {
    if (await this.hasError()) return "Error";
    return this.error;
  }
  async focus(): Promise<void> {
    this._isFocused = true;
  }
  async blur(): Promise<void> {
    this._isFocused = false;
  }
  async hasError(): Promise<boolean> {
    return this.value === "value that causes an error";
  }
  async isFocused(): Promise<boolean> {
    return this._isFocused;
  }
}
