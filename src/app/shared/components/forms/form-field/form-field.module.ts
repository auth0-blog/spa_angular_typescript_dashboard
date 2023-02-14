import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormFieldComponent } from "./form-field.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormFieldComponent],
  exports: [FormFieldComponent],
})
export class FormFieldModule {}
