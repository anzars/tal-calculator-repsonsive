export class Link {
  public Text: string;
  public Href: string;
}

export class error {
  public Value: any;
  public MessageOnError: string;
}

export class ValidationRules {
  public Required: error;
  public Min: error;
  public Max: error;
}

export class FieldValue {
  public Value: string;
  public Text: string
}

export class Field {
  public Label: string;
  public DefaultValue: any;
  public Values: FieldValue[];
  public ValidationRules: ValidationRules;
  public IsVisible: boolean;
  public IsDisabled: boolean;
  public ToolTip: string;
  public PlaceHolder: string;
}

export enum Type {
  "YesNo" = 1,
  "Checkbox" = 2,
  "Dropdown" = 3,
  "Text" = 4,
  "Number" = 5,
  "Range" = 6,
  "Button" = 7
}

export enum Validity {
  "Valid" = 'VALID',
  "Invalid" = 'INVALID'
 }

export enum LabelPosition {
  "Top" = 1,
  "Left" = 2
}

export class FormModel {
  public Fields: Field[];
}
