export interface FormFieldModel {
  label: string;
  name: string;
  required?: boolean;
  error?: any;
  pattern?: RegExp;
  errorMessage?: string;
  defaultValue?: string | number;
}
